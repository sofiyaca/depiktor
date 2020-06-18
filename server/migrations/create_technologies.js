'use strict';
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, './../.env') });
const {queryTerms} = require('./query_terms');
const db = require('../models');
const Technology = db.technology;
const Count = db.count;

async function seedDB(techologies) {
  for (let [key, value] of Object.entries(techologies)) {
    console.log('VALUE ', value);
    for (let i = 0; i < value.length; i++) {
      await Technology.create({
        name: value[i],
        category: key
      })
    }
  }
  console.log('Finished creating');
};

seedDB(queryTerms);



