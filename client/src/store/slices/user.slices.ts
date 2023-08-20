import { createSlice } from "@reduxjs/toolkit";
//import { LoginFormModal} from "../../interfaces/users";

type userModal = {
  email: string;
  firstName: string;
  lastName: string;
};

interface AuthState {
  user: userModal[];
  loading: boolean;
  error: string | null;
  cart: [];
}

const initialState: AuthState = {
  user: [],
  loading: false,
  error: null,
  cart: [],
};

let userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    loginUserRequest: (store) => {
      store.loading = true;
      return store;
    },
    loginUserSuccess: (store, action) => {
      const { firstName, lastName, email } = action.payload;
      const userDeatils: userModal[] = [{ firstName, lastName, email }];
      store.loading = false;
      store.user = userDeatils;
      return store; // updated store
    },
    loginUserFailure: (store, action) => {
      store.user = [];
      store.cart = [];
      store.loading = false;
      store.error = action.payload;
      return store;
    },
  },
});

export let { loginUserSuccess, loginUserFailure, loginUserRequest } =
  userSlice.actions;
export default userSlice.reducer;
