require('dotenv').config();

module.exports = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  DB_CONFIG: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
};
