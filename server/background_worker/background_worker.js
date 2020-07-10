'use strict';

const schedule = require('node-schedule');
const { twitterApiFetch } = require('./twitter_api');
require('dotenv').config();

//schedule recurring get request once every hour
const rule = new schedule.RecurrenceRule();
rule.minute = 32;

schedule.scheduleJob(rule, () => {
  try {
    twitterApiFetch();
    console.log(`Background worker ran at ${Date.now()}`);
  } catch (error) {
    console.log(`Error with background worker at ${Date.now()}`, error);
  }
});

