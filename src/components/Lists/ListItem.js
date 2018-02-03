import React from 'react';
import Stars from '../Parts/Stars';
import {ArrowFoward} from '../assets/icons';
import {
  ListTitle,
  SmallFont,
  StyledListItem,
  StyledItem1,
  StyledItem2,
  StyledItem3,
  StyledItem4,
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
          <SmallFont><Stars reviews={salon.review_numbers}/></SmallFont>
          <Margin>{salon.address}</Margin>
        </StyledItem2>
        <StyledItem3>
          <div>{salon.price} kr</div>
          <SmallFont>{salon.duration_time} min</SmallFont>
        </StyledItem3>
        <StyledItem4>
          <div><ArrowFoward /></div>
        </StyledItem4>
      </StyledListItem>
      );
  });
  return list;
};

export default ListItem;