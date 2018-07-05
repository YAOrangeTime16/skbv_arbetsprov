import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Lists from './Lists';
import Loader from './Loader';

const styles = {
  app : {
    fontFamily: "'MillerBanner', 'Helvetica Neue', 'Open Sans', Sans-serif, Arial",
    fontSize: '62.5%',
    fontWeight: 300,
  }
}

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
      <div style={styles.app}>
        <Route exact path="/" render={()=><Lists sendSalonInfo={this._sendSalonInfo}/>}/>
        <Route path="/salon/:salonName" render={()=><ImportedSalonInfo salonInfo={this.state.salonInfo}/>}/>
      </div>
    )
  }
}

export default App;
