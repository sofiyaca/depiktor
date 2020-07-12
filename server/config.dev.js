require('dotenv').config();

module.exports = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  HOST: 'localhost',
  PORT: 3002,
  DATABASE_NAME: 'depiktor_server_db_v3',
  DATABASE_USER: process.env.PG_DATABASE_USER,
};
