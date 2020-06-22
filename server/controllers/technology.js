'use strict';

const TechModel = require('../models/technology');

async function getAll(_, res) {
  try {
    res.body = await TechModel.find({});
    res.status(200).json(res.body);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = {
  getAll,
};
