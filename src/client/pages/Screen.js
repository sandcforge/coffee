import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import { actionLoadRocketStatus, actionRequestUpdateRocketStatus } from '../redux/actions';
import { Rocket } from '../components/Rocket';

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

  return (<>
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
  </>);
};

Screen.propTypes = {
  index: PropTypes.number.isRequired,
};