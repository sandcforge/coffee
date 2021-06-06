import { createReducer } from '@reduxjs/toolkit';
import {
  actionLoadRocketStatus,
  actionSetApiLoading,
} from './actions.js';

const initialState = {
  rocket: {
    status: [-1, -1, -1, -1, -1],
    message: ['', '', '', '', ''],
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
    .addCase(actionLoadRocketStatus, (state, action) => {
      state.rocket = action.payload;
    });
});