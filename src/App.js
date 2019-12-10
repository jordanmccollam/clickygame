import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pictures from "./cards.json"
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <div className="container mb-5 pb-5">
          <div className="row text-center">
          <Card image={Pictures[0].url} />
          <Card image={Pictures[1].url} />
          <Card image={Pictures[2].url} />
          <Card image={Pictures[3].url} />
          <Card image={Pictures[4].url} />
          <Card image={Pictures[5].url} />
          <Card image={Pictures[6].url} />
          <Card image={Pictures[7].url} />
          <Card image={Pictures[8].url} />
          <Card image={Pictures[9].url} />
          <Card image={Pictures[10].url} />
          <Card image={Pictures[11].url} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
