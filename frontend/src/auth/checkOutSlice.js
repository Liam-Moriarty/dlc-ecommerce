import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientId: "",
  productId: "",
  product: "",
  description: "",
  category: "",
  price: "",
  quantity: "",
  priceAtSale: "",
  total: "",
  paymentMethod: "",
  statusOrder: "",
  saleDate: "",
};

const checkOutItems = createSlice({
  name: "checkoutItems",
  initialState,
  reducers: {
    checkoutItem: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
