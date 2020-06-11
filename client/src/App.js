import React, {useState, useEffect} from 'react';
import './App.css';
import ApiClient from './ApiClient';
import Nav from './components/Nav';
import List from './components/List';
import Options from './components/Options';
import Charts from './components/Charts';

function App() {

  //get the data object via the api
  //

  return(
    <div className="App">
      <Nav></Nav>
      <Charts></Charts>
    </div>
  )
}

export default App;
