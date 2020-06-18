'use strict';
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, './../.env') }); // eslint-disable-line

const schedule = require('node-schedule');
const { twitterApiFetch } = require('./twitter_api');

//schedule recurring get request once every hour
const rule = new schedule.RecurrenceRule();
rule.minute = 54;

schedule.scheduleJob(rule, () => {
  try {
    twitterApiFetch();
    console.log(`Background worker ran at ${Date.now()}`);
  } catch (error) {
    console.log(`Error with background worker at ${Date.now()}`, error);
  }
});
