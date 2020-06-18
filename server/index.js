'use strict';

const express = require('express');
const app = new express();
const morgan = require('morgan');
const cors = require('cors');

const db = require('./models');
const router = require('./router/router');
const PORT = 3002;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(router);

// connect to the db
(async () => {
  try {
    await db.sequelize.sync();
    app.listen(PORT, () => console.log(`📣 App listening on port ${PORT}`));
  } catch (e) {
    console.error('😟 Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
