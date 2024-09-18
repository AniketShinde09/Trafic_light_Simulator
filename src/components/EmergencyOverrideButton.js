
import React from 'react';

const EmergencyOverrideButton = ({ onClick }) => {
  return (
    <button className="emergency-button" onClick={onClick}>
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;
