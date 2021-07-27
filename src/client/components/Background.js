import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundDay from '../../../public/backgroundDay.png';
import backgroundNight from '../../../public/backgroundNight.png';
import { useInterval } from '../utils.js';

const Background_ = () => {
  const fadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
  `;

  const Wrapper = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 1s;
  `;
  const [backgroundImage, setBackgroundImage] = useState('day');

  useInterval(() => {
    setBackgroundImage(backgroundImage === 'day' ? 'night' : 'day');
  }, 10000);

  return (<Wrapper src={backgroundImage === 'day' ? backgroundDay : backgroundNight} />);
};

// use memo to avoid refreshing when the state is updated. Launching the rocket in our case.
export const Background = React.memo(Background_);
