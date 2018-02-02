import React from 'react';
import Stars from '../Parts/Stars';
import {
  ListTitle, 
  StyledListItem,
  StyledItem1,
  StyledItem2,
  StyledItem3,
  Margin
} from './styles';

const ListItem = ({salons, toggleInfo}) => {
  const list = salons.map( salon => {
    return (
      <StyledListItem key={salon.id} onClick={()=>toggleInfo(salon)}>
        <StyledItem1>
          {salon.open_time}
        </StyledItem1>
        <StyledItem2>
          <ListTitle>{salon.name}</ListTitle>
          <Stars reviews={salon.review_numbers}/>
          <Margin>{salon.address}</Margin>
        </StyledItem2>
        <StyledItem3>
          <div>{salon.price} kr</div>
          <div>{salon.duration_time} min</div>
        </StyledItem3>
      </StyledListItem>
      );
  });
  return list;
};

export default ListItem;