import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Nav from './Nav';

afterEach(cleanup);

test('Navbar Renders depiktor', () => {
  const { getByText } = render(<Nav />);
  expect(getByText('depiktor')).toBeInTheDocument();
});
