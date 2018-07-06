import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import Stars from '../Parts/Stars';
import { ArrowFoward } from '../svg/icons';
import {
  ListTitle,
  SmallFont,
  SalonListWrapper,
  SalonColumn1,
  SalonColumn2,
  SalonColumn3,
  SalonColumn4,
  Margin
} from './styles';

const styles = {
  navlink : {
    textDecoration: 'none',
    color: '#000'
  }
}

const ListItem = ({salons, sendSalonInfo}) => {
  const list = salons.map( salon => {
    return (
      <Fragment key={salon.id} >
        <NavLink to={`/salon/${salon.urlName}`} style={styles.navlink} >
          <SalonListWrapper onClick={()=>sendSalonInfo(salon)}>

            <SalonColumn1>
              {salon.open_time}
            </SalonColumn1>

            <SalonColumn2>
              <ListTitle>{salon.name}</ListTitle>
              <SmallFont><Stars reviews={salon.review_numbers}/></SmallFont>
              <Margin>{salon.address}</Margin>
            </SalonColumn2>

            <SalonColumn3>
              <div>{salon.price} kr</div>
              <SmallFont>{salon.duration_time} min</SmallFont>
            </SalonColumn3>

            <SalonColumn4>
              <div><ArrowFoward /></div>
            </SalonColumn4>
            
          </SalonListWrapper>
        </NavLink>
      </Fragment>
      );
  });
  return list;
};

ListItem.propTypes = {
  salons: PropTypes.array.isRequired,
  sendSalonInfo: PropTypes.func.isRequired
}
export default ListItem;