import React from "react";

import "./NetworkItem.scss"

const NetworkItem = (props) => {
  const { name, summary, created, importanceLevel, index } = props;

  let importanceLevelStyle;
  if(importanceLevel == "High") {
    importanceLevelStyle = {color: "rgba(243, 86, 114, 1)"}
  }else {
    importanceLevelStyle = {color: "rgba(115, 120, 134, 1)"}
  }

  let className;
  if(index % 2 == 0) {
    className = "network-item dark"
  } else {
    className = "network-item light"
  }

  return (
    <div className={className} >
      <h5 className="network-item__name">{name}</h5>
      <p className="network-item__paragraph summary">{summary}</p>
      <p className="network-item__paragraph created">{created}</p>
      <h5 className="network-item__importance" style={importanceLevelStyle}>{importanceLevel}</h5>
      <div className="network-item__option">
        <div className="network-item__option-dot"></div>
        <div className="network-item__option-dot"></div>
        <div className="network-item__option-dot"></div>
      </div>
    </div>
  );
};

export default NetworkItem;
