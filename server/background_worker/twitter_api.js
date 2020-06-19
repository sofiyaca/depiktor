const request = require('request');
const util = require('util');
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = require('./../conf');

const db = require('../models');
const Technology = db.technology;

const get = util.promisify(request.get);
const post = util.promisify(request.post);

const consumer_key = TWITTER_CONSUMER_KEY; // Add your API key here
const consumer_secret = TWITTER_CONSUMER_SECRET; // Add your API secret key here

const bearerTokenURL = new URL('https://api.twitter.com/oauth2/token');
const searchURL = new URL('https://api.twitter.com/labs/2/tweets/search');

async function bearerToken() {
  const requestConfig = {
    url: bearerTokenURL,
    auth: {
      user: consumer_key,
      pass: consumer_secret,
    },
    form: {
      grant_type: 'client_credentials',
    },
  };

  const response = await post(requestConfig);
  return JSON.parse(response.body).access_token;
}

async function twitterApiFetch() {
  let token;
  const maxResults = 100;

  //create start_time that's two hours ago
  var tempStart = new Date();
  tempStart.setHours(tempStart.getHours() - 2);
  var start_time = new Date(tempStart).toISOString();

  //create end_time that's one hour ago
  var tempEnd = new Date();
  tempEnd.setHours(tempEnd.getHours() - 1);
  var end_time = new Date(tempEnd).toISOString();

  try {
    // Exchange credentials for a Bearer token
    token = await bearerToken();
  } catch (e) {
    console.error(
      `Could not generate a Bearer token. Please check that your credentials are correct and that the Filtered Stream preview is enabled in your Labs dashboard. (${e})`
    );
    process.exit(-1);
  }

  const requestConfig = {
    url: searchURL,
    qs: {
      max_results: maxResults,
      start_time: start_time,
      end_time: end_time,
    },
    auth: {
      bearer: token,
    },
    headers: {
      'User-Agent': 'Depiktor App',
    },
    json: true,
  };

  async function getCount(requestConfig) {
    try {
      let res = await get(requestConfig);
      //uncomment to see request status and body
      // console.log(res.statusCode);
      // console.log(res.body);
      if (res.statusCode !== 200) {
        throw new Error(res.json);
      }
      return res.body;
    } catch (error) {
      console.error(
        `Could not get search results. An error occurred: ${error.message}`
      );
      process.exit(-1);
    }
  }

  //find all technologies from the technologies table
  const technologies = await Technology.findAll();

  //loop through each & send name as query param to API
  for (let i = 0; i < technologies.length; i++) {
    let query = technologies[i].dataValues.name;
    requestConfig.qs.query = encodeURIComponent(query);

    let totalCount = 0;
    let body = await getCount(requestConfig);
    let resultCount = body.meta.result_count;

    if (resultCount) {
      totalCount += resultCount;
      let nextToken = body.meta.next_token;

      if (nextToken) {
        requestConfig.qs.next_token = nextToken;

        while (nextToken) {
          let next_body = await getCount(requestConfig);
          totalCount += next_body.meta.result_count;
          requestConfig.qs.next_token = next_body.meta.next_token;
          nextToken = next_body.meta.next_token;
        }
      }
    }
    // console.log(query, totalCount);

    try {
      await technologies[i].createCount({
        total: totalCount,
      });
      console.log(`Success inserting into db`);
    } catch (error) {
      console.log(`Error inserting ${query} into db`, error);
    }
  }
}

module.exports = {
  twitterApiFetch,
};
