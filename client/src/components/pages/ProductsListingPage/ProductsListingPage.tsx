import React, { useEffect, useState } from "react";
import { ProductListTemplate } from "../../templates";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { SagaActions } from "../../../store/sagas/sagaactions";

const ProductsListingPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch({ type: SagaActions.FETCH_CATEGORIES_ASYNC });
    dispatch({ type: SagaActions.FETCH_PRODUCTS_ASYNC });
  }, []);

  return <ProductListTemplate />;
};

export default ProductsListingPage;
