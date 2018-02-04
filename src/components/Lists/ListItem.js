import React from 'react';
import Stars from '../Parts/Stars';
import {ArrowFoward} from '../assets/icons';
import {
  ListTitle,
  SmallFont,
  SalonListWrapper,
  SalonItem1,
  SalonItem2,
  SalonItem3,
  SalonItem4,
  Margin
} from './styles';

const ListItem = ({salons, toggleInfo, b}) => {
  const list = salons.map( salon => {
    return (
      <SalonListWrapper key={salon.id} onClick={()=>toggleInfo(salon)}>
        <SalonItem1 b>
          {salon.open_time}
        </SalonItem1>
        <SalonItem2 b>
          <ListTitle>{salon.name}</ListTitle>
          <SmallFont><Stars reviews={salon.review_numbers}/></SmallFont>
          <Margin>{salon.address}</Margin>
        </SalonItem2>
        <SalonItem3 b>
          <div>{salon.price} kr</div>
          <SmallFont>{salon.duration_time} min</SmallFont>
        </SalonItem3>
        <SalonItem4 b>
          <div><ArrowFoward /></div>
        </SalonItem4>
      </SalonListWrapper>
      );
  });
  return list;
};

export default ListItem;