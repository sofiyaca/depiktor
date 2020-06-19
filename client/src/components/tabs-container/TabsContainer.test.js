import React from 'react';
import ReactDOM from 'react-dom';
import TabsContainer from './TabsContainer';
import mockData from '../../mock-data/mockData.json';
import componentMocks from './TabsContainer.mock';
import { render, fireEvent } from '@testing-library/react';

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
});

it('renders tab titles correctly', () => {
  const { getByText } = render(
    <TabsContainer
      technologies={mockData}
      chartJSOptions={componentMocks.chartJSOptions}
      selectLabel={componentMocks.chartOptions.line}
    />
  );

  expect(getByText('Platforms')).toBeInTheDocument();
  expect(getByText('Databases')).toBeInTheDocument();
  expect(getByText('Other Tools')).toBeInTheDocument();
});

describe('renders the tab panel corresponding to the clicked tab', () => {
  it('renders Platform panel when you click the Platform tab', () => {
    const { getByText, getByTestId } = render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.line}
      />
    );
    fireEvent.click(getByText('Platforms'));
    expect(getByTestId('tab-2020-06-16T22:32:06.028Z')).toBeInTheDocument();
  });
  it('renders Databases panel when you click the Databases tab', () => {
    const { getByText, getByTestId } = render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.line}
      />
    );
    fireEvent.click(getByText('Databases'));
    expect(getByTestId('tab-2020-06-16T22:32:33.400Z')).toBeInTheDocument();
  });
  it('renders Other Tools panel when you click the Other Tools tab', () => {
    const { getByText, getByTestId } = render(
      <TabsContainer
        technologies={mockData}
        chartJSOptions={componentMocks.chartJSOptions}
        selectLabel={componentMocks.chartOptions.line}
      />
    );
    fireEvent.click(getByText('Other Tools'));
    expect(getByTestId('tab-2020-06-16T22:32:34.630Z')).toBeInTheDocument();
  });

  it('The tab options to have properties of has a length of 3', () => {
    expect(componentMocks.chartOptions).toHaveProperty('line');
    expect(componentMocks.chartOptions).toHaveProperty('bar');
    expect(componentMocks.chartOptions).toHaveProperty('radar');
  });
});
