import React, { useState } from "react";
import { BaseLayout } from "../components/templates";
import {
  Home,
  ProductsListing,
  Register,
  Login,
  NotFound,
  Cart,
} from "../components/pages";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

type AppRoute = {
  path: string;
  element: React.ReactNode;
  protected?: boolean;
};

const AppRoutes: React.FC = () => {
  const [userLogin, setUserLogin] = useState(true);

  const routes: AppRoute[] = [
    { path: "", element: <Home /> },
    { path: "products", element: <ProductsListing /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
    { path: "cart", element: <Cart />, protected: true }, // Protected route
    { path: "*", element: <NotFound /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<BaseLayout />}>
          {routes.map((route, index) => (
            <Route
              key={route.path}
              path={route.path}
              index={index === 0} // Use index prop to indicate index routepath={route.path}
              element={
                route.protected && !userLogin ? (
                  <Navigate to="/login" />
                ) : (
                  route.element
                )
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
