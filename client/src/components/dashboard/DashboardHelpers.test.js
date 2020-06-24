import mockArr from './../../__mocks__/mongoMocks.json';
import { organizeApiData, organizePieData } from './DashboardHelpers';
import { queryTerms } from './../../services/metaData';

describe('organizeApiData', () => {
  const categories = Object.keys(queryTerms);

  it('throws TypeError when given empty array', () => {
    expect(() => {
      organizeApiData([]);
    }).toThrow();
  });

  it('returns an object when given proper data', () => {
    expect(organizeApiData(mockArr)).toBeInstanceOf(Object);
    expect(organizeApiData(mockArr)).not.toBeInstanceOf(Function);
    expect(organizeApiData(mockArr)).not.toBeInstanceOf(Array);
  });

  it('returns an object with categories as properties', () => {
    for (let i = 0; i < categories.length; i++) {
      expect(organizeApiData(mockArr)).toHaveProperty(categories[i]);
    }
  });

  it('returns an object whose categories contain datasets and labels as arrays', () => {
    for (let i = 0; i < categories.length; i++) {
      expect(organizeApiData(mockArr)[categories[i]].datasets).toBeInstanceOf(
        Array
      );
      expect(organizeApiData(mockArr)[categories[i]].labels).toBeInstanceOf(
        Array
      );
    }
  });

  it('returns an object whose categories contain labels which is an array of date strings', () => {
    for (let i = 0; i < categories.length; i++) {
      const technology = organizeApiData(mockArr)[categories[i]];
      for (let j = 0; j < technology.labels.length; j++) {
        expect(Date.parse(technology.labels[j])).toBeTruthy();
      }
    }
  });

  it('returns an object whose categories contain datasets which is an array of objects containing ChartJS Bar/Line/Radar data properties', () => {
    for (let i = 0; i < categories.length; i++) {
      const technology = organizeApiData(mockArr)[categories[i]];
      for (let j = 0; j < technology.datasets.length; j++) {
        expect(technology.datasets[j]).toHaveProperty('label');
        expect(technology.datasets[j]).toHaveProperty('backgroundColor');
        expect(technology.datasets[j]).toHaveProperty('borderColor');
        expect(technology.datasets[j]).toHaveProperty('data');
        expect(technology.datasets[j]).toHaveProperty('fill');
      }
    }
  });
});

describe('organizePieData', () => {
  const categories = Object.keys(queryTerms);
  const pieData = organizeApiData(mockArr); // should be mocked

  it('returns an empty object when given empty data and empty categories', () => {
    expect(organizePieData({}, [])).toStrictEqual({});
  });

  it('returns an empty object when given empty data and proper categories', () => {
    expect(() => {
      organizePieData({}, categories);
    }).toThrow();
  });

  it('returns an object when given proper data', () => {
    expect(organizePieData(pieData, categories)).toBeInstanceOf(Object);
    expect(organizePieData(pieData, categories)).not.toBeInstanceOf(Function);
    expect(organizePieData(pieData, categories)).not.toBeInstanceOf(Array);
  });

  it('returns an object with categories as properties', () => {
    for (let i = 0; i < categories.length; i++) {
      expect(organizePieData(pieData, categories)).toHaveProperty(
        categories[i]
      );
    }
  });

  it('returns an object whose categories contain datasets and labels as arrays', () => {
    for (let i = 0; i < categories.length; i++) {
      expect(
        organizePieData(pieData, categories)[categories[i]].datasets
      ).toBeInstanceOf(Array);
      expect(
        organizePieData(pieData, categories)[categories[i]].labels
      ).toBeInstanceOf(Array);
    }
  });

  it('returns an object whose categories contain labels which is an array of strings', () => {
    for (let i = 0; i < categories.length; i++) {
      const pieDataCategory = organizePieData(pieData, categories)[
        categories[i]
      ];
      for (let j = 0; j < pieDataCategory.labels.length; j++) {
        expect(typeof pieDataCategory.labels[j]).toBe('string');
      }
    }
  });

  it('returns an object whose categories contain datasets which is an array of one object ChartJS Pie/Doughnut/Polar data properties', () => {
    for (let i = 0; i < categories.length; i++) {
      const pieDataCategoryDataSet = organizePieData(pieData, categories)[
        categories[i]
      ].datasets[0];

      expect(pieDataCategoryDataSet).toHaveProperty('data');
      expect(pieDataCategoryDataSet).toHaveProperty('backgroundColor');
      expect(pieDataCategoryDataSet).toHaveProperty('hoverBackgroundColor');
      expect(pieDataCategoryDataSet).toHaveProperty('label');
    }
  });
});
