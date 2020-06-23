const searchURL = new URL('https://api.twitter.com/labs/2/tweets/search');
const moment = require('moment');
const {
  updateTechDoc,
  getTweetCount,
  bearerToken,
} = require('./twitter_api_helpers');

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

  //loop through each & send name as query param to API
  for (let i = 0; i < technologies.length; i++) {
    let techName = technologies[i];
    requestConfig.qs.query = encodeURIComponent(techName);

    const tweetCount = await getTweetCount(requestConfig);
    await updateTechDoc(techName, tweetCount);
  }
}

module.exports = {
  twitterApiFetch,
};
