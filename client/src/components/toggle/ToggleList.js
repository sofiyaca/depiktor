import React, { Fragment } from 'react';
import Toggle from 'react-toggle';
import './Toggle.css';
import './Toggle.scss';

const ToggleList = ({ techList, handleToggle }) => {
  return (
    <div className="toggle-container">
      <form>
        {techList.map((item) => (
          <Fragment key={item}>
            {/* <div className="toggle-label"> */}
            <label htmlFor="toggle-options">
              <span>{item}</span>
              {/* </div> */}
              {/* <div className="toggle-switch"> */}
              <Toggle
                // defaultChecked={this.state.eggsAreReady}
                id={item}
                aria-label="No label tag"
                onChange={(e) => {
                  handleToggle(e);
                }}
              />
            </label>
            {/* </div> */}
          </Fragment>
        ))}
      </form>
    </div>
  );
};

export default ToggleList;
