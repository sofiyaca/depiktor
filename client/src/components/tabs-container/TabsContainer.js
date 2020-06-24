import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Bar, Radar, Pie, Doughnut, Polar } from 'react-chartjs-2';
import './TabsContainer.css';

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

const TabsContainer = ({
  technologies,
  selectLabel,
  pieData,
  handleTabs,
  techProp,
}) => {
  return (
    <Tabs>
      <TabList onClick={(e) => handleTabs(e)}>
        {Object.keys(technologies).map((techType) => (
          <Tab key={'tab-' + techType}>{techType}</Tab>
        ))}
      </TabList>

      {Object.values(technologies).map((techType, index) => (
        <TabPanel
          data-testid={'tab-' + techType.labels[0]}
          key={'panel-' + techType.labels[index]}
        >
          {
            {
              Line: <Line data={techType} options={chartJSOptions}></Line>,
              Bar: <Bar data={techType} options={chartJSOptions}></Bar>,
              Radar: <Radar data={techType} options={chartJSOptions}></Radar>,
              Pie: <Pie data={pieData[techProp]}></Pie>,
              Doughnut: <Doughnut data={pieData[techProp]}></Doughnut>,
              Polar: <Polar data={pieData[techProp]}></Polar>,
            }[selectLabel.label]
          }
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsContainer;
