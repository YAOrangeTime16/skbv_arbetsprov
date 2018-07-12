import React from 'react';
import PropTypes from 'prop-types';

import {
  PriceListWrapper, 
  PriceListItemMenu1, 
  PriceListItemMenu2} from './styles';
import { IconArrowDown } from '../svg/icons';

const PriceMenu = ({toggleList, getSalons, priceClass, priceRange}) => {
  return (
      <PriceListWrapper
        onClick={()=>{
          toggleList(priceClass);
          getSalons(priceClass)}}
      >
          <PriceListItemMenu1>
            <p>Pris {priceRange} kr</p>
          </PriceListItemMenu1>
          
          <PriceListItemMenu2>
              <IconArrowDown stroke="#b69f58" rotate="270"/>
          </PriceListItemMenu2>
          
      </PriceListWrapper>
  );
};

PriceMenu.propTypes = {
  toggleList: PropTypes.func,
  getSalons: PropTypes.func,
  priceClass: PropTypes.string,
  priceRange: PropTypes.string
}

export default PriceMenu;