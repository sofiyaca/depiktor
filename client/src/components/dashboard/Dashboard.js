import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
// import ReactTooltip from 'react-tooltip';

// Services
import ApiClient from '../../services/ApiClient';
import { colorOptions } from '../../services/metaDeta';

// Components
import OptionsContainer from '../options-container/OptionsContainer';
import TabsContainer from '../tabs-container/TabsContainer';
import Spinner from '../spinner/Spinner';

// import ToggleList from '../toggle/ToggleList';

const chartOptions = [
  { value: 'line', label: 'Line' },
  { value: 'bar', label: 'Bar' },
  { value: 'radar', label: 'Radar' },
  { value: 'pie', label: 'Pie' },
  { value: 'doughnut', label: 'Doughnut' },
  { value: 'polar', label: 'Polar' },
  { value: 'scatter', label: 'Scatter' },
];

const defaultChart = {
  value: 'line',
  label: 'Line',
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [technologies, setTechnologies] = useState({});
  const [pieData, setPieData] = useState({});
  const [scatterData, setScatterData] = useState({});
  const [selectLabel, setSelectLabel] = useState(defaultChart);
  const [maxLabel, setMaxLabel] = useState(0);
  const [techProp, setTechProp] = useState('Technologies');
  // const [techList, setTechList] = useState([]); // get a list of categories or technologies

  useEffect(() => {
    ApiClient.getTechnologies()
      .then((technologies) => {
        setTechnologies(technologies);
        setMaxLabel(technologies.Technologies.labels.length);
        // Start of Data Manipulation
        let techKeys = Object.keys(technologies); // Refactor
        // Start of Pie/Doughnut/Polar Chart Data
        let pieDataObj = {};

        for (let i = 0; i < techKeys.length; i++) {
          pieDataObj[techKeys[i]] = {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
                label: 'My Data',
              },
            ],
          };
          technologies[techKeys[i]].datasets.forEach((item, index) => {
            pieDataObj[techKeys[i]].labels.push(item.label);

            pieDataObj[techKeys[i]].datasets[0].backgroundColor.push(
              colorOptions[index]
            );
            pieDataObj[techKeys[i]].datasets[0].hoverBackgroundColor.push(
              colorOptions[index]
            );

            pieDataObj[techKeys[i]].datasets[0].data.push(
              item.data.reduce((acc, cur) => {
                return acc + cur;
              })
            );
          });
        }
        // setTechList([...pieDataObj['Technologies'].labels]);
        setPieData({ ...pieDataObj });

        // Start of Scatter Chart Data
        let scatterDataObj = {};
        for (let i = 0; i < techKeys.length; i++) {
          scatterDataObj[techKeys[i]] = {
            type: 'scatter',
            datasets: [],
          };
        }

        for (let i = 0; i < technologies['Technologies'].datasets.length; i++) {
          // console.log(technologies.Technologies.datasets[i].label);
          scatterDataObj['Technologies'].datasets.push({
            label: technologies.Technologies.datasets[i].label,
            fill: false,
            backgroundColor: colorOptions[i],
            pointBorderColor: colorOptions[i],
            pointBackgroundColor: colorOptions[i],
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: colorOptions[i],
            pointHoverBorderColor: colorOptions[i],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          });

          technologies['Technologies'].labels.forEach((item, index) => {
            // console.log(item.substring(11, 13));
            scatterDataObj['Technologies'].datasets[i].data.push({
              x: parseInt(item.substring(11, 13)),
              y: technologies.Technologies.datasets[i].data[index],
            });
          });
        }

        setScatterData({ ...scatterDataObj });

        console.log('S', scatterDataObj);
        console.log('P', pieDataObj);
        console.log('T', technologies);
      })
      .then(() => setIsLoading(false));
  }, []);

  function handleSelectedLabel(e) {
    setSelectLabel(e);
  }

  const handleTabs = (e) => {
    setTechProp(e.target.innerText);
  };

  // const handleToggle = (e) => {
  //   console.log(e.target.id);
  //   console.log(scatterData);
  // };

  return (
    <>
      <OptionsContainer
        handleSelectedLabel={handleSelectedLabel}
        chartOptions={chartOptions}
        selectLabel={selectLabel}
        maxLabel={maxLabel}
      />

      <div
        className="chart-container"
        // data-tip="Click on topics to add or remove them from the charts"
      >
        {/* <ReactTooltip /> */}
        {/* <ToggleList techList={techList} handleToggle={handleToggle} /> */}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TabsContainer
              technologies={technologies}
              pieData={pieData}
              scatterData={scatterData}
              selectLabel={selectLabel}
              handleTabs={handleTabs}
              techProp={techProp}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
