import React from "react";

type AuthFormIntroProps = {
  heading: string;
  description?: string;
};
const AuthFormIntro: React.FC<AuthFormIntroProps> = ({
  heading,
  description,
}) => {
  return (
    <section className="p-2 flex-fill">
      <h2>{heading}</h2>
      <p>{description}</p>
    </section>
  );
};

export default AuthFormIntro;
