import mockData from './../mock-data/mockData.json';
// const BASE_URL = 'http://localhost:3002';

//get request for all chart data
function getTechnologies() {
  // return fetchRequest('/');
  return Promise.resolve(mockData);
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
