import React, {useState, useEffect} from 'react';
import ApiClient from '../ApiClient';
import './Dashboard.css';
import Spinner from './Spinner';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './React-Tabs.css';
import {Line, Bar, Radar} from 'react-chartjs-2';
import Select from 'react-select';
import ReactSlider from 'react-slider';

export default function Dashboard() {

  const [loadStatus, setLoadStatus] = useState(true);
  const [technologies, setTechnologies] = useState({});
  const [selectLabel, setSelectLabel] = useState({value: 'line', label: 'Line'});
  const [selectTime, setSelectTime] = useState(0);

  useEffect(() => {
    ApiClient.getTechnologies()
      .then(technologies => {setTechnologies(technologies)})
      .then(()=> setLoadStatus(false))
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
  { value: 'radar', label: 'Radar' }
];

const chartJSOptions = {
  responsive: true
    }

  return (
    <div className="dashboard">

    <div className="options-container">
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

      { !loadStatus ?
        <Tabs>
    
          <TabList>
          {
          Object.keys(technologies).map(techType => 
            <Tab key={'tab-'+ techType}> {techType} </Tab>
            )
          }
          </TabList>

        {
          Object.values(technologies).map(techType => 
            <TabPanel key={'panel-' + techType.labels[0]} >

              {{
                'Line': (<Line data={techType} options={chartJSOptions}></Line>),
                'Bar': (<Bar data={techType} options={chartJSOptions}></Bar>),
                'Radar': (<Radar data={techType} options={chartJSOptions}></Radar>)
              } [selectLabel.label]}

            </TabPanel>
            )
        }
        </Tabs>
        :
        <Spinner/>
      }

    </div>

  </div>
    )
  }


  