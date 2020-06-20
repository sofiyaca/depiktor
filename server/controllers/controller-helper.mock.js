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
        Counts: [
          {
            dataValues: {
              id: 1,
              total: 2381,
              createdAt: '2020-06-18T13:54:07.697Z',
              updatedAt: '2020-06-18T13:54:07.697Z',
              TechnologyId: 1,
            },
          },
        ],
      },
      Counts: [
        {
          dataValues: {
            id: 1,
            total: 2381,
            createdAt: '2020-06-18T13:54:07.697Z',
            updatedAt: '2020-06-18T13:54:07.697Z',
            TechnologyId: 1,
          },
        },
      ],
    },
    {
      dataValues: {
        id: 2,
        name: 'Windows',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.509Z',
        updatedAt: '2020-06-18T13:37:30.509Z',
        Counts: [
          {
            dataValues: {
              id: 2,
              total: 6778,
              createdAt: '2020-06-18T13:54:23.610Z',
              updatedAt: '2020-06-18T13:54:23.610Z',
              TechnologyId: 2,
            },
          },
        ],
      },
      Counts: [
        {
          dataValues: {
            id: 2,
            total: 6778,
            createdAt: '2020-06-18T13:54:23.610Z',
            updatedAt: '2020-06-18T13:54:23.610Z',
            TechnologyId: 2,
          },
        },
      ],
    },
    {
      dataValues: {
        id: 3,
        name: 'Docker',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.513Z',
        updatedAt: '2020-06-18T13:37:30.513Z',
        Counts: [
          {
            dataValues: {
              id: 3,
              total: 145,
              createdAt: '2020-06-18T13:54:24.480Z',
              updatedAt: '2020-06-18T13:54:24.480Z',
              TechnologyId: 3,
            },
          },
        ],
      },
      Counts: [
        {
          dataValues: {
            id: 3,
            total: 145,
            createdAt: '2020-06-18T13:54:24.480Z',
            updatedAt: '2020-06-18T13:54:24.480Z',
            TechnologyId: 3,
          },
        },
      ],
    },
    {
      dataValues: {
        id: 4,
        name: 'AWS',
        category: 'Platforms',
        createdAt: '2020-06-18T13:37:30.514Z',
        updatedAt: '2020-06-18T13:37:30.514Z',
        Counts: [
          {
            dataValues: {
              id: 4,
              total: 822,
              createdAt: '2020-06-18T13:54:31.252Z',
              updatedAt: '2020-06-18T13:54:31.252Z',
              TechnologyId: 4,
            },
          },
        ],
      },
      Counts: [
        {
          dataValues: {
            id: 4,
            total: 822,
            createdAt: '2020-06-18T13:54:31.252Z',
            updatedAt: '2020-06-18T13:54:31.252Z',
            TechnologyId: 4,
          },
        },
      ],
    },
    {
      dataValues: {
        id: 5,
        name: 'JavaScript',
        category: 'Languages',
        createdAt: '2020-06-18T13:37:30.517Z',
        updatedAt: '2020-06-18T13:37:30.517Z',
        Counts: [
          {
            dataValues: {
              id: 5,
              total: 14967,
              createdAt: '2020-06-18T13:54:40.139Z',
              updatedAt: '2020-06-18T13:54:40.139Z',
              TechnologyId: 5,
            },
          },
        ],
      },
      Counts: [
        {
          dataValues: {
            id: 5,
            total: 14967,
            createdAt: '2020-06-18T13:54:40.139Z',
            updatedAt: '2020-06-18T13:54:40.139Z',
            TechnologyId: 5,
          },
        },
      ],
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
          Counts: [
            {
              dataValues: {
                id: 1,
                total: 2381,
                createdAt: '2020-06-18T13:54:07.697Z',
                updatedAt: '2020-06-18T13:54:07.697Z',
                TechnologyId: 1,
              },
            },
          ],
        },
        Counts: [
          {
            dataValues: {
              id: 1,
              total: 2381,
              createdAt: '2020-06-18T13:54:07.697Z',
              updatedAt: '2020-06-18T13:54:07.697Z',
              TechnologyId: 1,
            },
          },
        ],
      },
      {
        dataValues: {
          id: 2,
          name: 'Windows',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.509Z',
          updatedAt: '2020-06-18T13:37:30.509Z',
          Counts: [
            {
              dataValues: {
                id: 2,
                total: 6778,
                createdAt: '2020-06-18T13:54:23.610Z',
                updatedAt: '2020-06-18T13:54:23.610Z',
                TechnologyId: 2,
              },
            },
          ],
        },
        Counts: [
          {
            dataValues: {
              id: 2,
              total: 6778,
              createdAt: '2020-06-18T13:54:23.610Z',
              updatedAt: '2020-06-18T13:54:23.610Z',
              TechnologyId: 2,
            },
          },
        ],
      },
      {
        dataValues: {
          id: 3,
          name: 'Docker',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.513Z',
          updatedAt: '2020-06-18T13:37:30.513Z',
          Counts: [
            {
              dataValues: {
                id: 3,
                total: 145,
                createdAt: '2020-06-18T13:54:24.480Z',
                updatedAt: '2020-06-18T13:54:24.480Z',
                TechnologyId: 3,
              },
            },
          ],
        },
        Counts: [
          {
            dataValues: {
              id: 3,
              total: 145,
              createdAt: '2020-06-18T13:54:24.480Z',
              updatedAt: '2020-06-18T13:54:24.480Z',
              TechnologyId: 3,
            },
          },
        ],
      },
      {
        dataValues: {
          id: 4,
          name: 'AWS',
          category: 'Platforms',
          createdAt: '2020-06-18T13:37:30.514Z',
          updatedAt: '2020-06-18T13:37:30.514Z',
          Counts: [
            {
              dataValues: {
                id: 4,
                total: 822,
                createdAt: '2020-06-18T13:54:31.252Z',
                updatedAt: '2020-06-18T13:54:31.252Z',
                TechnologyId: 4,
              },
            },
          ],
        },
        Counts: [
          {
            dataValues: {
              id: 4,
              total: 822,
              createdAt: '2020-06-18T13:54:31.252Z',
              updatedAt: '2020-06-18T13:54:31.252Z',
              TechnologyId: 4,
            },
          },
        ],
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
          Counts: [
            {
              dataValues: {
                id: 5,
                total: 14967,
                createdAt: '2020-06-18T13:54:40.139Z',
                updatedAt: '2020-06-18T13:54:40.139Z',
                TechnologyId: 5,
              },
            },
          ],
        },
        Counts: [
          {
            dataValues: {
              id: 5,
              total: 14967,
              createdAt: '2020-06-18T13:54:40.139Z',
              updatedAt: '2020-06-18T13:54:40.139Z',
              TechnologyId: 5,
            },
          },
        ],
      },
    ],
  },
};

module.exports = mocks;
