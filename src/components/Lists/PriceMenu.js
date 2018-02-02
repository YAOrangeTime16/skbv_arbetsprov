import React from 'react';
import {
  PriceListWrapper, 
  PriceListItemMenu1, 
  PriceListItemMenu2} from './styles';
import {IconArrowDown} from '../assets/icons';

const PriceMenu = ({toggleList, getSalons}) => {
  return (
      <PriceListWrapper>
        <PriceListItemMenu1
          onClick={()=>{
            toggleList();
            getSalons('a');
          }}>
          <p>Price 250 - 500 kr</p>
        </PriceListItemMenu1>
        <PriceListItemMenu2>
            <IconArrowDown stroke="#b69f58" rotate="270"/>
        </PriceListItemMenu2>
      </PriceListWrapper>
  );
};

export default PriceMenu;