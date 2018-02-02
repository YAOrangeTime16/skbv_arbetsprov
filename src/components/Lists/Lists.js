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

  _getSalons = (range) => {
    const fetchedSalons = api.salonsWithinPriceRange(range);
    const salons = [...fetchedSalons];
    this.setState({salons});
  }

  _toggleList = (e) => {
    this.setState({showList: !this.state.showList})
  }

  render(){
    const {showList} = this.state;
    return (
      <div>
        <ListHeader />
        <PriceMenu toggleList={this._toggleList} getSalons={this._getSalons} />
        { showList ? <ListItem {...this.state} {...this.props} /> : null }
      </div>
    );
  }
}
export default Lists;