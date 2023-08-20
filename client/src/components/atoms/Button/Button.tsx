import React, { PropsWithChildren } from "react";
import "./Button.scss";

type ButtonProps = {
  id?: string;
  handleClick?: (id: string) => void;
};
const Button = (props: PropsWithChildren<ButtonProps>) => {
  const handleButtonClick = () => {
    if (props.handleClick && props.id) {
      props.handleClick(props.id);
    }
  };
  return (
    <button id={props.id} className="btn-custom" onClick={handleButtonClick}>
      {props.children}
    </button>
  );
};

export default Button;
