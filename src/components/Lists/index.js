import React, {Component, Fragment} from 'react';

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
    if(priceClass === 'priceRankA') {
      this.setState(prevState => {
        const newStateA = prevState.showListA ? false : true;
        return ({
          showListA: newStateA,
          showListB: false
        })
      })
    } else if (priceClass === 'priceRankB'){
      this.setState(prevState=>{
        const newStateB = prevState.showListB ? false : true;
        return ({
          showListA: false,
          showListB: newStateB
        })
      })
    }
  }

  render(){
    const {showListA, showListB} = this.state;
    return (
      <Fragment>
        <ListHeader />
        <PriceMenu
          toggleList={this._toggleList}
          getSalons={this._getSalons}
          priceClass="priceRankA"
          priceRange="250 - 500"/>
        { showListA ? <ListItem {...this.state} {...this.props} /> : null }
        <PriceMenu 
          toggleList={this._toggleList}
          getSalons={this._getSalons}
          priceClass="priceRankB"
          priceRange="500 - 700"/>
        { showListB ? <ListItem {...this.state} {...this.props} /> : null }
      </Fragment>
    );
  }
}
export default Lists;