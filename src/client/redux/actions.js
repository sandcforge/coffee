import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const actionSetApiLoading = createAction('SetApiLoading');
export const actionLoadRocketStatus = createAction('LoadRocketStatus');



const asyncActionHelper = (func) => {
  return async (arg, thunkApi) => {
    try {
      thunkApi.dispatch(actionSetApiLoading(true));
      const ret = await func(arg, thunkApi);
      thunkApi.dispatch(actionSetApiLoading(false));
      return ret;
    } catch (err) {
      thunkApi.dispatch(actionSetApiLoading(false));
      console.log(err);
      throw err;
    }
  };
};

export const actionRequestUpdateRocketStatus = createAsyncThunk(
  'RequestUpdateRocketStatus',
  asyncActionHelper(async (arg, thunkApi) => {
    const result = await axios.post('/api/requpdate', arg);
    return result.data;
  })
);
