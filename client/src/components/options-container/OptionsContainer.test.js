import React from 'react';
import ReactDOM from 'react-dom';
import OptionsContainer from './OptionsContainer';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OptionsContainer
    // handleSelectedLabel=
    // handleSelectedTime=
    // chartOptions=
    // selectLabel=
    // selectTime=
    // maxLabel=
    />,
    div
  );
});

it('renders titles correctly', () => {
  const { getByText } = render(<OptionsContainer />);

  expect(getByText('Options')).toBeInTheDocument();
  expect(getByText('Chart Style')).toBeInTheDocument();
  expect(getByText('Timeframe')).toBeInTheDocument();
});
