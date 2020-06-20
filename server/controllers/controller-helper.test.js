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

  it('technology counts should be added correctly', () => {
    const result = createDataset(mocks.arrayTech);
    const counts = mocks.arrayTech.map((technology) => {
      return {
        name: technology.dataValues.name,
        counts: technology.dataValues.Counts.map((count) => count.total),
      };
    });

    for (let i = 0; i < result.length; i++) {
      expect(result[i].label).toStrictEqual(counts[i].name);
      expect(result[i].data).toStrictEqual(counts[i].counts);
    }
  });
});
