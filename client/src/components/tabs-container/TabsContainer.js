import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Bar, Radar } from 'react-chartjs-2';
import './TabsContainer.css';

const TabsContainer = ({ technologies, chartJSOptions, selectLabel }) => {
  return (
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
              Line: <Line data={techType} options={chartJSOptions}></Line>,
              Bar: <Bar data={techType} options={chartJSOptions}></Bar>,
              Radar: <Radar data={techType} options={chartJSOptions}></Radar>,
            }[selectLabel.label]
          }
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsContainer;
