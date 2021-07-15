import { createReducer } from '@reduxjs/toolkit';
import {
  actionUpdateRocketStatus,
  actionSetApiLoading,
  actionLaunchRocket,
} from './actions.js';

const initialState = {
  rocket: {
    status: [-1, -1, -1],
    message: ['', '', ''],
  },
  ui: {
    isApiLoading: false,
  }
};


export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetApiLoading, (state, action) => {
      state.ui.isApiLoading = action.payload;
    })
    .addCase(actionUpdateRocketStatus, (state, action) => {
      const { index } = action.payload;
      state.rocket.status[index] = -1;
      state.rocket.message[index] = '';

    })
    .addCase(actionLaunchRocket, (state, action) => {
      const validIndex = state.rocket.status.findIndex(i => i == -1);
      if (validIndex !== -1) {
        state.rocket.status[validIndex] = 0;
        state.rocket.message[validIndex] = action.payload;
      }
    });


});