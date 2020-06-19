import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders depiktor correctly', async () => {
  const { getByText } = render(<App />);
  const AppNode = await waitForElement(() => getByText('depiktor'));
  expect(AppNode.toBeInTheDocument());
});
