import React from "react";
import { Header, Footer } from "../../organism";
import { Outlet } from "react-router-dom";
import './BaseLayout.scss'

const BaseLayoutTemplate: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header></Header>
      <Outlet /> {/* This will render the matched child route */}
      <Footer></Footer>
    </div>
  );
};

export default BaseLayoutTemplate;
