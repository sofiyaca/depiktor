import React from 'react';
import ReactDOM from 'react-dom';
import TabsContainer from './TabsContainer';
import mockData from '../../mock-data/mockData.json';
import componentMocks from './TabsContainer.mock';
import { render } from '@testing-library/react';

describe('renders without crashing', () => {
  it('line graph', () => {
    const div = document.createElement('div');
    window.HTMLCanvasElement.prototype.getContext = () => {};
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

  it('renders without crashing', () => {
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

  it('renders tab titles correctly', () => {
    const { getByText } = render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.radar}
      />
    );

    expect(getByText('Platforms')).toBeInTheDocument();
    expect(getByText('Databases')).toBeInTheDocument();
    expect(getByText('Other Tools')).toBeInTheDocument();
  });

  it('The tab options to have properties of has a length of 3', () => {
    expect(componentMocks.chartOptions).toHaveProperty('line');
    expect(componentMocks.chartOptions).toHaveProperty('bar');
    expect(componentMocks.chartOptions).toHaveProperty('radar');
  });
});
