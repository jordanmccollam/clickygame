import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <div className="container mb-5 pb-5">
        {/* <div className="row"> */}
          <Card/>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
