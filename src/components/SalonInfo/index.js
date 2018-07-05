import React from 'react';
import { Redirect } from 'react-router';

import SalonHeader from './SalonHeader';
import SalonMenu from './SalonMenu';
import InfoItems from './InfoItems';
import { Background } from './styles';

const SalonInfo = (props) =>{
  return (
    props.salonInfo
    ? ( 
        <Background>
          <SalonHeader {...props}/>
          <SalonMenu />
          <InfoItems {...props}/>
        </Background>
    )
  : <Redirect to="/list" />
  );
};

export default SalonInfo;