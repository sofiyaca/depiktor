const chartJSOptions = {
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
};

const chartOptions = {
  line: { value: 'line', label: 'Line' },
  bar: { value: 'bar', label: 'Bar' },
  radar: { value: 'radar', label: 'Radar' },
};

module.exports = {
  chartJSOptions,
  chartOptions,
};
