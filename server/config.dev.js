require('dotenv').config();

module.exports = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  WEB_HOST: 'localhost',
  WEB_PORT: 3002,
  DATABASE_NAME: 'depiktor_dev',
  DATABASE_USER: process.env.PG_DATABASE_USER,
  DB_HOST: 'localhost',
  DB_PORT: 3002,
};
