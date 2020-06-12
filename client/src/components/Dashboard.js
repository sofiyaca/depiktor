import React from 'react'
import './Dashboard.css';
import Options from './Options';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './React-Tabs.css';
import {Line, Bar} from 'react-chartjs-2';

export default function Dashboard() {

// mock data from getData 
const mockData = {
  labels: ['6 days ago', '6', '5', '4', '3', '2', 'today'],
  datasets: [
    {
      label: "react",
      data: [12, 4, 7, 32, 6, 15, 7],
    },
    {
      label: "angular",
      data: [45, 8, 3, 0, 12, 21, 16]
    },
    {
      label: "svelte",
      data: [17, 4, 3, 7, 8, 45, 3]
    },
    {
      label: "vue",
      data: [7, 4, 2, 17, 13, 23, 6]
    },
    ]
}

  return (
    <div className="dashboard">

    <div className="options-container">
    Hello I'm options!
    </div>
    
    <div className="tabs-container">
      <Tabs>
        <TabList>
          <Tab>Frontend Frameworks</Tab>
          <Tab>Databases</Tab>
        </TabList>
        
        <TabPanel>
          <Line data = {mockData}></Line>
        </TabPanel>
        <TabPanel>
          <Bar data = {mockData}></Bar>
        </TabPanel>
      </Tabs>
    </div>

    </div>
    )
  }
  
  
  