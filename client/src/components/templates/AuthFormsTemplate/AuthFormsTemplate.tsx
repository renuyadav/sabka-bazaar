import React, { PropsWithChildren } from "react";
import "./AuthFormsTemplate.scss";

const AuthFormsTemplate: React.FC<PropsWithChildren> = (
  props: PropsWithChildren,
) => {
  return (
    <main className="auth-forms container mt-3 mb-3 d-flex flex-row">
      {props.children}
    </main>
  );
};

export default AuthFormsTemplate;
