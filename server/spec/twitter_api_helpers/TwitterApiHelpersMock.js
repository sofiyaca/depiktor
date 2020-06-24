const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} = require('./../../config');
const moment = require('moment');

const mocks = {
  undefinedKey: undefined,
  undefinedSecret: undefined,
  fakeKey: 'abc',
  fakeSecret: 'secret',
  validKey: TWITTER_CONSUMER_KEY,
  validSecret: TWITTER_CONSUMER_SECRET,
  requestConfig: {
    url: new URL('https://api.twitter.com/labs/2/tweets/search'),
    qs: {
      max_results: 100,
      start_time: moment().subtract(2, 'hours').toISOString(),
      end_time: moment().subtract(1, 'hours').toISOString(),
      query: encodeURIComponent('Jasmine'),
    },
    auth: {
      bearer: undefined,
    },
    headers: {
      'User-Agent': 'Depiktor App',
    },
    json: true,
  },
  tweets1: {
    meta: {
      result_count: 6,
      next_token: 'tweets2',
    },
  },
  tweets2: {
    meta: {
      result_count: 8,
    },
  },
};

module.exports = mocks;
