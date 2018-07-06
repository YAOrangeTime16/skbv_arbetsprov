import React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowDown,
  IconClock,
  IconMapPointer,
  IconTelephone,
  IconUrl
} from '../svg/icons';
import {
  SalonWrapper,
  SalonInfoItem,
  ImageAdjuster,
  Description
} from './styles';

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
            <ImageAdjuster><ArrowDown /></ImageAdjuster>
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

InfoItems.propTypes = {
  salonInfo: PropTypes.object.isRequired
}

export default InfoItems;