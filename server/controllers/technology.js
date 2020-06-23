'use strict';

const TechModel = require('../models/technology');

const getAll = async (_, res) => {
  try {
    res.body = await TechModel.find({});
    res.status(200).json(res.body);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postOne = async (req, res) => {
  try {
    res.body = await TechModel.create(req.body);
    res.status(201).json(res.body);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteAll = async (req, res) => {
  try {
    res.body = await TechModel.deleteMany({});
    res.status(201).json(res.body);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getAll,
  postOne,
  deleteAll,
};
