import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
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
        url: "cart/add-cart",
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeToCart: builder.mutation({
      query: (productId) => ({
        url: "cart/remove-items",
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query({
      query: () => "cart/cart-items",
      providesTags: ["Cart"],
    }),
    getProductById: builder.query({
      query: (id) => `cart/cart-items/${id}`,
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
