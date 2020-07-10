const https = require('https');
const request = require('request');
const util = require('util');
require('dotenv').config();

const get = util.promisify(request.get);
const post = util.promisify(request.post);

const consumer_key = process.env.TWITTER_CONSUMER_KEY; // Add your API key here
const consumer_secret = process.env.TWITTER_CONSUMER_SECRET; // Add your API secret key here

const bearerTokenURL = new URL('https://api.twitter.com/oauth2/token');
const searchURL = new URL('https://api.twitter.com/labs/2/tweets/search');

async function bearerToken (auth) {
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

(async () => {
  let token;
  const query = 'angular'; //change this to be a variable 
  const maxResults = 100;

  try {
    // Exchange your credentials for a Bearer token
    token = await bearerToken({consumer_key, consumer_secret});
  } catch (e) {
    console.error(`Could not generate a Bearer token. Please check that your credentials are correct and that the Filtered Stream preview is enabled in your Labs dashboard. (${e})`);
    process.exit(-1);
  }

  const requestConfig = {
    url: searchURL,
    qs: {
      query: query,
      max_results: maxResults,
    },
    auth: {
      bearer: token,
    },
    headers: {
      'User-Agent': 'LabsRecentSearchQuickStartJS',
    },
    json: true,
  };

  try {

    //setup var total_count
    let total_result_count = 0;
    //make first request
    //continue making req until res.body.meta.next_token exists

    const res = await get(requestConfig);  
    console.log(res.statusCode);
    console.log(res.body);
    if (res.statusCode !== 200) {
      throw new Error(res.json);
      return;
    }

    console.log(res.json); //why is this undefined?
  } catch (e) {
    console.error(`Could not get search results. An error occurred: ${e}`);
    process.exit(-1);
  }
})();