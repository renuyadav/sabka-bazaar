import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { SagaActions } from "../../../store/sagas/sagaactions";
import { Carousel, CategoryCollection } from "../../organism";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch({ type: SagaActions.FETCH_CATEGORIES_ASYNC });
  }, []);
  return (
    <main className="home-page container mt-5 mb-5">
      <Carousel />
      <CategoryCollection />
    </main>
  );
};

export default HomePage;
