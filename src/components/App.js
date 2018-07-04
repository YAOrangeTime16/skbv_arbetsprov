import React, { Component } from 'react';
import './App.css';
import Lists from './Lists/Lists';
import SalonInfo from './SalonInfo/SalonInfo';
import {
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  state={
    //page: true,
    salonInfo: ''
  }

  _sendSalonInfo = (info='') =>{
    /*this.state.page 
    ? this.setState({page: false, salonInfo: info}) 
    : this.setState({page: true, salonInfo: ''});
    */
   this.setState({salonInfo: info})
  }

  render() {
    /*return (
      <div className="App">
        { this.state.page 
          ? <Lists {...this.state} toggleInfo={this._toggleInfo} />
          : <SalonInfo {...this.state} toggleInfo={this._sendSalonInfo}/>}
      </div>
    );*/
    return(
      <div className="App">
        <Route exact path="/list" render={()=><Lists sendSalonInfo={this._sendSalonInfo}/>}/>
        <Route path="/list/salon/:id" render={()=><SalonInfo salonInfo={this.state.salonInfo}/>}/>
      </div>
    )
  }
}

export default App;
