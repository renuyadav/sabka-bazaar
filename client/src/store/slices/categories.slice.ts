import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types/products";

type CategoryState = {
  loading: boolean;
  error: any | null;
  categories: Category[];
  selectedCategory: string;
};

const initialState: CategoryState = {
  loading: false,
  error: null,
  categories: [],
  selectedCategory: "",
};
let categoriesSlice = createSlice({
  initialState,
  name: "categories",
  reducers: {
    setAllCategories: (
      store: CategoryState,
      action: PayloadAction<Category[]>,
    ) => {
      store.categories = action.payload;
      return store;
    },
    setSelectedCategory: (
      store: CategoryState,
      action: PayloadAction<string>,
    ) => {
      console.log("selectedCategory>>>" + action.payload);
      store.selectedCategory = action.payload;
      return store;
    },
  },
});

export let { setAllCategories, setSelectedCategory } = categoriesSlice.actions; // action creators
export default categoriesSlice.reducer;
