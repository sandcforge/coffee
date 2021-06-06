import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { APP_CONST, UI_CONST } from '../constants.js';



export const actionUpdateStatus = createAction('UpdateStatus');

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

export const actionGetProductCategory = createAsyncThunk(
  'GetProductCategor',
  asyncActionHelper(async (arg, thunkApi) => {
    const result = await axios.post('/api/proxy', { method: 'GET', url: APP_CONST.GOODS_CATEGORY_EP });
    return result.data.Data;
  })
);
