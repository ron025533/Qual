import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/heart.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const YourComponent = () => {
  return <Lottie options={defaultOptions} />;
};

export default YourComponent;
