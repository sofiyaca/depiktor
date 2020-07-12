const { where } = require('sequelize');
const moment = require('moment');
const db = require('../models');
const { Sequelize } = require('../models');
const technology = require('../models/technology');

const { Op } = Sequelize;

// TODO: add a view to process the data from the DB

const oneWeek = moment().subtract(7, 'days').toDate();

const groupedByCategory = (array) => {
  return array.reduce((result, technology) => {
    const { category } = technology.dataValues;
    if (result[category] === undefined) result[category] = [];
    result[category].push(technology);
    return result;
  }, {});
};

function createDataset(technologies) {
  return technologies.map((technology) => {
    const randomCol = getColor();
    return {
      label: technology.dataValues.name,
      data: technology.dataValues.Counts.map((count) => count.total),
      backgroundColor: randomCol,
      borderColor: randomCol,
      fill: false,
    };
  });
}

function getColor() {
  return `hsla(${~~(360 * Math.random())},` + `70%,` + `80%, 1)`;
}

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

    const groupedByCat = groupedByCategory(technologies);
    const serializedTech = Object.keys(groupedByCat).reduce((acc, category) => {
      const technologies = groupedByCat[category];
      const countsForLabels = technologies[0].Counts;
      acc[category] = {
        labels: countsForLabels.map((count) => count.createdAt),
        datasets: createDataset(technologies),
      };
      return acc;
    }, {});

    res.status(200).json(serializedTech);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAll,
};
