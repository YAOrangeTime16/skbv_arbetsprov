import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Stars from '../Parts/Stars';
import { IconArrow, IconHeart } from '../assets/icons';
import {
  ArrowBack,
  ButtonAlign,
  Heart,
  StarAdjuster,
  SalonImage,
  SalonName,
  TextBox
} from './styles';

class SalonHeader extends Component {
  state = {
    like: false
  };

  _toggleLike = () => {
    this.setState(prevState=>{
      const newState = prevState.like ? false : true;
      return { like: newState }
    })
  };

  render(){
    const {salonInfo} = this.props;
    return (
      <SalonImage img={salonInfo.background}>
        <ButtonAlign>
          <Link to="/list">
          <ArrowBack>
            <IconArrow stroke="#ffffff" translate="-10, -31" rotate="0"/>
          </ArrowBack>
          </Link>
          <Heart onClick={this._toggleLike}>
            <IconHeart fill={this.state.like ? "#ffffff" : 'none'}/>
          </Heart>
        </ButtonAlign>
        <TextBox>
          <SalonName>{salonInfo.name}</SalonName>
          <StarAdjuster>
            <Stars reviews={salonInfo.review_numbers}/>
          </StarAdjuster>
        </TextBox>
      </SalonImage>
    );
  };
}

export default SalonHeader;