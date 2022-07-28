import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../features/rooms/roomsState';

const store = configureStore({
  reducer: {
    roomList: roomsReducer,
  },
});

export default store;
