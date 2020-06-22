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
      <div className="chart-options-container">
        <div className="options-header">
          {/* <p>Options</p> */}
          <div className="nav-logo">depiktor</div>
        </div>

        <div className="chart-style-container">
          <p className="chart-style-container-header">Chart - Options</p>
          <Select
            options={chartOptions}
            className="chart-style-select-dropdown"
            // placeholder="Select Chart Style..."
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
    </div>
  );
};

export default OptionsContainer;
