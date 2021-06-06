import React from 'react';
import styled, { keyframes } from 'styled-components';



export const Rocket = (props) => {

  const { message, active = true, onEnd } = props;
  const breatheAnimation = keyframes`
    0% { left: 0px; }
    100% { left: 100%;}
 `
  const activeWrapper = styled.div`
    background-color: green;
    position: absolute;
    height: 100px;
    width: 100px;
    animation-name: ${breatheAnimation};
    animation-duration: 4s;
 `;
  const inactiveWrapper = styled.div`
    display: none;
`;

  const Wrapper = active ? activeWrapper : inactiveWrapper;


  return (<>
    <Wrapper onAnimationEnd={onEnd}>{message}</Wrapper>
  </>);
};
