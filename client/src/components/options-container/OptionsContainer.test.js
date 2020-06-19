import React from 'react';
import ReactDOM from 'react-dom';
import OptionsContainer from './OptionsContainer';
import mocks from './OptionsContainer.mock';
import { render } from '@testing-library/react';

describe('renders without crashing', () => {
  it('renders select correctly', () => {
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

    render(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.line.label}
        selectTime={0}
        maxLabel={3}
      />
    );

    render(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.radar.label}
        selectTime={0}
        maxLabel={3}
      />
    );
  });

  it('renders slider correctly', () => {
    render(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.bar.label}
        selectTime={10}
        maxLabel={5}
      />
    );

    render(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.radar.label}
        selectTime={30}
        maxLabel={7}
      />
    );
  });

  it('renders titles correctly', () => {
    const { getByText } = render(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.line.label}
        selectTime={0}
        maxLabel={3}
      />
    );

    expect(getByText('Options')).toBeInTheDocument();
    expect(getByText('Chart Style')).toBeInTheDocument();
    expect(getByText('Timeframe')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <OptionsContainer
        handleSelectedLabel={mocks.handleSelectedLabel}
        handleSelectedTime={mocks.handleSelectedTime}
        chartOptions={mocks.chartOptions}
        selectLabel={mocks.chartOptions.line.label}
        selectTime={0}
        maxLabel={3}
      />,
      div
    );
  });
});
