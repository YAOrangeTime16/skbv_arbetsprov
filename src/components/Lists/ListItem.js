import React from 'react';

const ListItem = ({salons}) => {
  const list = salons.map( salon => {
      return (
      <div key={salon.id}>
        <div>{salon.time}</div>
        <div>{salon.name}</div>
        <div>{salon.price}</div>
      </div>
      );
  });
  return list;
};

export default ListItem;