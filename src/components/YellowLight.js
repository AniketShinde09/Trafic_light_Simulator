
import React from 'react';

const YellowLight = ({ active }) => {
  return (
    <div className={`light yellow ${active ? 'active' : ''}`}></div>
  );
};

export default YellowLight;
