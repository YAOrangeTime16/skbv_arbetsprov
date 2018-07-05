import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Lists from './Lists';
import Loader from './Loader';

const ImportedSalonInfo = Loadable({
  loader: () => import('./SalonInfo'),
  loading: Loader
});


class App extends Component {
  state={
    salonInfo: null
  }

  _sendSalonInfo = (info=null) =>{
   this.setState({salonInfo: info})
  }

  render() {
    return(
      <div className="App">
        <Route exact path="/" render={()=><Lists sendSalonInfo={this._sendSalonInfo}/>}/>
        <Route path="/salon/:salonName" render={()=><ImportedSalonInfo salonInfo={this.state.salonInfo}/>}/>
      </div>
    )
  }
}

export default App;
