import mockData from './../../mock-data/mockData.json';

const mocks = {
  chartJSOptions: {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'hour',
            unitStepSize: 1,
            displayFormats: {
              hour: 'hA',
            },
          },
        },
      ],
    },
  },
  selectLabels: [
    { value: 'line', label: 'Line' },
    { value: 'bar', label: 'Bar' },
    { value: 'radar', label: 'Radar' },
  ],
  data: mockData,
};
module.exports = mocks;
