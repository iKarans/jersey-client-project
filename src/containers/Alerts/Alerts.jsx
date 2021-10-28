import React, { useState } from "react";

import AlertItem from "../../components/AlertItem/AlertItem";
import AlertFilter from "../../components/AlertFilter/AlertFilter";
import ChatButton from "../../components/ChatButton/ChatButton";
import AlertPageButton from "../../components/AlertPageButton/AlertPageButton";
import { alerts } from "../../data/alerts.js";
import SearchIcon from "../../assets/global/search-icon.svg";
import SortIcon from "../../assets/global/sort-icon.svg";
import FilterIcon from "../../assets/devices/filterIcon.png";
import WhiteDropDown from "../../assets/global/white-dropdown.svg";
import AlertsArrow from "../../assets/alerts/alerts-arrow.svg";

import "./Alerts.scss";

const Alerts = () => {
  const [pages, setPages] = useState(0);
  // const [splitAlertsArrays] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const [sortTime, setSortTime] = useState(false);
  const [sortImportance, setSortImportance] = useState(false);
  const [sortAlert, setSortAlert] = useState(false);
  const handleSortAlert = () => {
    
    setSortAlert(!sortAlert);
    setSortImportance(false);
    setSortTime(false); 
  }
  const handleSortImportance = () => {
    setSortImportance(!sortImportance);
    setSortAlert(false);
    setSortTime(false);
  }
  const handleSortTime = () => {
    setSortTime(!sortTime);
    setSortAlert(false);
    setSortImportance(false);

  }

  const handleDecrement = () => {
    if (pages > 0) {
      setPages(pages - 1);
    }
  };

  const toggleFilterBox = () => {
    setFilterStatus(!filterStatus);
  };

  const handleIncrement = () => {
    if (pages >= 0 && pages < alerts.length / 9 - 1) {
      setPages(pages + 1);
    }
  };

  const alertsArray = [...alerts];
   /// Karans Messing around
   const [filtersArray, setFiltersArray] = useState([]);
   const handleFilterCheckbox = (event) => {
     let tempArr = [...filtersArray];
     if (tempArr.includes(event.target.id)) {
       tempArr.splice(tempArr.indexOf(event.target.id), 1);
     } else {
       tempArr.push(event.target.id);
     }
     setFiltersArray(tempArr);
   };
   // importance Level
   const [isLowImportance, setLowImportanceLevel] = useState(false);
   const [isHighImportance, setHighImportanceLevel] = useState(false);
   const handleIsLowImportance = () => {
     let temp = isLowImportance;
     setLowImportanceLevel(!isLowImportance);
     setHighImportanceLevel(temp);
   };
   const handleIsHighImportance = () => {
     let temp = isHighImportance;
     setHighImportanceLevel(!isHighImportance);
     setLowImportanceLevel(temp);
   };
 
   const [isLessHour, setIsLessHour] = useState(false);
   const [isLessThreeHour, setIsLessThreeHour] = useState(false);
   const handleIsLessHour = () => {
     let temp = isLessHour;
     setIsLessHour(!isLessHour);
     setIsLessThreeHour(temp);
   };
   const handleIsLessThreeHour = () => {
     let temp = isLessThreeHour;
     setIsLessThreeHour(!isLessThreeHour);
     setIsLessHour(temp);
   };
 
   const shouldReturn = (alert) => {
     for (let i = 0; i < filtersArray.length; i++) {
       if (alert.alertType.includes(filtersArray[i])) {
         return true;
       }
     }
     return false;
   };
 
   const alertsArrayFiltered = alertsArray
     .filter((alert) => {
       return (
         (filtersArray.length ? shouldReturn(alert) : true) &&
         (isLowImportance ? alert.importanceID == 1 : true) &&
         (isHighImportance ? alert.importanceID == 2 : true) &&
         (isLessHour ? alert.createdTime <= 60 : true) &&
         (isLessThreeHour ? alert.createdTime > 60 : true)
       );
     });
     console.log(alertsArrayFiltered);
 
   console.log(alertsArrayFiltered);
   if(sortTime) {
     alertsArrayFiltered.sort((a,b) => a.createdTime - b.createdTime);
   } else if(sortImportance) {
    alertsArrayFiltered.sort((a,b) => b.importanceID - a.importanceID);
   } else if (sortAlert) {
    alertsArrayFiltered.sort((a,b) => (a.alertType > b.alertType ) ? 1 : ((b.alertType  > a.alertType ) ? -1 : 0));
   }

   const handleClickSort = (event) => {
     console.log(alertsArrayFiltered);
     if(event.target.id == "Alert") {
       handleSortAlert();
       alertsArrayFiltered.sort((a,b) => (a.alertType > b.alertType ) ? 1 : ((b.alertType  > a.alertType ) ? -1 : 0))
     } else if (event.target.id == "Importance") {
       handleSortImportance();
       if(sortImportance) {
        alertsArrayFiltered.sort((a,b) => b.importanceID - a.importanceID);
       } else {
        alertsArrayFiltered.sort((a,b) => a.importanceID - b.importanceID);
       }
     } else if (event.target.id == "Time") {
       handleSortTime();
       if(sortTime) {
         handleSortTime()
        alertsArrayFiltered.sort((a,b) => (b.createdTime - a.createdTime));
        // console.log(alertsArrayFiltered)
        // console.log(1)
       }  else {     
        alertsArrayFiltered.sort((a,b) => (a.createdTime - b.createdTime));
       }
     }
   }
   console.log(alertsArrayFiltered);
   
  let alertsArrayFilteredSpliced = [];
  if(alertsArrayFiltered.length < 9) {
    alertsArrayFilteredSpliced = [[...alertsArrayFiltered]];
  } else {
    while (alertsArrayFiltered.length  > 0) {
      alertsArrayFilteredSpliced.push(alertsArrayFiltered.splice(0, 9));
    }
  }
  
  const alertsItemJSX = alertsArrayFilteredSpliced[pages].map((alert, index) => {
    return (
      <AlertItem
        key={alert + index}
        name={alert.alertType}
        summary={alert.summary}
        created={alert.created}
        importanceLevel={alert.importanceLevel}
        index={index}
      />
    );
  });

  const buttonNumbers = [];

  const generateButtonIndex = () => {
    for (let i = 0; i < alerts.length / 9; i++) {
      buttonNumbers.push(i);
    }
  };



  generateButtonIndex();

  const buttonJSX = buttonNumbers.map((buttonNumber, index) => {
    return (
      <AlertPageButton
        key={buttonNumber + index}
        index={index + 1}
        setPages={setPages}
        pages={pages}
      />
    );
  });

  return (
    <>
      <section className="alerts">
        <div className={`${filterStatus ? "alert__filter-active" : "alert__filter-inactive"}`}>
          <AlertFilter 
          toggleFilterBox={toggleFilterBox}
          handleFilterCheckbox = {handleFilterCheckbox}
          handleIsLowImportance = {handleIsLowImportance}
          handleIsHighImportance = {handleIsHighImportance}
          handleIsLessHour = {handleIsLessHour}
          handleIsLessThreeHour = {handleIsLessThreeHour}
          />
        </div>
        <div className="alerts__search">
          <div className="alerts__search-box">
            <img className="alerts__icons" src={SearchIcon} alt="search-icon" />
            <input
              type="text"
              placeholder="Search Alerts"
              className="search-input"
            />
          </div>
          <div className="alerts__search-filter-sort">
            <div className="alerts-sort">
              <img className="alerts__icons" src={SortIcon} alt="sort-icon" />
              <p className="alerts__text-paragraph">Sort</p>
            </div>
            <div className="alerts-filter"onClick={toggleFilterBox}>
              <img
                className="alerts__icons"
                src={FilterIcon}
                alt="filter-icon"
              />
              <p className="alerts__text-paragraph">Filter</p>
            </div>
          </div>
        </div>
        <div className="alerts-table">
          <div className="alerts-table__header">
            <div className="alerts-table__header-alert">
              <h5 className="alert-header">Alert Type</h5>
              <img src={WhiteDropDown} alt="dropdown" onClick={handleClickSort} className={`${sortAlert ? "alerts-table__alert-arrow-active" : "alerts-table__alert-arrow-inactive"}`} id="Alert" />
            </div>
            <div className="alerts-table__header-summary">
              <h5 className="alert-header">Summary</h5>
            </div>
            <div className="alerts-table__header-created">
              <h5 className="alert-header">Created</h5>
              <img src={WhiteDropDown} alt="dropdown" onClick={handleClickSort} className={`${sortTime ? "alerts-table__time-arrow-active" : "alerts-table__time-arrow-inactive"}`} id="Time"/>
            </div>
            <div className="alerts-table__header-importance">
              <h5 className="alert-header">Importance Level</h5>
              <img src={WhiteDropDown} alt="dropdown" onClick={handleClickSort} className={`${sortImportance? "alerts-table__importance-arrow-active" : "alerts-table__importance-arrow-inactive"}`} id="Importance"/>
            </div>
          </div>
          <div className="alerts-table__alerts">{alertsItemJSX}</div>
          <div className="alerts-table__pages">
            {alerts.length > 9 && (
              <div className="alerts-table__pages-buttons">
                <button
                  className="alerts-table__pages-buttons-button"
                  onClick={handleDecrement}
                >
                  <img
                    src={AlertsArrow}
                    alt="left-arrow"
                    className="alerts__left-arrow"
                  />
                </button>
                {buttonJSX}
                <button
                  className="alerts-table__pages-buttons-button"
                  onClick={handleIncrement}
                >
                  <img
                    src={AlertsArrow}
                    alt="right-arrow"
                    className="alerts__right-arrow"
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

export default Alerts;
