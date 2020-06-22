// import mockData from '../__mocks__/mockData.json';
import mongoData from '../__mocks__/mongoMocks.json';

const colorOptions = [
  '#FA8072', //salmon
  '#00FF00', //line
  '#008080', //teal
  '#FF00FF', //fuchsia
  '#000080', //navy
  '#808000', //olive
  '#CD5C5C', //indianred
  '#00FFFF', // aqua
];

// const pieChartExample = {
//   labels: [],
//   datasets: [
//     {
//       data: [],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#EE82EE'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#EE82EE'],
//       label: 'My Data',
//     },
//   ],
// };

const initialData = {
  Technologies: {
    labels: [],
    datasets: [],
  },
};
// const BASE_URL = 'http://localhost:3002';

//get request for all chart data
function getTechnologies() {
  // return fetchRequest('/');

  console.log(colorOptions);
  console.log(mongoData);

  initialData['Technologies'].labels = [...mongoData[0].timestamps];

  console.log(initialData);

  for (let i = 0; i < mongoData.length; i++) {
    initialData['Technologies'].datasets.push({
      label: mongoData[i].name,
      data: [...mongoData[i].counts],
      backgroundColor: colorOptions[i],
      borderColor: colorOptions[i],
      fill: false,
    });
  }

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
