'use strict';

const db = require('../models');
const { Sequelize } = require('../models');
const { groupedByCategory, serializeTech } = require('./controller-helper');
const moment = require('moment');
const Op = Sequelize.Op;

const oneWeek = moment().subtract(7, 'days').toDate();

async function getAll(_, res) {
  try {
    const technologies = await db.technology.findAll({
      include: [
        {
          model: db.count,
          where: { createdAt: { [Op.gte]: oneWeek } },
          order: 'createdAt',
        },
      ],
    });
    console.log('Tech: ', technologies);

    const groupedByCat = groupedByCategory(technologies);
    const serializedTech = serializeTech(groupedByCat);

    res.status(200).json(serializedTech);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = {
  getAll,
};
