import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// Services
import ApiClient from '../../services/ApiClient';

// Components
import OptionsContainer from '../options-container/OptionsContainer';
import TabsContainer from '../tabs-container/TabsContainer';
import Spinner from '../spinner/Spinner';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [technologies, setTechnologies] = useState({});
  const [selectLabel, setSelectLabel] = useState({
    value: 'line',
    label: 'Line',
  });
  const [selectTime, setSelectTime] = useState(0);
  const [maxLabel, setMaxLabel] = useState(0);

  useEffect(() => {
    ApiClient.getTechnologies()
      .then((technologies) => {
        setTechnologies(technologies);
        setMaxLabel(technologies.Platforms.labels.length);
      })
      .then(() => setIsLoading(false));
  }, []);

  function handleSelectedLabel(e) {
    setSelectLabel(e);
  }

  function handleSelectedTime(e) {
    setSelectTime(e);
  }

  const chartOptions = [
    { value: 'line', label: 'Line' },
    { value: 'bar', label: 'Bar' },
    { value: 'radar', label: 'Radar' },
  ];

  const chartJSOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'hour',
            unitStepSize: 1,
            displayFormats: {
              hour: 'hA',
            },
          },
        },
      ],
    },
  };

  return (
    <div className="dashboard">
      <OptionsContainer
        handleSelectedLabel={handleSelectedLabel}
        handleSelectedTime={handleSelectedTime}
        chartOptions={chartOptions}
        selectLabel={selectLabel}
        selectTime={selectTime}
        maxLabel={maxLabel}
      />
      <div className="tabs-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <TabsContainer
            technologies={technologies}
            chartJSOptions={chartJSOptions}
            selectLabel={selectLabel}
          />
        )}
      </div>
    </div>
  );
}
