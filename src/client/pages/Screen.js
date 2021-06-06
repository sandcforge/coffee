import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { actionRequestUpdateRocketStatus } from '../redux/actions';

export const Screen = (props) => {
  const {index: screenIndex} = props
  const dispatch = useDispatch();
  const rocketIndex = 0;
  const rocketStatus = useSelector(state => state.rocket.status);
  const onAnimationEnd = () => {
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
      onClick={onAnimationEnd}
    >homepage</div>
    <div>{rocketStatus[rocketIndex]}</div>
    <div>{rocketStatus[rocketIndex] === screenIndex ? 'start': 'over'}</div>
  </>);
};

Screen.propTypes = {
  index: PropTypes.number.isRequired,
};