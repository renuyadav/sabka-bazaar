import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { CategoryGrid } from "../../molecules";

const CategoryCollection: React.FC = () => {
  const { categories, selectedCategory } = useSelector(
    (store: AppState) => store.categoriesData,
  );

  const primaryCategories = categories.filter(
    (category) => category.children.length > 0,
  );

  return (
    <>
      {primaryCategories?.map((category, index) => (
        <CategoryGrid
          position={index % 2 === 0 ? "left" : "right"}
          key={category.categoryID}
          category={category}
        />
      ))}
    </>
  );
};

export default CategoryCollection;
