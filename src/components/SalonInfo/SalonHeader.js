import React, {Component} from 'react';
import Stars from '../Parts/Stars';
import {IconArrow, IconHeart} from '../assets/icons';
import {ArrowBack, ButtonAlign, Heart, StarAdjuster, SalonImage, SalonName, TextWhite} from './styles';

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
          <Heart><IconHeart onClick={this._toggleLike} fill={this.state.like ? "#ffffff" : 'none'}/></Heart>
        </ButtonAlign>
        <TextWhite>
          <SalonName>{salonInfo.name}</SalonName>
          <StarAdjuster>
            <Stars reviews={salonInfo.review_numbers}/>
          </StarAdjuster>
        </TextWhite>
      </SalonImage>
    );
  };
}

export default SalonHeader;