import React from "react";
import { Category } from "../../../types/products";
import { Button } from "../../atoms";
import "./CategoryGrid.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedCategory } from "../../../store/slices/categories.slice";

type CategoryGridProps = {
  category: Category;
  position: string;
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ category, position }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (categoryID: string) => {
    dispatch(setSelectedCategory(categoryID));
    navigate("/products");
  };

  return (
    <section className="grid-item container pt-4 pb-4">
      <div className={`grid-item__image ${position}`}>
        <div className="image-wrapper">
          <img src={`assets/${category.image}`} alt={category.name} />
        </div>
      </div>
      <div className="grid-item__content content">
        <h2 className="content__header">{category.name}</h2>
        <p className="content__text">{category.description}</p>
        <Button
          id={category.categoryID}
          handleClick={(categoryID: string) => handleClick(categoryID)}
        >
          Explore
        </Button>
      </div>
    </section>
  );
};

export default CategoryGrid;
