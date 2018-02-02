import React from 'react';
import {
  IconClock,
  IconMapPointer,
  IconTelephone,
  IconUrl
} from '../assets/icons';
import {SalonWrapper, SalonInfoItem, ImageAdjuster, Description} from './styles';

const InfoItems = ({salonInfo}) => {
  return (
    <SalonWrapper>
      <SalonInfoItem>
        <ImageAdjuster>
          <IconMapPointer />
        </ImageAdjuster>
        <div>{salonInfo.address}</div>
      </SalonInfoItem>
      <SalonInfoItem>
        <ImageAdjuster>
          <IconClock />
        </ImageAdjuster>
        <div>Öppet till {salonInfo.open_time} idag</div>
      </SalonInfoItem>
      <SalonInfoItem>
        <ImageAdjuster>
          <IconTelephone />
        </ImageAdjuster>
        <div>{salonInfo.tel}</div>
      </SalonInfoItem>
      <SalonInfoItem>
        <ImageAdjuster>
          <IconUrl />
        </ImageAdjuster>
        <div>{salonInfo.url}</div>
      </SalonInfoItem>
      <Description>{salonInfo.description}</Description>
    </SalonWrapper>
  )
}

export default InfoItems;