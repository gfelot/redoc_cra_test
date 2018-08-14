import React, { Component } from 'react';
import './App.css';
import { RedocStandalone } from 'redoc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RedocStandalone specUrl="../public/swagger.yml" />
      </div>
    );
  }
}

export default App;
