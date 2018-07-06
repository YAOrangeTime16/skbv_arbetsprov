import React from 'react';
import {IconArrow, IconSetting} from '../svg/icons';
import { 
  HeaderText,
  HeaderWrapper, 
  Column1, 
  Column2, 
  Column3 } from './styles';

const ListHeader = () => {
  return (
    <HeaderWrapper>

      <Column1>
        <IconArrow stroke="#b69f58" translate="-10, -31" rotate="0"/>
      </Column1>

      <Column2>
        <HeaderText>Hår</HeaderText>
      </Column2>

      <Column3>
        <IconSetting />
      </Column3>
      
    </HeaderWrapper>
  )
}

export default ListHeader;