import React, { useState, useEffect } from 'react';
import './Dashboard.scss';

// Services
import ApiClient from '../../services/ApiClient';

// Components
import OptionsContainer from '../options-container/OptionsContainer';
import TabsContainer from '../tabs-container/TabsContainer';
import Spinner from '../spinner/Spinner';

import ToggleList from '../toggle/ToggleList';

const chartOptions = [
  { value: 'line', label: 'Line' },
  { value: 'bar', label: 'Bar' },
  { value: 'radar', label: 'Radar' },
  { value: 'pie', label: 'Pie' },
  { value: 'doughnut', label: 'Doughnut' },
  { value: 'polar', label: 'Polar' },
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

const defaultChart = {
  value: 'line',
  label: 'Line',
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [technologies, setTechnologies] = useState({});
  const [newData, setNewData] = useState({});
  const [selectLabel, setSelectLabel] = useState(defaultChart);
  const [maxLabel, setMaxLabel] = useState(0);
  const [techProp, setTechProp] = useState('Technologies');
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    ApiClient.getTechnologies()
      .then((technologies) => {
        setTechnologies(technologies);
        setMaxLabel(technologies.Technologies.labels.length);
        // Start of Data Manipulation
        let techKeys = Object.keys(technologies);
        let newDataObj = {};
        for (let i = 0; i < techKeys.length; i++) {
          newDataObj[techKeys[i]] = {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#EE82EE'],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#EE82EE',
                ],
                label: 'My Data',
              },
            ],
          };
          technologies[techKeys[i]].datasets.forEach((item) => {
            newDataObj[techKeys[i]].labels.push(item.label);
            newDataObj[techKeys[i]].datasets[0].data.push(
              item.data.reduce((acc, cur) => {
                return acc + cur;
              })
            );
          });
        }
        setTechList([...newDataObj['Technologies'].labels]);
        setNewData({ ...newDataObj });
      })
      .then(() => setIsLoading(false));
  }, []);

  function handleSelectedLabel(e) {
    setSelectLabel(e);
  }

  const handleTabs = (e) => {
    setTechProp(e.target.innerText);
  };

  const handleToggle = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <OptionsContainer
        handleSelectedLabel={handleSelectedLabel}
        chartOptions={chartOptions}
        selectLabel={selectLabel}
        maxLabel={maxLabel}
      />

      <div className="chart-container">
        <ToggleList techList={techList} handleToggle={handleToggle} />
        {isLoading ? (
          <Spinner />
        ) : (
          <TabsContainer
            technologies={technologies}
            chartJSOptions={chartJSOptions}
            technologyPieData={newData}
            selectLabel={selectLabel}
            handleTabs={handleTabs}
            techProp={techProp}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
