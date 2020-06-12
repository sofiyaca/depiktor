import React from 'react'
import './Dashboard.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './React-Tabs.css';
import {Line, Bar} from 'react-chartjs-2';
import Toggle from 'react-toggle';
import './Toggle.css';
import Select from 'react-select';
import ReactSlider from 'react-slider'

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

const options = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'Vue', label: 'Vue' }
];

  return (
    <div className="dashboard">

    <div className="options-container">

      <div className="toggle-container">
        <p>List of Toggles with labels</p>
        <label>
          <Toggle defaultChecked={true}/>
          <span>React</span>
       </label>
       <label>
          <Toggle defaultChecked={true}/>
          <span>Angular</span>
       </label>
       <label>
          <Toggle defaultChecked={true}/>
          <span>Svelte</span>
       </label>
       <label>
          <Toggle defaultChecked={true}/>
          <span>Vue</span>
       </label>
      </div>

      <div className="chart-options-container">
        <div className="options-header">
          <p>Options</p>
        </div>

        <div className="chart-style-container">
          <Select options={options} className="chart-style-select-dropdown" placeholder="Select Chart Style..."></Select>
        </div>
        <div className="chart-timeframe-container">
        <p>Timeframe</p>
          <ReactSlider 
            className="horizontal-slider"
            thumbClassName="options-thumb"
            trackClassName="options-track"
            min={0}
            max={7}
            invert={true}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}>     
          </ReactSlider>
          <div>
          </div>
        </div>
      </div>
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
  
  
  