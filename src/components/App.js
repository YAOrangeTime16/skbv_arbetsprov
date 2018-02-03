import React, { Component } from 'react';
import './App.css';
import Lists from './Lists/Lists';
import SalonInfo from './SalonInfo/SalonInfo';

class App extends Component {
  state={
    page: true,
    salonInfo: ''
  }

  _toggleInfo = (info='') =>{
    this.state.page 
    ? this.setState({page: false, salonInfo: info}) 
    : this.setState({page: true, salonInfo: ''});
  }

  render() {
    return (
      <div className="App">
        { this.state.page ? <Lists {...this.state} toggleInfo={this._toggleInfo} /> : <SalonInfo {...this.state} toggleInfo={this._toggleInfo}/>}
      </div>
    );
  }
}

export default App;
