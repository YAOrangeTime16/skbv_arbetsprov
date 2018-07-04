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
    if(priceClass === 'priceRank1') {
      this.setState(prevState => {
        const newStateA = prevState.showListA ? false : true;
        return ({
          showListA: newStateA,
          showListB: false
        })
      })
    } else if (priceClass === 'priceRank2'){
      this.setState(prevState=>{
        const newStateB = prevState.showListB ? false : true;
        return ({
          showListA: false,
          showListB: newStateB
        })
      })
    }
    //priceClass === 'priceRank1' && this.setState(prevState=>({ showListA: prevState.showListA ? false : true }));
    //priceClass === 'priceRank2' && this.setState(prevState=>({ showListB: prevState.showListB ? false : true }));
  }

  render(){
    const {showListA, showListB} = this.state;
    return (
      <div>
        <ListHeader />
        <PriceMenu
          toggleList={this._toggleList}
          getSalons={this._getSalons}
          priceClass="priceRank1"
          priceRange="250 - 500"/>
        { showListA ? <ListItem {...this.state} {...this.props} /> : null }
        <PriceMenu 
          toggleList={this._toggleList}
          getSalons={this._getSalons}
          priceClass="priceRank2"
          priceRange="500 - 700"/>
        { showListB ? <ListItem {...this.state} {...this.props} /> : null }
      </div>
    );
  }
}
export default Lists;