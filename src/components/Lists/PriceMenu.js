import React from 'react';

const PriceMenu = ({toggleList, getSalons}) => {
  return (
      <div 
        onClick={()=>{
          toggleList();
          getSalons('a');
        }}
      >
        Price 250 - 500 kr
      </div>
  );
};

export default PriceMenu;

