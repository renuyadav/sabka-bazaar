import React from "react";
import { Button } from "../../atoms";
import { Product } from "../../../types/products";
import "./CardItem.scss";

type CardItemProps = {
  product: Product;
};
const CardItem: React.FC<CardItemProps> = ({ product }) => {
  const handleClick = (pid: string) => {
    console.log("add to cart click>>" + pid);
  };
  return (
    <div className="card-item p-2">
      <h3 className="card-item__title">{product.productName}</h3>
      <div className="card-item__image-wrapper">
        <div className="image-container">
          <img
            className="image"
            src={`assets/${product.images[0]}`}
            alt={product.productName}
          />
        </div>
      </div>

      <p
        className="card-item__desc"
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></p>

      <section className="card-item__section mb-3">
        <p>${product.price}</p>
        <Button
          id={product.sku}
          handleClick={(pid: string) => handleClick(pid)}
        >
          Add to Cart
        </Button>
      </section>
    </div>
  );
};

export default CardItem;
