import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addBeer: (state, action) => {
      action.payload.forEach((beer) => {
        !state.find((obj) => obj.id === beer.id) && state.push(beer);
      });
    },
  },
});

export const { addBeer } = catalogSlice.actions;

export default catalogSlice.reducer;
