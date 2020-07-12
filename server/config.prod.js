require('dotenv').config();

// Magic incantation from https://gist.githubusercontent.com/sdepold/ced7d2a4a847f38901ef/raw/26c5a94d74db4a242464b02aa8e0ae4b3bac6880/models-index.js
// via https://sequelize.readthedocs.io/en/1.7.0/articles/heroku/
const match = process.env.DATABASE_URL.match(
  /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/
);

module.exports = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  DB_HOST: match[3],
  DB_PORT: match[4],
  DATABASE_NAME: 'depiktor_prod',
  DATABASE_URL: process.env.DATABASE_URL,
  WEB_PORT: process.env.PORT,
  WEB_HOST: 'https://depiktor.herokuapp.com',
};
