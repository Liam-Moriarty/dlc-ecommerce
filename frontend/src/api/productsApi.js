import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getPaginatedProducts: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `paginated-products?page=${page}&limit=${limit}`,
      providesTags: ["Products"],
    }),
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetPaginatedProductsQuery } =
  productsApi;
