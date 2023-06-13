import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '../features/catalog/catalogSlice';
import beerReducer from '../features/beer/beerSlice';
import { punkApi } from '../services/apiSlice';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    beer: beerReducer,
    [punkApi.reducerPath]: punkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(punkApi.middleware),
});

export default store;
