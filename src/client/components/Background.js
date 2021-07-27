import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundDay from '../../../public/backgroundDay.png';
import backgroundNight from '../../../public/backgroundNight.png';
import { useInterval } from '../utils.js';

export const Background = () => {
  const Wrapper = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  `;
  const [backgroundImage, setBackgroundImage] = useState('day');

  useInterval(() => {
    setBackgroundImage(backgroundImage === 'day' ? 'night' : 'day');
  }, 5000);

  return (<Wrapper src={backgroundImage === 'day' ? backgroundDay : backgroundNight} />);
};

