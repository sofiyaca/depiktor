import React from 'react';
import OptionsContainer from './OptionsContainer';
import mocks from './OptionsContainer.mock';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  render(
    <OptionsContainer
      handleSelectedLabel={mocks.handleSelectedLabel}
      handleSelectedTime={mocks.handleSelectedTime}
      chartOptions={mocks.chartOptions}
      selectLabel={mocks.chartOptions.bar.label}
      selectTime={0}
      maxLabel={3}
    />
  );
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.line.label}
        selectTime={0}
        maxLabel={3}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
