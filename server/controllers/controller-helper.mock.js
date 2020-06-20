const mocks = {
  emptyArr: [],
  arrayTech: [
    {
      dataValues: {
        id: 1,
        name: 'Linux',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.294Z',
        updatedAt: '2020-06-18T13:37:30.294Z',
        Counts: [{ total: 925 }, { total: 1345 }, { total: 111 }],
      },
    },
    {
      dataValues: {
        id: 2,
        name: 'Windows',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.509Z',
        updatedAt: '2020-06-18T13:37:30.509Z',
        Counts: [
          { total: 2401 },
          { total: 3145 },
          { total: 1123 },
          { total: 109 },
        ],
      },
    },
    {
      dataValues: {
        id: 3,
        name: 'Docker',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.513Z',
        updatedAt: '2020-06-18T13:37:30.513Z',
        Counts: [{ total: 145 }],
      },
    },
    {
      dataValues: {
        id: 4,
        name: 'AWS',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.514Z',
        updatedAt: '2020-06-18T13:37:30.514Z',
        Counts: [
          { total: 141 },
          { total: 132 },
          { total: 111 },
          { total: 156 },
          { total: 151 },
          { total: 131 },
        ],
      },
    },
    {
      dataValues: {
        id: 5,
        name: 'JavaScript',
        category: 'Languages',
        createdAt: '2020-06-18T13:37:30.517Z',
        updatedAt: '2020-06-18T13:37:30.517Z',
        Counts: [{ total: 11512 }, { total: 3455 }],
      },
    },
  ],
  arrayTechCategories: {
    Platforms: [
      {
        dataValues: {
          id: 1,
          name: 'Linux',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.294Z',
          updatedAt: '2020-06-18T13:37:30.294Z',
          Counts: [{ total: 925 }, { total: 1345 }, { total: 111 }],
        },
      },
      {
        dataValues: {
          id: 2,
          name: 'Windows',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.509Z',
          updatedAt: '2020-06-18T13:37:30.509Z',
          Counts: [
            { total: 2401 },
            { total: 3145 },
            { total: 1123 },
            { total: 109 },
          ],
        },
      },
      {
        dataValues: {
          id: 3,
          name: 'Docker',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.513Z',
          updatedAt: '2020-06-18T13:37:30.513Z',
          Counts: [{ total: 145 }],
        },
      },
      {
        dataValues: {
          id: 4,
          name: 'AWS',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.514Z',
          updatedAt: '2020-06-18T13:37:30.514Z',
          Counts: [
            { total: 141 },
            { total: 132 },
            { total: 111 },
            { total: 156 },
            { total: 151 },
            { total: 131 },
          ],
        },
      },
    ],
    Languages: [
      {
        dataValues: {
          id: 5,
          name: 'JavaScript',
          category: 'Languages',
          createdAt: '2020-06-18T13:37:30.517Z',
          updatedAt: '2020-06-18T13:37:30.517Z',
          Counts: [{ total: 11512 }, { total: 3455 }],
        },
      },
    ],
  },
};

module.exports = mocks;
