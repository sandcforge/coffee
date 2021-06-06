import { createReducer } from '@reduxjs/toolkit';

import { APP_CONST, UI_CONST } from '../constants.js';
import {
  actionUpdateStatus,
} from './actions.js';

const initialState = {
  status: {},
};


export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionUpdateStatus, (state, action) => {
      state.status = action.payload;
    });
});