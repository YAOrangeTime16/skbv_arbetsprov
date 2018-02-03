import React from 'react';
import { IconStar } from '../assets/icons';

const Stars = ({reviews}) => {
  return (
    <div>
    <IconStar />
    {` (${reviews})`}
    </div>
  );
}

export default Stars;