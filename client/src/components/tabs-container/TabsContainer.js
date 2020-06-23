import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  Line,
  Bar,
  Radar,
  Pie,
  Doughnut,
  Polar,
  Scatter,
} from 'react-chartjs-2';
import './TabsContainer.css';

const TabsContainer = ({
  technologies,
  chartJSOptions,
  selectLabel,
  pieData,
  scatterData,
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

      {Object.values(technologies).map((techType) => (
        <TabPanel
          data-testid={'tab-' + techType.labels[0]}
          key={'panel-' + techType.labels[0]}
        >
          {
            {
              Line: <Line data={techType} options={chartJSOptions}></Line>,
              Bar: <Bar data={techType} options={chartJSOptions}></Bar>,
              Radar: <Radar data={techType} options={chartJSOptions}></Radar>,
              Pie: <Pie data={pieData[techProp]}></Pie>,
              Doughnut: <Doughnut data={pieData[techProp]}></Doughnut>,
              Polar: <Polar data={pieData[techProp]}></Polar>,
              Scatter: <Scatter data={scatterData[techProp]}></Scatter>,
            }[selectLabel.label]
          }
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsContainer;
