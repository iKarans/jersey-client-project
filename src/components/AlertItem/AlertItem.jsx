import React from "react";

import "./AlertItem.scss"

const AlertItem = (props) => {
  const { name, summary, created, importanceLevel, index } = props;

  let importanceClassName;

  if(importanceLevel === "High") {
    importanceClassName = "alert-item__importance high";
  }else {
    importanceClassName = "alert-item__importance low";
  }

  let className;
  if(index % 2 === 0) {
    className = "alert-item dark"
  } else {
    className = "alert-item light"
  }

  return (
    <div className={className} >
      <h5 className="alert-item__name">{name}</h5>
      <p className="alert-item__paragraph summary">{summary}</p>
      <p className="alert-item__paragraph created">{created}</p>
      <h5 className={importanceClassName}>{importanceLevel}</h5>
      <div className="alert-item__option">
        <div className="alert-item__option-dot"></div>
        <div className="alert-item__option-dot"></div>
        <div className="alert-item__option-dot"></div>
      </div>
    </div>
  );
};

export default AlertItem;
