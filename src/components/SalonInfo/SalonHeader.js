import React, {Component} from 'react';
import Stars from '../Parts/Stars';
import {IconArrow, IconHeart} from '../assets/icons';
import {ArrowBack, ButtonAlign, Heart, StarAdjuster, SalonImage, SalonName, TextBox} from './styles';

class SalonHeader extends Component {
  state = {
    like: false
  };

  _toggleLike = () => {
    this.setState({like: !this.state.like})
  };

  render(){
    const {salonInfo, toggleInfo} = this.props;
    return (
      <SalonImage>
        <ButtonAlign>
          <ArrowBack onClick={toggleInfo}>
            <IconArrow stroke="#ffffff" translate="-10, -31" rotate="0"/>
          </ArrowBack>
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