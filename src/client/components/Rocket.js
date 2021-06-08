import React from 'react';
import styled, { keyframes } from 'styled-components';

const Rocket_ = (props) => {
  const {
    message, // Banner message
    active = false,  // 0->1: Start the animation; 0->1: Hide the Rocket
    onEnd,   // The event at the end of animation
    color = 'red', // Rocket color
    iterations = 5,
    fightDuration = 4, // The time of fight per iteration, unit: sec.
  } = props;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const RocketContainerHeight = 50;
  const RocketContainerWidth = 300;
  const ratio = windowWidth / (windowWidth + RocketContainerWidth);
  const slideIn = (i) => keyframes`
    0% { top: ${300 + i * 100}px; left: ${-RocketContainerWidth}px; }
    100% { top: ${400 + i * 100}px; left: ${windowWidth}px;}`;

  const Wrapper = styled.div`
    background-color: ${color};
    top: ${props => 300 + props.index * 100}px;
    left: ${-RocketContainerWidth}px;
    position: absolute;
    height: ${RocketContainerHeight}px;
    width: ${RocketContainerWidth}px;
    animation-name: ${props => slideIn(props.index)};
    animation-duration: ${fightDuration}s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-delay: ${props => fightDuration * props.index * ratio}s;
 `;

  return active && (<>
    {Array.from(Array(iterations).keys()).map(i =>
      <Wrapper
        key={i}
        index={i}
        onAnimationEnd={i == iterations - 1 ? onEnd : undefined}
      >
        {message}
      </Wrapper>
    )}
  </>);
};

export const Rocket = React.memo(Rocket_, (current, next) => current.active == next.active);
