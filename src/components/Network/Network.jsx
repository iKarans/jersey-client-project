import React from "react";

import NetworkItem from "../NetworkItem/NetworkItem";
import { networks } from "../../data/network.js";

import SearchIcon from "../../assets/global/search-icon.svg";
import SortIcon from "../../assets/global/sort-icon.svg";
import FilterIcon from "../../assets/devices/filterIcon.png";
import WhiteDropDown from "../../assets/global/white-dropdown.svg";

import "./Network.scss";

const Network = () => {
  const networkItemJSX = networks.map((network, index) => {
    return (
      <NetworkItem
        key={network + index}
        name={network.alertType}
        summary={network.summary}
        created={network.created}
        importanceLevel={network.importanceLevel}
      />
    );
  });
  return (
    <section className="network">
      <div className="network__search">
        <div className="network__search-box">
          <img src={SearchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Alerts"
            className="search-input"
          />
        </div>
        <div className="network__search-filter-sort">
          <div className="network-sort">
            <img src={SortIcon} alt="sort-icon" />
            <p>Sort</p>
          </div>
          <div className="network-filter">
            <img src={FilterIcon} alt="filter-icon" />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div className="network-alerts">
        <div className="network-alerts__header">
          <div className="network-alerts__header-alert">
            <h5 className="alert-header">Alert Type</h5>
            <img src={WhiteDropDown} alt="dropdown" />
          </div>
          <div className="network-alerts__header-summary">
            <h5 className="alert-header">Sumary</h5>
          </div>
          <div className="network-alerts__header-created">
            <h5 className="alert-header">Created</h5>
            <img src={WhiteDropDown} alt="dropdown" />
          </div>
          <div className="network-alerts__header-importance">
            <h5 className="alert-header">Importance Level</h5>
            <img src={WhiteDropDown} alt="dropdown" />
          </div>
        </div>
        <div className="network-alerts__alerts">{networkItemJSX}</div>
        <div className="network-alerts__pages"></div>
      </div>
    </section>
  );
};

export default Network;
