import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'listCars',
  initialState: [],
  reducers: {
    //
  },
});

export const carsReducer = carsSlice.reducer;
