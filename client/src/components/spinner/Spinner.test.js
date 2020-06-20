import React from 'react';
import Spinner from './Spinner';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  render(<Spinner />);
});

it('renders correctly', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
