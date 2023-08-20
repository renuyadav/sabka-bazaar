import React, { useEffect } from "react";
import { Category } from "../../../types/products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store/store";
import { SagaActions } from "../../../store/sagas/sagaactions";
import { setSelectedCategory } from "../../../store/slices/categories.slice";
import { CategoryList } from "../CategoryList";
import { CategoryDropDown } from "../CategoryDropDown";
import "./SideBar.scss";

type SideBarProps = {
  categories: Category[];
};

const SideBar: React.FC = () => {
  const { categories, selectedCategory } = useSelector(
    (store: AppState) => store.categoriesData,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (selectedCategory === "" && primaryCategories.length > 0) {
      dispatch(setSelectedCategory(primaryCategories[0].categoryID));
    } else {
      dispatch(setSelectedCategory(selectedCategory));
    }
  }, [selectedCategory, categories]);

  const primaryCategories = categories.filter(
    (category) => category.children.length > 0,
  );

  const handleClick = (categoryID: string) => {
    dispatch(setSelectedCategory(categoryID));
  };

  return (
    <div className="sidebar">
      <CategoryDropDown
        primaryCategories={primaryCategories}
        selectCategory={(categoryID: string) => handleClick(categoryID)}
      />
      <CategoryList
        primaryCategories={primaryCategories}
        selectCategory={(categoryID: string) => handleClick(categoryID)}
      />
    </div>
  );
};

export default SideBar;
