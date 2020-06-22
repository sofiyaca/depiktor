import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import {
  Pie,
  Bubble,
  Doughnut,
  HorizontalBar,
  Polar,
  Scatter,
} from 'react-chartjs-2';

// Services
import ApiClient from '../../services/ApiClient';

// Components
import OptionsContainer from '../options-container/OptionsContainer';
import TabsContainer from '../tabs-container/TabsContainer';
import Spinner from '../spinner/Spinner';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [technologies, setTechnologies] = useState({});
  const [selectLabel, setSelectLabel] = useState({
    value: 'line',
    label: 'Line',
  });
  const [selectTime, setSelectTime] = useState(0);
  const [maxLabel, setMaxLabel] = useState(0);

  useEffect(() => {
    ApiClient.getTechnologies()
      .then((technologies) => {
        setTechnologies(technologies);
        setMaxLabel(technologies.Platforms.labels.length);
      })
      .then(() => setIsLoading(false));
  }, []);

  function handleSelectedLabel(e) {
    console.log(e);
    setSelectLabel(e);
  }

  function handleSelectedTime(e) {
    console.log(e);
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
    <>
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
          {isLoading ? (
            <Spinner />
          ) : (
            <TabsContainer
              technologies={technologies}
              chartJSOptions={chartJSOptions}
              selectLabel={selectLabel}
            />
          )}
        </div>
      </div>

      <div>
        <h2>Pie Example</h2>
        <Pie
          data={{
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
              {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut
          data={{
            labels: ['Red', 'Green', 'Yellow'],
            datasets: [
              {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2>Bubble Example</h2>
        <Bubble
          data={{
            labels: ['January', 'Feb'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{ x: 10, y: 20, r: 5 }],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First datapoint',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2>Legend Handlers Example</h2>
        <p>Hover over label and click</p>
        <Pie
          data={{
            labels: ['Red', 'Green', 'Yellow'],
            datasets: [
              {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2>Polar Example</h2>
        <Polar
          data={{
            datasets: [
              {
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                  '#FF6384',
                  '#4BC0C0',
                  '#FFCE56',
                  '#E7E9ED',
                  '#36A2EB',
                ],
                label: 'My dataset', // for legend
              },
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
          }}
        />
      </div>
      <div>
        <h2>Scatter Example</h2>
        <Scatter
          data={{
            labels: ['Scatter'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                  { x: 65, y: 75 },
                  { x: 59, y: 49 },
                  { x: 80, y: 90 },
                  { x: 81, y: 29 },
                  { x: 56, y: 36 },
                  { x: 55, y: 25 },
                  { x: 40, y: 18 },
                ],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2>Bubble Example</h2>
        <Bubble
          data={{
            labels: ['January'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{ x: 10, y: 20, r: 5 }],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
