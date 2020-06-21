import React from 'react';
import Dashboard from './Dashboard';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import mockData from '../../__mocks__/mockData.json';

jest.mock('../../services/ApiClient', () => {
  return {
    getTechnologies: jest.fn().mockImplementation(() => {
      return Promise.resolve(mockData);
    }),
  };
});

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Bar: () => null,
  Radar: () => null,
}));

it('renders without crashing', async () => {
  window.HTMLCanvasElement.prototype.getContext = () => {};
  render(<Dashboard />);
  await waitForElementToBeRemoved(() => document.querySelector('div.spinner'));
});
