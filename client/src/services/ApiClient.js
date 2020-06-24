// import mockData from '../__mocks__/mockData.json';
// import mongoData from '../__mocks__/mongoMocks.json';
import mongoData from '../__mocks__/completeMockList.json';
import { colorOptions, queryTerms } from './metaData';

// const BASE_URL = 'http://localhost:3002';

const initialData = {};

let categories = Object.keys(queryTerms);
for (let i = 0; i < categories.length; i++) {
  initialData[categories[i]] = {
    labels: [],
    datasets: [],
  };
}

//get request for all chart data
function getTechnologies() {
  for (let i = 0; i < categories.length; i++) {
    initialData[categories[i]].labels = [...mongoData[0].timestamps];
    for (let j = 0; j < mongoData.length; j++) {
      if (queryTerms[categories[i]].includes(mongoData[j]['name'])) {
        initialData[categories[i]].datasets.push({
          label: mongoData[j].name,
          data: [...mongoData[j].counts],
          backgroundColor: colorOptions[j],
          borderColor: colorOptions[j],
          fill: false,
        });
      }
    }
  }

  return Promise.resolve(initialData);
  // return fetchRequest('/');
}

// Fetch Factory
// function fetchRequest(path, options) {
//   return (
//     fetch(BASE_URL + path, options)
//       .then(res => res.ok ? res : Promise.reject(res))
//       .then(res => res.status !== 204 ? res.json() : res)
//       .catch(err =>
//         console.log(`Error fetching [${options ? options.method : `GET`}]`, err)
//         )
//       )
// }

export default {
  getTechnologies,
};
