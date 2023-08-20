import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer py-3 mt-auto">
      <div className="footer__container container">
        <p className="m-0">Copyright © 2023 My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
