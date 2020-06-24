'use strict';

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './../.env') });
const TechModel = require('../models/technology');
const queryTerms = require('./query-terms');

const seedDB = async (technologies) => {
  for (let i = 0; i < technologies.length; i++) {
    if (!(await TechModel.findOne({ name: technologies[i] }))) {
      await TechModel.create({
        name: technologies[i],
        counts: [],
        timestamps: [],
      });
    }
  }
  console.log(`🌱 Successfully seeded database!`);
  process.exit(-1);
};

seedDB(queryTerms);
