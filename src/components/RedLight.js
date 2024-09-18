
import React from 'react';

const RedLight = ({ active }) => {
  return (
    <div className={`light red ${active ? 'active' : ''}`}></div>
  );
};

export default RedLight;
