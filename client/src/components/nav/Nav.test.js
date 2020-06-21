import React from 'react';
import Nav from './Nav';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<Nav />);
});

it('renders text depictor', () => {
  const { getByText } = render(<Nav />);
  expect(getByText('depiktor')).toBeInTheDocument();
});

it('renders correctly', () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
});
