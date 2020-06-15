'use strict';

const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAll); 

router.post('/id', controller.createTerm); //add a new search term to the user's view

module.exports = router;



