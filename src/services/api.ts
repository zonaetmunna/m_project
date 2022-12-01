import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/types';

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v3/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
      query:()=>"/launches"
    }),
    product: builder.query<Product,string> ({
      query:(flight_number)=>`/launches/${flight_number}`
    })
  })
});

export const { useProductsQuery, useProductQuery } = api;