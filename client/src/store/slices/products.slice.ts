import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/products";

let initialState: Product[] = [];

let productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    setAllProducts: (store: Product[], action: PayloadAction<Product[]>) => {
      store = action.payload;
      return store;
    },
  },
});

export let { setAllProducts } = productsSlice.actions; // action creators
export default productsSlice.reducer;
