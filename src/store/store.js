import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '../features/catalog/catalogSlice';
import { punkApi } from '../services/apiSlice';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    [punkApi.reducerPath]: punkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(punkApi.middleware),
});

export default store;
