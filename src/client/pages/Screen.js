import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { actionRequestUpdateRocketStatus } from '../redux/actions';
import { Rocket } from '../components/Rocket';

export const Screen = (props) => {
  const { index: screenIndex } = props
  const dispatch = useDispatch();
  const rocketIndex = 0;
  const rocketStatus = useSelector(state => state.rocket.status);
  const rocketMessage = useSelector(state => state.rocket.message[rocketIndex]);
  const requestUpdateRocketStatus = () => {
    dispatch(actionRequestUpdateRocketStatus({
      index: rocketIndex,
    }));
  };

  useEffect(() => {
    if (rocketStatus[rocketIndex] === screenIndex) {
      console.log('start animation', rocketStatus[rocketIndex]);
    }
  }, [rocketStatus[rocketIndex]]);


  return (<>
    <div
      onClick={requestUpdateRocketStatus}
    >homepage</div>
    <div>{rocketStatus[rocketIndex]}</div>
    <div>{rocketStatus[rocketIndex] === screenIndex ? 'start' : 'over'}</div>
    <Rocket
      active={rocketStatus[rocketIndex] === screenIndex}
      onEnd={requestUpdateRocketStatus}
      message={rocketMessage} />
  </>);
};

Screen.propTypes = {
  index: PropTypes.number.isRequired,
};