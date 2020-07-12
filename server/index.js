const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router/router');
const db = require('./models');
const { PORT, HOST } = require(process.env.NODE_ENV === 'production'
  ? './config.prod'
  : './config.dev');

const app = new express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(router);

// connect to the db
(async () => {
  try {
    await db.sequelize.sync();
    app.listen(PORT, () =>
      console.log(`📣 App listening on http://${HOST}${PORT}`)
    );
  } catch (e) {
    console.error('😟 Error connecting to the db', e);
  }
})();
