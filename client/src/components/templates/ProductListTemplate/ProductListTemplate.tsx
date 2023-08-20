import React from "react";
import { ProductListProps } from "../../../types/products";
import { SideBar, ContentList } from "../../organism";
import "./ProductList.scss";

const ProductListTemplate: React.FC = () => {
  return (
    <main className="container product-listing">
      <SideBar />
      <ContentList />
    </main>
  );
};

export default ProductListTemplate;
