import React, { useState } from "react";
import { Category } from "../../../types/products";
import { AppState } from "../../../store/store";
import { useSelector } from "react-redux";

type CategoryDropDownProps = {
  primaryCategories: Category[];
  selectCategory: (id: string) => void;
};

const CategoryDropDown: React.FC<CategoryDropDownProps> = ({
  primaryCategories,
  selectCategory,
}) => {
  const { selectedCategory } = useSelector(
    (store: AppState) => store.categoriesData,
  );

  return (
    <select
      value={selectedCategory}
      className="mobile-categories custom-select custom-select-lg mt-3 mb-3 p-2"
      onChange={(evt) => selectCategory(evt.target.value)}
    >
      {primaryCategories.map((category) => (
        <option key={category.categoryID} value={category.categoryID}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropDown;
