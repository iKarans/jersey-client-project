import React from "react";
import "./Button.scss"

const Button = (props) => {
  const { text, toggleModal, buttonRisk} = props;

  let button = "button";

  buttonRisk ? (button += "--secondary") : (button += "--danger")

  return (
    <button onClick={toggleModal} className={button}>
      {text}
    </button>
  );
};

export default Button;
