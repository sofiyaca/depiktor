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

  chartOptions: {
    line: { value: 'line', label: 'Line' },
    bar: { value: 'bar', label: 'Bar' },
    radar: { value: 'radar', label: 'Radar' },
  },

  handleSelectedLabel() {},

  handleSelectedTime() {},
};

module.exports = mocks;
