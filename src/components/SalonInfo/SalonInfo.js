import React from 'react';
import BackButton from '../Parts/BackButton';
import InfoHeader from './InfoHeader';
import InfoItem from './InfoItem';

const SalonInfo = (props) =>{
  return (
      <div>
        <InfoHeader />
        <BackButton />
        <InfoItem />
      </div>
    );
};

export default SalonInfo;