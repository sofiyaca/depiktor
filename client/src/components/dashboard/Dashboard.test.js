import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<Dashboard />);
});
