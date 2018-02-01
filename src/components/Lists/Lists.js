import React, {Component} from 'react';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import PriceMenu from './PriceMenu';
import * as api from '../api';

class Lists extends Component {
  state = {
    salons: [],
    showList: false
  };

  __getSalons = (range) => {
    const fetchedSalons = api.salonsWithinPriceRange(range);
    const salons = [...fetchedSalons];
    this.setState({salons});
  }

  __toggleList = (e) => {
    this.setState({showList: !this.state.showList})
  }

  render(){
    const {salons, showList} = this.state;
    return (
      <div>
        <ListHeader />
        <PriceMenu toggleList={this.__toggleList} getSalons={this.__getSalons} />
        { showList ? <ListItem {...this.state}/> : null }
      </div>
    );
  }

}
  
  

export default Lists;