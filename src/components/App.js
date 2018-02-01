import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Lists from './Lists/Lists';
import SalonInfo from './SalonInfo/SalonInfo';

class App extends Component {
  constructor(){
    super();
    this.state={
      page: true
    }
  };

  render() {
    return (
      <div>
        { this.state.page ? <Lists /> : <SalonInfo />}
      </div>
    );
  }
}

export default App;
