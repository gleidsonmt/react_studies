import React from "react";

const Button = (props) => {
  return <button onClick={props.meuEvento}>{props.text}</button>;
};

export default Button;
