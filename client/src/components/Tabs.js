import React, {useState} from 'react'
import Tab from './Tab';
import './Tabs.css';

export default function Tabs({data}) {
  //data is an array of objects that contain the graph data of type [frontend: {}, backend:{}, databases:{}]
  //loop through data and pass each obj to a chart
  //chart will display the data in it's object 

  //tabs 
  //when clicked cha


  const [active, setActive] = useState(0);
  
  function handleClick(e) {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div className="tabs">
      <Tab onClick={handleClick} active={active === 0} id={0}></Tab>
      <Tab onClick={handleClick} active={active === 1} id={1}></Tab>

      
    </div>
  )
}
