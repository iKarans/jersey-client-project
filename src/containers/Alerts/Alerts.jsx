import React, { useState, useEffect } from "react";
// import { isDeviceChecked } from "./NetworkFunctions";
import NetworkItem from "../../components/NetworkItem/NetworkItem";
import ChatButton from "../../components/ChatButton/ChatButton";
import NetworkPageButton from "../../components/NetworkPageButton/NetworkPageButton";
import { networks } from "../../data/network.js";
import {
  handleChangeDevice,
  handleChangeHighRisk,
  handleChangeLoggedOn,
  handleChangeOutage,
  checkListArray,
} from "./NetworkFunctions";

import SearchIcon from "../../assets/global/search-icon.svg";
import SortIcon from "../../assets/global/sort-icon.svg";
import FilterIcon from "../../assets/devices/filterIcon.png";
import WhiteDropDown from "../../assets/global/white-dropdown.svg";
import NetworkArrow from "../../assets/network/network-arrow.svg";

import "./Network.scss";
import NetworkFilter from "../../components/NetworkFilter/NetworkFilter";

const Network = () => {
  const [pages, setPages] = useState(0);
  const [splitNetworkArrays] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);

  const handleDecrement = () => {
    if (pages > 0) {
      setPages(pages - 1);
    }
  };

  const handleIncrement = () => {
    if (pages >= 0 && pages < networks.length / 9 - 1) {
      setPages(pages + 1);
    }
  };
  const networksArray = [...networks];

    /// Karans Messing around
    const [filtersArray, setFiltersArray] = useState([])
    const handleFilterCheckbox = (event) => {
      let tempArr = [...filtersArray];
      if(tempArr.includes(event.target.id)) {
        tempArr.splice(tempArr.indexOf(event.target.id), 1);
      } else {
        tempArr.push(event.target.id);
      }
      setFiltersArray(tempArr);
    }
    // importance Level
    const [isLowImportance, setLowImportanceLevel] = useState(false);
    const [isHighImportance, setHighImportanceLevel] = useState(false);
    const handleIsLowImportance = () => {
      setLowImportanceLevel(!isLowImportance);
    }
    const handleIsHighImportance = () => {
      setHighImportanceLevel(!isHighImportance);
    }

    const [isLessHour, setIsLessHour] = useState(false);
    const [isLessThreeHour, setIsLessThreeHour] = useState(false);
    const handleIsLessHour = () => {
      setIsLessHour(!isLessHour);
    }
    const handleIsLessThreeHour = () => {
      setIsLessThreeHour(!isLessThreeHour);
    }

  const shouldReturn = (network) => {
    // currentFilters.forEach(filter => {
    //   if(network.alertType.includes(filter)) {
    //     console.log("check");
    //     return true;
    //   }
    // })
    for (let i = 0; i < filtersArray.length; i++) {
      if (network.alertType.includes(filtersArray[i])) {
        return true;
      }
    }
    return false;
  };

  const networksArrayFilteredBySubHour = networksArray
    .filter((network) => {
      return shouldReturn(network) && (isLowImportance ? network.importanceID == 1 : true) && (isHighImportance ? network.importanceID == 2 : true) && (isLessHour ? network.createdTime <= 60 : true) && (isLessThreeHour ? network.createdTime > 60 : true)
    })
    .sort((a, b) => a.createdTime - b.createdTime);
  
    console.log(networksArrayFilteredBySubHour);

  while (networksArray.length > 0) {
    splitNetworkArrays.push(networksArray.splice(0, 9));
  }

  const networkItemJSX = splitNetworkArrays[pages].map((network, index) => {
    return (
      <NetworkItem
        key={network + index}
        name={network.alertType}
        summary={network.summary}
        created={network.created}
        importanceLevel={network.importanceLevel}
        index={index}
      />
    );
  });

  const buttonNumbers = [];

  const generateButtonIndex = () => {
    for (let i = 0; i < networks.length / 9; i++) {
      buttonNumbers.push(i);
    }
  };
  const toggleFilterBox = () => {
    setFilterStatus(!filterStatus);
  };

  generateButtonIndex();

  const buttonJSX = buttonNumbers.map((buttonNumber, index) => {
    return (
      <NetworkPageButton
        key={buttonNumber + index}
        index={index + 1}
        setPages={setPages}
        pages={pages}
      />
    );
  });

  return (
    <>
      <section className="network">
        <NetworkFilter
          // onclick={toggleFilterBox}
          // handleChangeDevice={handleChangeDevice}
          // handleChangeHighRisk={handleChangeHighRisk}
          // handleChangeLoggedOn={handleChangeLoggedOn}
          // handleChangeOutage={handleChangeOutage}
          handleFilterCheckbox={handleFilterCheckbox}
          handleIsLowImportance={handleIsLowImportance}
          handleIsHighImportance={handleIsHighImportance}
          handleIsLessHour={handleIsLessHour}
          handleIsLessThreeHour={handleIsLessThreeHour}
        />
        <div className="network__search">
          <div className="network__search-box">
            <img
              className="network__icons"
              src={SearchIcon}
              alt="search-icon"
            />
            <input
              type="text"
              placeholder="Search Alerts"
              className="search-input"
            />
          </div>
          <div className="network__search-filter-sort">
            <div className="network-sort">
              <img className="network__icons" src={SortIcon} alt="sort-icon" />
              <p className="network__text-paragraph">Sort</p>
            </div>
            <div className="network-filter">
              <img
                className="network__icons"
                src={FilterIcon}
                alt="filter-icon"
              />
              <p className="network__text-paragraph" onClick={toggleFilterBox}>
                Filter
              </p>
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
            {networks.length > 9 && (
              <div className="network-alerts__pages-buttons">
                <button
                  className="network-alerts__pages-buttons-button"
                  onClick={handleDecrement}
                >
                  <img
                    src={NetworkArrow}
                    alt="left-arrow"
                    className="network__left-arrow"
                  />
                </button>
                {buttonJSX}
                <button
                  className="network-alerts__pages-buttons-button"
                  onClick={handleIncrement}
                >
                  <img
                    src={NetworkArrow}
                    alt="right-arrow"
                    className="network__right-arrow"
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        <ChatButton />
      </section>
    </>
  );
};

export default Network;
