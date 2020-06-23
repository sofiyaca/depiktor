'use strict';
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, './../.env') }); // eslint-disable-line

const schedule = require('node-schedule');
const { twitterApiFetch } = require('./twitter_api');

const queryTerms = require('../seeders/query-terms');

//schedule recurring get request once every hour
const rule = new schedule.RecurrenceRule();
rule.minute = 38;

schedule.scheduleJob(rule, () => {
  try {
    twitterApiFetch(queryTerms.slice(queryTerms.length / 2));
    console.log(`Background worker 2 ran at ${Date.now()}`);
  } catch (error) {
    console.log(`Error with background worker 2 at ${Date.now()}`, error);
  }
});
