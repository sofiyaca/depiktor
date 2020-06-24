const request = require('request');
const moment = require('moment');
const util = require('util');

const TechModel = require('../models/technology');
const bearerTokenURL = new URL('https://api.twitter.com/oauth2/token');

const get = util.promisify(request.get);
const post = util.promisify(request.post);

const bearerToken = async (KEY, SECRET) => {
  const requestConfig = {
    url: bearerTokenURL,
    auth: {
      user: KEY,
      pass: SECRET,
    },
    form: {
      grant_type: 'client_credentials',
    },
  };

  const response = await post(requestConfig);
  return JSON.parse(response.body).access_token;
};

const getTweets = async (requestConfig) => {
  try {
    let res = await get(requestConfig);
    if (res.statusCode !== 200) {
      throw new Error(`HTTP Status Code - ${res.statusCode}`);
    }
    return res.body;
  } catch (error) {
    console.error(
      `Could not get search results. An error occurred: ${error.message}`
    );
  }
};

const getTweetCount = async (reqConfig, fetchTweets = getTweets) => {
  let tweets = await fetchTweets(reqConfig);
  let totalTweetCount = tweets.meta.result_count;

  // Getting total number of tweets
  while (tweets.meta.next_token) {
    reqConfig.qs.next_token = tweets.meta.next_token;
    tweets = await fetchTweets(reqConfig);
    totalTweetCount += tweets.meta.result_count;
  }

  return totalTweetCount;
};

const updateTechDoc = async (techName, tweetCount) => {
  try {
    const updated = await TechModel.updateOne(
      { name: techName },
      {
        $push: {
          counts: tweetCount,
          timestamps: moment().toISOString(),
        },
      }
    );
    console.log(`Success inserting into db!`);
    return updated;
  } catch (error) {
    console.log(`Error inserting ${techName} into db: `, error);
  }
};

module.exports = {
  updateTechDoc,
  getTweets,
  getTweetCount,
  bearerToken,
};
