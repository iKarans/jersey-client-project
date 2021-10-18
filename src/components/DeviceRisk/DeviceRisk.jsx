import React from "react";

const DeviceRisk = (props) => {
  const { title, message } = props;

  //if device safe -> return
  //if device medium ->
  return (
    <div>
      <h1>{title}</h1>
      <h3>{message}</h3>
      <button></button>
    </div>
  );
};

export default DeviceRisk;
