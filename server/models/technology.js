'use strict';

require('../db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techSchema = new Schema({
  name: String,
  counts: [Number],
  timestamps: [Date],
});

const Technology = mongoose.model('Technology', techSchema);

module.exports = Technology;
