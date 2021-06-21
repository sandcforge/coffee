import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { actionRequestUpdateRocketStatus } from '../redux/actions';
import { Rocket } from '../components/Rocket';

const Wrapper = styled.div`
  overflow: hidden;
`;

export const Screen = (props) => {
  const { index: screenIndex } = props
  const dispatch = useDispatch();
  const rocketStatus = useSelector(state => state.rocket.status);
  const rocketMessage = useSelector(state => state.rocket.message);
  const requestUpdateRocketStatus = (index) => {
    dispatch(actionRequestUpdateRocketStatus({
      index,
    }));
  };

  return (<Wrapper>
    <Rocket
      active={rocketStatus[0] === 0}
      message={rocketMessage[0]}
      onEnd={() => requestUpdateRocketStatus(0)}
    />
    <Rocket
      active={rocketStatus[1] === 0}
      message={rocketMessage[1]}
      onEnd={() => requestUpdateRocketStatus(1)}
    />
    <Rocket
      active={rocketStatus[2] === 0}
      message={rocketMessage[2]}
      onEnd={() => requestUpdateRocketStatus(2)}
    />
  </Wrapper>);
};

Screen.propTypes = {
  index: PropTypes.number.isRequired,
};