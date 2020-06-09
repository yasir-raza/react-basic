import React from 'react';
import './App.css';
import CustomComponent from './CustomComponent';

function App({name}) {
  let myName = name;
  return (
  <div className="mainDiv">
    <p>Hello world from <strong>{myName}</strong> </p>
    <h3 className="myClass">This is just a heading with css styling in it</h3>
  <CustomComponent customName={myName}></CustomComponent>
  </div>
  );
}

export default App;
