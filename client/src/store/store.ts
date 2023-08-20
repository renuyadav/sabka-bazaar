import { configureStore } from "@reduxjs/toolkit";
import categoriesData from "./slices/categories.slice";
import productsData from "./slices/products.slice";
import userData from "./slices/user.slices";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: { categoriesData, productsData, userData },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga); // registers the root Saga with Store
export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
