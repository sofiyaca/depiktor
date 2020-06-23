// import mockData from '../__mocks__/mockData.json';
// import mongoData from '../__mocks__/mongoMocks.json';
import mongoData from '../__mocks__/completeMockList.json';
import { colorOptions } from './metaDeta';

// const BASE_URL = 'http://localhost:3002';

const initialData = {
  Technologies: {
    labels: [],
    datasets: [],
  },
};

//get request for all chart data
function getTechnologies() {
  // return fetchRequest('/');
  initialData['Technologies'].labels = [...mongoData[0].timestamps];
  for (let i = 0; i < mongoData.length; i++) {
    initialData['Technologies'].datasets.push({
      label: mongoData[i].name,
      data: [...mongoData[i].counts],
      backgroundColor: colorOptions[i],
      borderColor: colorOptions[i],
      fill: false,
    });
  }
  // console.log(initialData);
  return Promise.resolve(initialData);
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
