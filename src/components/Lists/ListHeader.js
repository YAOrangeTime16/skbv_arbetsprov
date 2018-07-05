import React from 'react';
import {IconArrow, IconSetting} from '../svg/icons';
import { 
  HeaderText,
  HeaderWrapper, 
  WrapperItem1, 
  WrapperItem2, 
  WrapperItem3 } from './styles';

const ListHeader = (props) => {
  return (
    <HeaderWrapper>
      <WrapperItem1>
        <IconArrow stroke="#b69f58" translate="-10, -31" rotate="0"/>
      </WrapperItem1>
      <WrapperItem2>
        <HeaderText>Hår</HeaderText>
      </WrapperItem2>
      <WrapperItem3>
        <IconSetting />
      </WrapperItem3>
    </HeaderWrapper>
  )
}

export default ListHeader;