import React from 'react';
import SalonHeader from './SalonHeader';
import SalonMenu from './SalonMenu';
import InfoItems from './InfoItems';
import {Background} from './styles';

const SalonInfo = (props) =>{
  return (
      <Background>
        <SalonHeader {...props}/>
        <SalonMenu />
        <InfoItems {...props}/>
      </Background>
    );
};

export default SalonInfo;