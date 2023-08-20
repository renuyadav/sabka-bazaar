import React from "react";

type IconProps = {
  color: string;
  classes: string;
};

const Icon: React.FC<IconProps> = (props) => {
  return <i className={props.classes} style={{ color: props.color }}></i>;
};

export default Icon;
