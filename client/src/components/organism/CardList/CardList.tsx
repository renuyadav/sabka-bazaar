import React, { useEffect } from "react";
import { Product } from "../../../types/products";
import { ContentCard } from "../../molecules";
import { useSelector, useDispatch } from "react-redux";
import { AppState, AppDispatch } from "../../../store/store";

const CardList: React.FC = () => {
  const { selectedCategory } = useSelector(
    (store: AppState) => store.categoriesData,
  );

  const productsList = useSelector((store: AppState) => store.productsData);

  const products = productsList.filter((product) => {
    return product.categories.find((item) => item === selectedCategory);
  });

  return (
    <div className="card-list p-3">
      {products?.map((product) => (
        <ContentCard key={product.sku} product={product} />
      ))}
    </div>
  );
};

export default CardList;
