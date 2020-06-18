require('dotenv').config();

const DB_SERVER = process.env.DB_SERVER;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;

module.exports = {
  DB_SERVER,
  DB_USER,
  DB_PASSWORD,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
};
