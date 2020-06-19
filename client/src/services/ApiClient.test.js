import mockData from '../mock-data/mockData.json';

describe('ApiClient returns data correctly', () => {
  test('the mock data has the property Platforms', () => {
    expect(mockData).toHaveProperty('Platforms');
  });
  test('the mock data has the property Databases', () => {
    expect(mockData).toHaveProperty('Databases');
  });
  test('the mock data object.Databases to have an array property called labels', () => {
    expect(mockData.Databases).toHaveProperty('labels');
    expect(mockData.Databases.labels).not.toBeUndefined();
  });
  test('the mock data object.Platforms to have an array property called labels', () => {
    expect(mockData.Platforms).toHaveProperty('labels');
    expect(mockData.Platforms.labels).not.toBeUndefined();
  });
});
