
import React from 'react';

const PedestrianButton = ({ onClick }) => {
  return (
    <button className="pedestrian-button" onClick={onClick}>
      Pedestrian Request
    </button>
  );
};

export default PedestrianButton;
