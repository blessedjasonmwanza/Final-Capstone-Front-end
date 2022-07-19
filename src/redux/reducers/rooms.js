/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
// slice
const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
  },
  reducers: {
    loadInitialData: (state, action) => {
      state.rooms = action.payload;
    },
    updateStatus: (state, action) => {
      const updated_rooms = state.rooms.map((room) => (room.room_id === action.payload ? ({ ...room, status: 'booked' }) : room));
      state.rooms = updated_rooms;
    }
  },
});

export default roomsSlice.reducer;

// Actions
export const {
  loadInitialData, updateStatus, //add methods added in reducers object above
} = roomsSlice.actions;