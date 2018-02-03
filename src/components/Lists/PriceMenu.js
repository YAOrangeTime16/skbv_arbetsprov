import React from 'react';
import {
  PriceListWrapper, 
  PriceListItemMenu1, 
  PriceListItemMenu2} from './styles';
import {IconArrowDown} from '../assets/icons';

const PriceMenu = ({toggleList, getSalons, priceClass, priceRange, styleProp}) => {
  return (
      <PriceListWrapper
        onClick={()=>{
          toggleList();
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

export default PriceMenu;