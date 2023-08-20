import React from "react";
import { AuthFormIntro, RegisterationForm } from "../../molecules";
import { AuthFormsTemplate } from "../../templates";

const RegisterPage: React.FC = () => {
  const intro = {
    heading: "Signup",
    desc: "Get Access to your Orders, Wishlist and Recommendations",
  };
  return (
    <>
      <AuthFormsTemplate>
        <AuthFormIntro
          heading={intro.heading}
          description={intro.desc}
        ></AuthFormIntro>
        <RegisterationForm />
      </AuthFormsTemplate>
    </>
  );
};

export default RegisterPage;
