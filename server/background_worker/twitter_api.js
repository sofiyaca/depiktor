const request = require('request');
const util = require('util');
const moment = require('moment');

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} = require('./../config');

const TechModel = require('../models/technology');

const get = util.promisify(request.get);
const post = util.promisify(request.post);

const bearerTokenURL = new URL('https://api.twitter.com/oauth2/token');
const searchURL = new URL('https://api.twitter.com/labs/2/tweets/search');

async function bearerToken() {
  const requestConfig = {
    url: bearerTokenURL,
    auth: {
      user: TWITTER_CONSUMER_KEY,
      pass: TWITTER_CONSUMER_SECRET,
    },
    form: {
      grant_type: 'client_credentials',
    },
  };

  const response = await post(requestConfig);
  return JSON.parse(response.body).access_token;
}

async function twitterApiFetch(technologies) {
  let token;
  const maxResults = 100;
  const start_time = moment().subtract(2, 'hours').toISOString();
  const end_time = moment().subtract(1, 'hours').toISOString();

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

  async function getTweets(requestConfig) {
    try {
      let res = await get(requestConfig);
      if (res.statusCode !== 200) {
        throw new Error(res.headers);
      }
      return res.body;
    } catch (error) {
      console.error(
        `Could not get search results. An error occurred: ${error.message}`
      );
      process.exit(-1);
    }
  }

  //loop through each & send name as query param to API
  for (let i = 0; i < technologies.length; i++) {
    let queryName = technologies[i].name;
    requestConfig.qs.query = encodeURIComponent(queryName);

    let tweets = await getTweets(requestConfig);
    let totalTweetCount = tweets.meta.result_count;

    // Getting total number of tweets
    while (tweets.meta.next_token) {
      tweets = await getTweets(requestConfig);
      totalTweetCount += tweets.meta.result_count;
      requestConfig.qs.next_token = tweets.meta.next_token;
    }

    try {
      await TechModel.updateOne(
        { name: queryName },
        {
          $push: {
            counts: totalTweetCount,
            timestamps: moment().toISOString(),
          },
        }
      );
      console.log(`Success inserting into db!`);
    } catch (error) {
      console.log(`Error inserting ${queryName} into db: `, error);
    }
  }
}

module.exports = {
  twitterApiFetch,
};
