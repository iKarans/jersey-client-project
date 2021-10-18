import React from "react";

const NetworkItem = (props) => {
  const { name, summary, created, importance } = props;

  return (
    <div className="network-item">
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
