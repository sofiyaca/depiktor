import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('App has a className App', () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains('App')).toBe(true);
});
