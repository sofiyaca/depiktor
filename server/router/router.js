'use strict';

const express = require('express');
const router = express.Router();
const TechController = require('../controllers/technology');

router.get('/', TechController.getAll);
router.post('/test', TechController.postOne);

module.exports = router;
