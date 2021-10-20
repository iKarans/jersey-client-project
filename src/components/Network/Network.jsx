import React, {useState, useEffect} from "react";

import NetworkItem from "../NetworkItem/NetworkItem";
import ChatButton from "../ChatButton/ChatButton";
import NetworkFilter from "./NetworkFilter/NetworkFilter";
import { networks } from "../../data/network.js";

import SearchIcon from "../../assets/global/search-icon.svg";
import SortIcon from "../../assets/global/sort-icon.svg";
import FilterIcon from "../../assets/devices/filterIcon.png";
import WhiteDropDown from "../../assets/global/white-dropdown.svg";
import NetworkArrow from "../../assets/network/network-arrow.svg"

import "./Network.scss";

const Network = () => {

  let firstItem = 0;
  let lastItem = 9;

  const [pages, setPages] = useState(0);

  const handleDecrement = () => {
    if(pages > 0) {
      setPages(pages - 1)
      firstItem -= 9;
      lastItem -= 9;
    }
  }

  const handleIncrement = () => {
    if(pages >= 0 && pages < networks.length) {
      setPages(pages + 1)
      firstItem += 9;
      lastItem += 9;
    }
  }

  let networkItemJSX = [];

  const getNetworkItems = () =>{
    const currentNetworkItems = networks.slice(firstItem, lastItem);
    networkItemJSX = currentNetworkItems.map((network, index) => {
      return (
        <NetworkItem
        key={network + index}
        name={network.alertType}
        summary={network.summary}
        created={network.created}
        importanceLevel={network.importanceLevel}
        index={index}
        />
      )
    })
  }     
  
  getNetworkItems();

  useEffect(() => {
    getNetworkItems();
  }, [], [pages])
    
  console.log(networkItemJSX)
  return (
    <>
    <NetworkFilter />
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
        <div className="network-alerts__pages">
          {networks.length > 9 && <div className="network-alerts__pages-buttons">
            <button className="network-alerts__pages-buttons-button"  onClick={handleDecrement}><img src={NetworkArrow} alt="left-arrow" className="network__left-arrow"/></button>

            <button className="network-alerts__pages-buttons-button"  onClick={handleIncrement}><img src={NetworkArrow} alt="right-arrow" className="network__right-arrow"/></button>
          </div>}
        </div>
      </div>
      <ChatButton />
    </section>
    </>
  );
};

export default Network;
