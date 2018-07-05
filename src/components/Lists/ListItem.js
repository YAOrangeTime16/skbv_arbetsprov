import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import Stars from '../Parts/Stars';
import { ArrowFoward } from '../svg/icons';
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

const styles = {
  navlink : {
    textDecoration: 'none',
    color: '#000'
  }
}
const ListItem = ({salons, sendSalonInfo, b}) => {
  const list = salons.map( salon => {
    return (
      <Fragment key={salon.id} >
      <NavLink to={`/salon/${salon.urlName}`} style={styles.navlink} >
      <SalonListWrapper onClick={()=>sendSalonInfo(salon)}>
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
      </NavLink>
      </Fragment>
      );
  });
  return list;
};

export default ListItem;