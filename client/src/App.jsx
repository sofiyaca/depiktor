import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return(
    <div className="App">
      <Nav></Nav>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App;
