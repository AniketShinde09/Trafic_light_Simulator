
import React, { useState, useEffect, useCallback } from 'react';
import GreenLight from '../GreenLight';
import YellowLight from '../YellowLight';
import RedLight from '../RedLight';
import PedestrianButton from '../PedestrianButton';
import EmergencyOverrideButton from '../EmergencyOverrideButton'; 
import './TrafficLight.css';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('green');
  const [pedestrianRequested, setPedestrianRequested] = useState(false);
  const [emergencyOverride, setEmergencyOverride] = useState(false); 
  const [timer, setTimer] = useState(10); 

  
  const changeLight = useCallback(() => {
    if (emergencyOverride) {
      setCurrentLight('green');
      setTimer(5);
      setEmergencyOverride(false); 
    } else if (currentLight === 'green') {
      setCurrentLight('yellow');
      setTimer(3); 
    } else if (currentLight === 'yellow') {
      setCurrentLight('red');
      setTimer(7); 
    } else {
      if (pedestrianRequested) {
        setTimer(5); 
        setPedestrianRequested(false);
      } else {
        setCurrentLight('green');
        setTimer(10); 
      }
    }
  }, [currentLight, pedestrianRequested, emergencyOverride]);

 
  const handlePedestrianRequest = () => {
    setPedestrianRequested(true);
  };

  
  const handleEmergencyOverride = () => {
    setEmergencyOverride(true);
    setCurrentLight('green'); 
    setTimer(5); 
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      changeLight();
    }

    return () => clearInterval(interval);
  }, [timer, changeLight]);

  return (
    <div className="traffic-light-container">
      <GreenLight active={currentLight === 'green'} />
      <YellowLight active={currentLight === 'yellow'} />
      <RedLight active={currentLight === 'red'} />
      <div className="timer">Time Remaining: {timer}s</div>
      <PedestrianButton onClick={handlePedestrianRequest} />
      <EmergencyOverrideButton onClick={handleEmergencyOverride} /> 
    </div>
  );
};

export default TrafficLight;
