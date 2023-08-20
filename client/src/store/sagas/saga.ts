import { call, put, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios from "axios";
import { setAllCategories } from "../slices/categories.slice";
import { setAllProducts } from "../slices/products.slice";
import {
  loginUserRequest,
  loginUserFailure,
  loginUserSuccess,
} from "../slices/user.slices";
import { Category, Product } from "../../types/products";
import { LoginFormModal, SignupFormModal } from "../../interfaces/users";
import { PayloadAction } from "@reduxjs/toolkit";

type AxiosResponse = {
  data: [];
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
};

const URLS_MAPPER = {
  productURL: "http://localhost:3500/products",
  categoryURL: "http://localhost:3501/categories",
  loginURL: "http://localhost:3502/users",
};

//This function will make api call's to server
function getData<T>(url: string) {
  return axios.get<T>(url);
}

function* fetchCategoriesAsync() {
  try {
    let response: AxiosResponse = yield call(
      getData<Category[]>,
      URLS_MAPPER.categoryURL,
    );
    yield put(setAllCategories(response.data)); // dispatching the action to reducer
  } catch (error) {
    console.log("Failed !");
  }
}

function* fetchProductsAsync() {
  try {
    let response: AxiosResponse = yield call(
      getData<Product[]>,
      URLS_MAPPER.productURL,
    );
    yield put(setAllProducts(response.data)); // dispatching the action to reducer
  } catch (error) {
    console.log("Failed !");
  }
}

function* loginUserAsync(action: PayloadAction<LoginFormModal>) {
  try {
    yield put(loginUserRequest());
    let response: AxiosResponse = yield call(
      getData<LoginFormModal>,
      URLS_MAPPER.loginURL,
    );

    //for temporary this needs to be handled at server end
    let userExist = response.data.find((user: any) => {
      if (
        user.email === action.payload.email &&
        user.password === action.payload.password
      ) {
        return true;
      }
    });
    //
    if (userExist) {
      yield put(loginUserSuccess(userExist)); // dispatching the action to reducer
    } else {
      yield put(
        loginUserFailure("User does not exist, please register yourself"),
      );
    }
  } catch (error) {
    console.log("Failed !");
    yield put(loginUserFailure("Error"));
  }
}

export function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_CATEGORIES_ASYNC, fetchCategoriesAsync);
  yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProductsAsync);
  yield takeLatest(SagaActions.LOGIN_USER_REQUEST, loginUserAsync);
}
