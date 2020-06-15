require('dotenv').config();

const Twitter = require('twit');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.get('search/tweets', {q: 'angular', start_time: '2020-06-12T12:00:00.000Z', end_time: '2020-06-14T12:00:00.000Z',
 max_results: '50'}, function(error, tweets, response) {
   console.log(tweets);
  });