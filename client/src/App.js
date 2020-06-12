import React, {useState, useEffect} from 'react';
import './App.css';
import ApiClient from './ApiClient';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

function App() {

  //get the data object via the api
  //
  

  return(
    <div className="App">
      <Nav></Nav>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App;
