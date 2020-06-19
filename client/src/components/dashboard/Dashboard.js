import React, { useState, useEffect } from 'react';
import ApiClient from '../../services/ApiClient';
import './Dashboard.css';
import Spinner from '../spinner/Spinner';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './../react-tabs/React-Tabs.css';
import { Line, Bar, Radar } from 'react-chartjs-2';

import mockData from './../../mock-data/mockData.json';
import OptionsContainer from '../options-container/OptionsContainer';

export default function Dashboard() {
  const [loadStatus, setLoadStatus] = useState(true);
  const [technologies, setTechnologies] = useState({});
  const [selectLabel, setSelectLabel] = useState({
    value: 'line',
    label: 'Line',
  });
  const [selectTime, setSelectTime] = useState(0);
  const [maxLabel, setMaxLabel] = useState(0);

  useEffect(() => {
    setTechnologies(mockData);
    setMaxLabel(mockData.Platforms.labels.length);
    setLoadStatus(false);
  }, []);

  // ApiClient.getTechnologies()
  //   .then(technologies => {setTechnologies(technologies); setMaxLabel(technologies.Platforms.labels.length);})
  //   .then(()=> setLoadStatus(false))
  // }, []);

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
        {!loadStatus ? (
          <Tabs>
            <TabList>
              {Object.keys(technologies).map((techType) => (
                <Tab key={'tab-' + techType}> {techType} </Tab>
              ))}
            </TabList>

            {Object.values(technologies).map((techType) => (
              <TabPanel key={'panel-' + techType.labels[0]}>
                {
                  {
                    Line: (
                      <Line data={techType} options={chartJSOptions}></Line>
                    ),
                    Bar: <Bar data={techType} options={chartJSOptions}></Bar>,
                    Radar: (
                      <Radar data={techType} options={chartJSOptions}></Radar>
                    ),
                  }[selectLabel.label]
                }
              </TabPanel>
            ))}
          </Tabs>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
