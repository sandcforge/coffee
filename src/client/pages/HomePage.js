import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WebSocketContext } from '../context/socket';

export const HomePage = () => {
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);

  return (<>
    <div
      onClick={() => ws.sendMessage({screen0:0})}
    >homepage</div>
  </>);
};
