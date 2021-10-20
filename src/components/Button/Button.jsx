import React from "react";

const Button = (props) => {
  const { text, toggleModal } = props;
  return (
    <button onClick={toggleModal} className="button">
      {text}
    </button>
  );
};

export default Button;
