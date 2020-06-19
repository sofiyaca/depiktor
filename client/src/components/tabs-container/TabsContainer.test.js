import React from 'react';
import ReactDOM from 'react-dom';
import TabsContainer from './TabsContainer';
import mockData from '../../mock-data/mockData.json';
import componentMocks from './TabsContainer.mock';

describe('renders without crashing', () => {
  it('line graph', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.line}
      />,
      div
    );
  });
  it('bar graph', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.bar}
      />,
      div
    );
  });
  it('radar graph', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.radar}
      />,
      div
    );
  });
});
