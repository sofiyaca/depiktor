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