const mocks = require('./controller-helper.mock');
const {
  groupedByCategory,
  createDataset,
  serializeTech,
} = require('./controller-helper');

describe('groupedByCategory', () => {
  it('empty array should return empty object', () => {
    const result = groupedByCategory(mocks.emptyArr);

    expect(result).toStrictEqual({});
  });

  it('technologies should be grouped by categories', () => {
    const result = groupedByCategory(mocks.arrayTech);

    expect(result).toStrictEqual(mocks.arrayTechCategories);
  });
});

describe('createDataset', () => {
  it('empty array should return empty array', () => {
    const result = createDataset(mocks.emptyArr);

    expect(result).toStrictEqual([]);
  });

  it('technology labels should be named correctly', () => {
    const result = createDataset(mocks.arrayTech);
    const names = mocks.arrayTech.map((technology) => {
      return technology.dataValues.name;
    });

    expect(
      result.reduce((acc, data) => {
        return acc && names.includes(data.label);
      }, true)
    ).toBe(true);
  });
});
