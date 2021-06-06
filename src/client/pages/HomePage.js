import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestUpdateRocketStatus } from '../redux/actions';

export const HomePage = () => {
  const dispatch = useDispatch();
  const rocketIndex = 0;
  const rocketStatus = useSelector(state => state.rocket.status);
  const onAnimationEnd = () => {
    dispatch(actionRequestUpdateRocketStatus({
      index: rocketIndex,
      status: rocketStatus[rocketIndex],
    }));
  };

  return (<>
    <div
      onClick={onAnimationEnd}
    >homepage</div>
    <div>{rocketStatus[rocketIndex]}</div>
  </>);
};
