/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"

const ROOMS_URL = 'http://127.0.0.1:3001/api/v1/rooms'

export const getRooms = createAsyncThunk ('rooms/getRooms', async () => {
	const response = await axios.get(ROOMS_URL)
	return response.data;
})

export const addNewRoom = createAsyncThunk('rooms/addNewRoom', async (obj) => {
	const response = await axios.post(ROOMS_URL, obj);
	return response.data;
})

export const roomsSlice= createSlice({
name: 'rooms',
initialState: {
	rooms: [],
	isLoading: false

},
extraReducers:{
[getRooms.pending]: (state) => {
	state.isLoading = true;
},

[getRooms.fulfilled]: (state, action) =>{
	state.rooms = action.payload;
	state.isLoading = false;
},

[getRooms.rejected]: (state) => {
	state.isLoading = false
}

}

});

export const selectRoomById = (state, roomId) => state.rooms.rooms.find((room) => room.id === roomId);

export default roomsSlice.reducer
