const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/tweetdata', controller.getAll);

module.exports = router;
