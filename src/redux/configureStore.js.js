/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rooms from './reducers/rooms';

export const reducer = combineReducers({
  // reducers go here
  rooms,
});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;