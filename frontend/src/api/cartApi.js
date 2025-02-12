import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/cart/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().loginForm.token; // Access token from Redux state
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["Cart"],
  baseQuery,
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "add-cart",
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeToCart: builder.mutation({
      query: (productId) => ({
        url: "remove-items",
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query({
      query: () => "cart-items",
      providesTags: ["Cart"],
    }),
    getProductById: builder.query({
      query: (id) => `cart-items/${id}`,
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveToCartMutation,
  useGetCartQuery,
  useGetProductByIdQuery,
} = cartApi;
