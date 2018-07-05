import React from 'react';
import { IconStar } from '../svg/icons';

const Stars = ({reviews}) => {
  return (
    <div>
    <IconStar />
    {` (${reviews})`}
    </div>
  );
}

export default Stars;