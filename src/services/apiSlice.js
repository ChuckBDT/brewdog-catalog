import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const punkApi = createApi({
  reducerPath: 'punkApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/' }),
  endpoints: (builder) => ({
    getBeersList: builder.query({
      query: ({ page, pagin }) => ({
        url: `beers?page=${page}&per_page=${pagin}`,
        method: 'GET',
      }),
    }),
    getSpecificBeer: builder.query({
      query: (id) => ({
        url: `beers/${id}`,
        method: 'GET',
      }),
      transformResponse: (response) => response[0],
    }),
  }),
});

export const { useGetBeersListQuery, useGetSpecificBeerQuery } = punkApi;
