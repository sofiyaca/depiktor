'use strict';

const db = require('../models');
const { where } = require('sequelize');
const { Sequelize } = require('../models');
const moment = require('moment');
const technology = require('../models/technology');
const Op = Sequelize.Op;

//TODO: add a view to process the data from the DB

//get all the records for the last 7 days 
//return array of objects 
// [{category: {
//  labels: [created_at, * 7], 
//  datasets: [{label: "tech_name", data: [total *7], borderColor: [random_col *7], fill: false}] 
// }, ... ]

// loop over every tech create an arr 
// label: tech name 
// data: count total
// border color: gen random color 

const oneWeek = moment().subtract(7, 'days').toDate();

const groupedByCategory = (array) => {
  return array.reduce((result, technology) => {
    let category = technology.dataValues.category;
    if (result[category] === undefined) result[category] = [];
    result[category].push(technology);
    return result;
  }, {});
}

function createDataset(technologies) {
  return technologies.map(technology => {
    return {
      label: technology.dataValues.name,
      data: technology.dataValues.Counts.map(count => count.total),
      borderColor: technology.dataValues.Counts.map(count => getColor()),
      fill: false
    }
  });
}

function getColor(){ 
  return "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "80%, 1)";
};

async function getAll (_, res) {
  try {
    const technologies = await db.technology.findAll({
      include: [{
        model: db.count,
        where: {'createdAt': {[Op.gte]: oneWeek}},
        order: 'createdAt',
      }],
    });
    
    let groupedByCat = groupedByCategory(technologies);

    
    const serializedTech = Object.keys(groupedByCat).reduce((acc, category) => {
      let technologies = groupedByCat[category];
      let countsForLabels = technologies[0].Counts;
      acc[category] = {
        labels: countsForLabels.map(count => count.createdAt),
        datasets: createDataset(technologies)
      };
      return acc;
    }, {});
    
    res.json(serializedTech);
    res.status(200).send();
  } catch (error) {
    console.log(error);
  }
}


async function createTerm (req, res) {
  try {
    
  } catch (error) {
    
  }
}

// getAll();

module.exports = {
  getAll, 
  createTerm
}


//

//Count

// id: 1,
// total: 1512,
//  : 2020-06-15T23:24:24.092Z,
// updatedAt: 2020-06-15T23:24:24.092Z,
// TechnologyId: 1


// const dbOutput = 

// [
//   Technology {
//     dataValues: {
//       id: 1,
//       name: 'JavaScript',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.692Z,
//       updatedAt: 2020-06-15T23:23:54.692Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 1,
//       name: 'JavaScript',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.692Z,
//       updatedAt: 2020-06-15T23:23:54.692Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 2,
//       name: 'HTML/CSS',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.747Z,
//       updatedAt: 2020-06-15T23:23:54.747Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 2,
//       name: 'HTML/CSS',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.747Z,
//       updatedAt: 2020-06-15T23:23:54.747Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 3,
//       name: 'SQL',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.749Z,
//       updatedAt: 2020-06-15T23:23:54.749Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 3,
//       name: 'SQL',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.749Z,
//       updatedAt: 2020-06-15T23:23:54.749Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 4,
//       name: 'Python',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.755Z,
//       updatedAt: 2020-06-15T23:23:54.755Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 4,
//       name: 'Python',
//       category: 'Languages',
//       createdAt: 2020-06-15T23:23:54.755Z,
//       updatedAt: 2020-06-15T23:23:54.755Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 5,
//       name: 'Node.js',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.757Z,
//       updatedAt: 2020-06-15T23:23:54.757Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 5,
//       name: 'Node.js',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.757Z,
//       updatedAt: 2020-06-15T23:23:54.757Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 6,
//       name: 'NET Core',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.760Z,
//       updatedAt: 2020-06-15T23:23:54.760Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 6,
//       name: 'NET Core',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.760Z,
//       updatedAt: 2020-06-15T23:23:54.760Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 7,
//       name: 'Pandas',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.762Z,
//       updatedAt: 2020-06-15T23:23:54.762Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 7,
//       name: 'Pandas',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.762Z,
//       updatedAt: 2020-06-15T23:23:54.762Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 8,
//       name: 'React Native',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.764Z,
//       updatedAt: 2020-06-15T23:23:54.764Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 8,
//       name: 'React Native',
//       category: 'Other Tools',
//       createdAt: 2020-06-15T23:23:54.764Z,
//       updatedAt: 2020-06-15T23:23:54.764Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 9,
//       name: 'MySQL',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.766Z,
//       updatedAt: 2020-06-15T23:23:54.766Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 9,
//       name: 'MySQL',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.766Z,
//       updatedAt: 2020-06-15T23:23:54.766Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 10,
//       name: 'PostgreSQL',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.767Z,
//       updatedAt: 2020-06-15T23:23:54.767Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 10,
//       name: 'PostgreSQL',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.767Z,
//       updatedAt: 2020-06-15T23:23:54.767Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 11,
//       name: 'Microsoft SQL Server',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.769Z,
//       updatedAt: 2020-06-15T23:23:54.769Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 11,
//       name: 'Microsoft SQL Server',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.769Z,
//       updatedAt: 2020-06-15T23:23:54.769Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 12,
//       name: 'SQLite',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.771Z,
//       updatedAt: 2020-06-15T23:23:54.771Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 12,
//       name: 'SQLite',
//       category: 'Databases',
//       createdAt: 2020-06-15T23:23:54.771Z,
//       updatedAt: 2020-06-15T23:23:54.771Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 13,
//       name: 'Linux',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.773Z,
//       updatedAt: 2020-06-15T23:23:54.773Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 13,
//       name: 'Linux',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.773Z,
//       updatedAt: 2020-06-15T23:23:54.773Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 14,
//       name: 'Windows',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.775Z,
//       updatedAt: 2020-06-15T23:23:54.775Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 14,
//       name: 'Windows',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.775Z,
//       updatedAt: 2020-06-15T23:23:54.775Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 15,
//       name: 'Docker',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.777Z,
//       updatedAt: 2020-06-15T23:23:54.777Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 15,
//       name: 'Docker',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.777Z,
//       updatedAt: 2020-06-15T23:23:54.777Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   },
//   Technology {
//     dataValues: {
//       id: 16,
//       name: 'AWS',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.779Z,
//       updatedAt: 2020-06-15T23:23:54.779Z,
//       Counts: [Array]
//     },
//     _previousDataValues: {
//       id: 16,
//       name: 'AWS',
//       category: 'Platforms',
//       createdAt: 2020-06-15T23:23:54.779Z,
//       updatedAt: 2020-06-15T23:23:54.779Z,
//       Counts: [Array]
//     },
//     _changed: {},
//     _modelOptions: {
//       timestamps: true,
//       validate: {},
//       freezeTableName: false,
//       underscored: false,
//       paranoid: false,
//       rejectOnEmpty: false,
//       whereCollection: null,
//       schema: null,
//       schemaDelimiter: '',
//       defaultScope: {},
//       scopes: {},
//       indexes: [],
//       name: [Object],
//       omitNull: false,
//       sequelize: [Sequelize],
//       hooks: {}
//     },
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     Counts: [ [Count], [Count], [Count], [Count] ]
//   }
// ]