import React from "react";

import "./NetworkItem.scss"

const NetworkItem = (props) => {
  const { name, summary, created, importance, index } = props;

  let className;
  if(index % 2 == 0) {
    className = "network-item dark"
  } else {
    className = "network-item light"
  }

  return (
    <div className={className} >
      <h5 className="network-item__name">{name}</h5>
      <p className="network-item__parapgraph summary">{summary}</p>
      <p className="network-item__parapgraph created">{created}</p>
      <h5 className="network-item__importance">{importance}</h5>
      <div className="network-item__option">
        <div className="network-item__option-dot"></div>
        <div className="network-item__option-dot"></div>
        <div className="network-item__option-dot"></div>
      </div>
    </div>
  );
};

export default NetworkItem;
