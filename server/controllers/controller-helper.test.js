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

  it('category names should be properties of result', () => {
    const result = groupedByCategory(mocks.arrayTech);

    for (let i = 0; i < mocks.arrayTech.length; i++) {
      expect(result).toHaveProperty(mocks.arrayTech[i].dataValues.category);
    }
  });

  it('result properties contain arrays', () => {
    const result = groupedByCategory(mocks.arrayTech);
    const keys = Object.keys(result);

    for (let i = 0; i < keys.length; i++) {
      expect(result[keys[i]].length).toBeTruthy();
    }
  });

  it('result categories contains an array of technologies', () => {
    const result = groupedByCategory(mocks.arrayTech);
    const keys = Object.keys(result);

    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < result[keys[i]].length; j++) {
        expect(mocks.arrayTech).toContain(result[keys[i]][j]);
      }
    }
  });

  it('result categories should contain every technology', () => {
    const result = groupedByCategory(mocks.arrayTech);

    for (let i = 0; i < mocks.arrayTech.length; i++) {
      expect(result[mocks.arrayTech[i].dataValues.category]).toContain(
        mocks.arrayTech[i]
      );
    }
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

describe('serializeTech', () => {
  it('empty array should return empty array', () => {
    const result = createDataset(mocks.emptyArr);

    expect(result).toStrictEqual([]);
  });

  it('serializeTech should contain appropriate datasets', () => {
    const result = serializeTech(mocks.arrayTechCategories);
    const categories = groupedByCategory(mocks.arrayTech);

    expect(result).toStrictEqual(result);
    expect(categories).toStrictEqual(categories);
  });
});
