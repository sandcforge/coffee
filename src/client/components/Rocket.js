import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Rocket_ = (props) => {
  const {
    message, // Banner message
    active = false,  // 0->1: Start the animation; 0->1: Hide the Rocket
    onEnd,   // The event at the end of animation
    color = 'red', // Rocket color
    iterations = 5,
    fightDuration = 10, // The time of fight per iteration, unit: sec.
  } = props;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const PlaneImageWidth = 100;
  const RocketContainerHeight = 100;
  const LowerHeightPerIteration = 200;
  const getRatio = w => windowWidth / (w + windowWidth);
  const slideIn = (props) => keyframes`
    0% { top: ${300 + props.index * LowerHeightPerIteration}px; left: ${-props.RocketContainerWidth}px; }
    100% { top: ${300 + (1 + props.index) * LowerHeightPerIteration}px; left: ${windowWidth}px;}`;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    top: ${props => 300 + props.index * 100}px;
    left: ${props => -props.RocketContainerWidth}px;
    position: absolute;
    height: ${RocketContainerHeight}px;
    width: ${props => props.RocketContainerWidth}px;
    animation-name: ${props => slideIn(props)};
    animation-duration: ${fightDuration}s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-delay: ${props => fightDuration * props.index * getRatio(props.RocketContainerWidth)}s;
 `;

  const Plane = styled.img`
    display: flex; 
    width: ${PlaneImageWidth}px;
    height: ${RocketContainerHeight}px;
  `;
  const Banner = styled.div`
    color: ${color};
    display: flex;
    white-space:pre-wrap;
    flex-wrap: nowrap;
    font-size: 25px;
  `;

  const DummyBanner = styled.div`
  color: ${color};
  visibility: hidden;
  white-space:pre-wrap;
  flex-wrap: nowrap;
  font-size: 25px;
`;

  const bannerRef = useRef(null);
  const [rocketContainerWidth, setRocketContainerWidth] = useState(300);

  useEffect(() => {
    if (bannerRef.current) {
      const bannerWidth = bannerRef.current.offsetWidth;
      setRocketContainerWidth(bannerWidth + PlaneImageWidth);
    }
  }, [active]);

  return active && (<>
    {/* This DummyBanner is to calculate the width of banner inside Wrapper */}
    <DummyBanner ref={bannerRef}>{message}</DummyBanner>
    {Array.from(Array(iterations).keys()).map(i =>
      <Wrapper
        RocketContainerWidth={rocketContainerWidth}
        key={i}
        index={i}
        onAnimationEnd={i == iterations - 1 ? onEnd : undefined}
      >
        <Banner>{message}</Banner>
        <Plane src="https://i.pinimg.com/originals/5a/65/ee/5a65ee278cd557143f05a4ba91abbfa8.gif" />
      </Wrapper>
    )}
  </>);
};

export const Rocket = React.memo(Rocket_, (current, next) => current.active == next.active);
