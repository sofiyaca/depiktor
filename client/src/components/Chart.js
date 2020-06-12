import React from 'react'
import { Line} from 'react-chartjs-2';

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

export default function Chart() {
  return (
    <div className="chart-container">
      <Line data = {mockData}></Line>
    </div>
    
  )
}


