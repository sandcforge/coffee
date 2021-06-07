import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Rocket = (props) => {

  const { message, active = true, onEnd } = props;
  const windowWidth = window.innerWidth;
  const slideIn = keyframes`
    0% { left: -300px; }
    100% { left: ${windowWidth-300}px;}`;

  const activeWrapper = styled.div`
    background-color: green;
    position: absolute;
    height: 50px;
    width: 300px;
    animation-name: ${slideIn};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
 `;
  const inactiveWrapper = styled.div`
    display: none;
`;

  const Wrapper = active ? activeWrapper : inactiveWrapper;

  return (<>
    <Wrapper onAnimationEnd={onEnd}>{message + windowWidth}</Wrapper>
  </>);
};
