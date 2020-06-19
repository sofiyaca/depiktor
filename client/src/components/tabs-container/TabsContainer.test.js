import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TabsContainer from './TabsContainer';
import mocks from './mock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TabsContainer
      technologies={mocks.data}
      chartJSOptions={mocks.chartJSOptions}
      selectLabel={mocks.selectLabels[0].label}
    />,
    div
  );
});

it('renders tab titles correctly', () => {
  const { getByText } = render(
    <TabsContainer
      technologies={mocks.data}
      chartJSOptions={mocks.chartJSOptions}
      selectLabel={mocks.selectLabels[0].label}
    />
  );

  expect(getByText('Platforms')).toBeInTheDocument();
  expect(getByText('Databases')).toBeInTheDocument();
  expect(getByText('Other Tools')).toBeInTheDocument();
});
