import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TabsContainer from './TabsContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabsContainer />, div);
});

it('renders titles correctly', () => {
  const { getByText } = render(<TabsContainer />);

  expect(getByText('Platforms')).toBeInTheDocument();
  expect(getByText('Databases')).toBeInTheDocument();
  expect(getByText('Other Tools')).toBeInTheDocument();
});
