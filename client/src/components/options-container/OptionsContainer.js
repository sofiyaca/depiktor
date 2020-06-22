import React from 'react';
import Select from 'react-select';
// import ReactSlider from 'react-slider';

const OptionsContainer = ({
  handleSelectedLabel,
  chartOptions,
  selectLabel,
  // handleSelectedTime,
  // selectTime,
  // maxLabel,
}) => {
  return (
    <div className="options-container">
      <div className="options-container__nav">
        <div className="nav-text">depiktor</div>
      </div>

      <div className="options-container__body">
        <p>Chart - Options</p>
        <Select
          options={chartOptions}
          className="options-dropdown"
          value={selectLabel}
          onChange={handleSelectedLabel}
        ></Select>
      </div>

      {/* <div className="chart-timeframe-container">
          <p>Timeframe</p>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="options-thumb"
            trackClassName="options-track"
            min={0}
            max={maxLabel}
            // invert={true}
            value={selectTime}
            onAfterChange={handleSelectedTime}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          ></ReactSlider>
        </div> */}
    </div>
  );
};

export default OptionsContainer;
