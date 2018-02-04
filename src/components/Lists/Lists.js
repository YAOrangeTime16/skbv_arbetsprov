import React, {Component} from 'react';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import PriceMenu from './PriceMenu';
import * as api from '../api';

class Lists extends Component {
  state = {
    salons: [],
    showListA: false,
    showListB: false
  };

  _getSalons = (range) => {
    const fetchedSalons = api.salonsWithinPriceRange(range);
    const salons = [...fetchedSalons];
    this.setState({salons});
  }

  _toggleList = (priceClass) => {
    priceClass === 'a' && this.setState({showListA: !this.state.showListA});
    priceClass === 'b' && this.setState({showListB: !this.state.showListB});
  }

  render(){
    const {showListA, showListB} = this.state;
    return (
      <div>
        <ListHeader />
        <PriceMenu toggleList={this._toggleList} getSalons={this._getSalons} priceClass="a" priceRange="250 - 500"/>
        { showListA ? <ListItem {...this.state} {...this.props} /> : null }
        <PriceMenu  toggleList={this._toggleList} getSalons={this._getSalons} priceClass="b" priceRange="500 - 700"/>
        { showListB ? <ListItem {...this.state} {...this.props} /> : null }
      </div>
    );
  }
}
export default Lists;