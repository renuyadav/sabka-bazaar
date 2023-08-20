import React from "react";
import { AuthFormsTemplate } from "../../templates";
import { AuthFormIntro, LogInForm } from "../../molecules";

const LoginPage: React.FC = () => {
  const intro = {
    heading: "Login",
    desc: "Get Access to your Orders, Wishlist and Recommendations",
  };
  return (
    <>
      <AuthFormsTemplate>
        <AuthFormIntro
          heading={intro.heading}
          description={intro.desc}
        ></AuthFormIntro>
        <LogInForm></LogInForm>
      </AuthFormsTemplate>
    </>
  );
};

export default LoginPage;
