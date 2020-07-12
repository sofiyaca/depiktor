const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router/router');
const db = require('./models');
const path = require('path');
const { WEB_PORT, WEB_HOST } = require(process.env.NODE_ENV === 'production'
  ? './config.prod'
  : './config.dev');

const app = new express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

// connect to the db
(async () => {
  try {
    await db.sequelize.sync();
    app.listen(WEB_PORT, () =>
      console.log(`📣 App listening on http://${WEB_HOST}:${WEB_PORT}`)
    );
  } catch (e) {
    console.error('😟 Error connecting to the db', e);
  }
})();
