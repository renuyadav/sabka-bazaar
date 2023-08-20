import React, { useEffect, useRef } from "react";
import { Category } from "../../../types/products";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";

type CategoryListProps = {
  primaryCategories: Category[];
  selectCategory: (id: string) => void;
};

const CategoryList: React.FC<CategoryListProps> = ({
  primaryCategories,
  selectCategory,
}) => {
  const { selectedCategory } = useSelector(
    (store: AppState) => store.categoriesData,
  );
  return (
    <ul className="desktop-categories p-0">
      {primaryCategories.map((category, index) => (
        <li
          className={`${
            category.categoryID === selectedCategory ? "selected" : ""
          }`}
          key={category.categoryID}
          onClick={() => selectCategory(category.categoryID)}
        >
          {category.name}{" "}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
