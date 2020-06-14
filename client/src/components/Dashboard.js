import React, {useState, useEffect} from 'react'
import './Dashboard.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './React-Tabs.css';
import {Line, Bar, Radar} from 'react-chartjs-2';
import Toggle from 'react-toggle';
import './Toggle.css';
import Select from 'react-select';
import ReactSlider from 'react-slider'

export default function Dashboard() {

  const [selectLabel, setSelectLabel] = useState({value: 'line', label: 'Line'});
  const [selectTime, setSelectTime] = useState(0);

  function handleSelectedLabel(e) {
    setSelectLabel(e);
  }

  function handleSelectedTime(e) {
    setSelectTime(e);
  }

// mock data from getData 
const mockData = [ 
  
  {"Web Frameworks": { //this object is = data 
  labels: ['6 days ago', '6', '5', '4', '3', '2', 'today'],
  datasets: [
    {
      label: "React",
      data: [12, 4, 7, 32, 6, 15, 7],
    },
    {
      label: "Angular",
      data: [45, 8, 3, 0, 12, 21, 16]
    },
    {
      label: "Svelte",
      data: [17, 4, 3, 7, 8, 45, 3]
    },
    {
      label: "Vue",
      data: [7, 4, 2, 17, 13, 23, 6]
    }
    ]
  },
},

{"Languages": {
  labels: ['6 days ago', '6', '5', '4', '3', '2', 'today'],
  datasets: [
    {
      label: "JavaScript",
      data: [12, 4, 7, 32, 6, 15, 7],
      borderColor: ['red', 'yellow', 'orange', 'blue'], //how to add colors
      backgroundColor: ['red', 'yellow', 'orange', 'blue'],
      fill: false,
    },
    {
      label: "HTML/CSS",
      data: [45, 8, 3, 0, 12, 21, 16],
      borderColor: ['yellow'],
      backgroundColor: ['yellow'],
      fill: false,
    },
    {
      label: "SQL",
      data: [17, 4, 3, 7, 8, 45, 3],
      borderColor: ['orange'],
      backgroundColor: ['orange'],
      fill: false,
    },
    {
      label: "Python",
      data: [7, 4, 2, 17, 13, 23, 6],
      borderColor: ['blue'],
      backgroundColor: ['blue'],
      fill: false,
    }
    ]
  },
},

{"Databases": {
  labels: ['6 days ago', '6', '5', '4', '3', '2', 'today'],
  datasets: [
    {
      label: "MySQL",
      data: [12, 4, 7, 32, 6, 15, 7],
    },
    {
      label: "PostgreSQL",
      data: [45, 8, 3, 0, 12, 21, 16]
    },
    {
      label: "Microsoft SQL Server",
      data: [17, 4, 3, 7, 8, 45, 3]
    },
    {
      label: "SQLite",
      data: [7, 4, 2, 17, 13, 23, 6]
    }
    ]
  },
},
]

const chartOptions = [
  { value: 'line', label: 'Line' },
  { value: 'bar', label: 'Bar' },
  { value: 'radar', label: 'Radar' }
];

const chartJSOptions = {
  responsive: true, 
  title: {
    display: true, 
    text: 'test title'
  },
}

  return (
    <div className="dashboard">

    <div className="options-container">

      <div>{selectLabel.label}</div>

      {/* <div className="toggle-container">

        <p>List of Toggles with labels</p>

        {
          mockData.map(techType => {
            let labels = Object.values(techType)[0].datasets.map(el => el.label);

            return labels.map(label => 
              <label>
                <Toggle defaultChecked={true}/>
                <span>{label}</span>
              </label>
              )
            }
          )
        }

      </div> */}
      
      <div className="chart-options-container">
        <div className="options-header">
          <p>Options</p>
        </div>

        <div className="chart-style-container">
          <p>Chart Style</p>
          <Select options={chartOptions} className="chart-style-select-dropdown" 
          placeholder="Select Chart Style..." value={selectLabel} onChange={handleSelectedLabel}>

          </Select>
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
            value={selectTime}
            onAfterChange={handleSelectedTime}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}>    
          </ReactSlider>
        </div>
      </div>

    </div>

    <div className="tabs-container">
      <Tabs >

        <TabList>
          {
          mockData.map(techType => 
            <Tab key={"tab-"+Object.keys(techType)[0]}> {Object.keys(techType)[0]} </Tab>
            )
          }
        </TabList>

        {
          mockData.map(techType => 
            <TabPanel key={"tabpanel-"+Object.keys(techType)[0]}>

              {{
                'Line': (<Line data={Object.values(techType)[0]} options={chartJSOptions}></Line>),
                'Bar': (<Bar data={Object.values(techType)[0]} options={chartJSOptions}></Bar>),
                'Radar': (<Radar data={Object.values(techType)[0]} options={chartJSOptions}></Radar>)
              }[selectLabel.label]}

            </TabPanel>
            )
        }
      </Tabs>
    </div>

  </div>
    )
  }
  
  
  