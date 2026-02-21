import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
    }),
    
   

  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
