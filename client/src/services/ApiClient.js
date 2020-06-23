// import mockData from '../__mocks__/mockData.json';
// import mongoData from '../__mocks__/mongoMocks.json';
import mongoData from '../__mocks__/completeMockList.json';
import { colorOptions, queryTerms } from './metaData';

// const BASE_URL = 'http://localhost:3002';

// const initialData = {
//   Technologies: {
//     labels: [],
//     datasets: [],
//   },
// };

const initialData = {};

let categories = Object.keys(queryTerms);
for (let i = 0; i < categories.length; i++) {
  initialData[categories[i]] = {
    labels: [],
    datasets: [],
  };
}
// console.log(categories);
// console.log(initialData);

//get request for all chart data
function getTechnologies() {
  for (let i = 0; i < categories.length; i++) {
    initialData[categories[i]].labels = [...mongoData[0].timestamps];
    // console.log(categories[i]);
    for (let j = 0; j < mongoData.length; j++) {
      // if (queryTerms.Technologies.includes(mongoData[j]['name'])) {
      if (queryTerms[categories[i]].includes(mongoData[j]['name'])) {
        // queryTerms[categories[i]].forEach((topic) => console.log(topic));
        console.log(mongoData[j]['name']);

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
  // }
  console.log('II', initialData);
  return Promise.resolve(initialData);
  // return fetchRequest('/');
}

// BACKUP

// for (let i = 0; i < categories.length; i++) {
//   initialData[categories[i]] = {
//     labels: [],
//     datasets: [],
//   };
// }

// console.log(initialData);

// //get request for all chart data
// function getTechnologies() {
//   // return fetchRequest('/');
//   initialData['Technologies'].labels = [...mongoData[0].timestamps];
//   for (let i = 0; i < mongoData.length; i++) {
//     initialData['Technologies'].datasets.push({
//       label: mongoData[i].name,
//       data: [...mongoData[i].counts],
//       backgroundColor: colorOptions[i],
//       borderColor: colorOptions[i],
//       fill: false,
//     });
//   }
//   // console.log(initialData);
//   return Promise.resolve(initialData);
// }

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
