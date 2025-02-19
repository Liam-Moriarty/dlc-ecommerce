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

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  tagTypes: ["Transaction"],
  baseQuery,
  endpoints: (builder) => ({
    sendCheckout: builder.mutation({
      query: (checkout) => ({
        url: "orders/create-order",
        method: "POST",
        body: checkout,
      }),
      invalidatesTags: ["Transaction"],
    }),
    getClientOrders: builder.query({
      query: () => "orders/get-orders",
      providesTags: ["Transaction"],
    }),
  }),
});

export const { useSendCheckoutMutation, useGetClientOrdersQuery } =
  transactionApi;
