/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://127.0.0.1:3000/api/v1/rooms'

export const getRooms = createAsyncThunk (
'photos/getRooms',
async () => {
const response = await fetch(URL);
const data = await response.json();
return data;
}

);

export const roomsSlice= createSlice({
name: 'gallery',
initialState: {
	items: [],
	isLoading: false

},
extraReducers:{
[getRooms.pending]: (state) => {
	state.isLoading = true;
},

[getRooms.fulfilled]: (state, action) =>{
	state.items = action.payload;
	state.isLoading = false;
},

[getRooms.rejected]: (state) => {
	state.isLoading = false
}

}

});

export default roomsSlice.reducer
