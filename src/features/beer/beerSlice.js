import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    updateBeer: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { updateBeer } = beerSlice.actions;

export default beerSlice.reducer;
