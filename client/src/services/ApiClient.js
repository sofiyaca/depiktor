// import mockData from '../__mocks__/mockData.json';
// import mongoData from '../__mocks__/mongoMocks.json';
// import mongoData from '../__mocks__/completeMockList.json';
// import { colorOptions, queryTerms } from './metaData';

const BASE_URL = 'http://localhost:3001';

//get request for all chart data
function getTechnologies() {
  return fetchRequest('/');
}

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) =>
      console.log(`Error fetching [${options ? options.method : `GET`}]`, err)
    );
}

export default {
  getTechnologies,
};
