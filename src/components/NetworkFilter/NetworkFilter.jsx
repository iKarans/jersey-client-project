import React from "react";
import { handleChangeHighImportance, handleChangeLessThanHour, handleChangeLowImportance, handleChangeOnetoThreeHours } from "../../containers/Network/NetworkFunctions";
import "./NetworkFilter.scss";

const NetworkFilter = (props) => {
  const {handleChangeDevice, handleChangeHighRisk, handleChangeLoggedOn, handleChangeOutage, handleChangeLessThanHour, handleChangeOneToThreeHours, handleChangeLowImportance, handleChangeHighImportance} = props
  

  

  return (
    <section className="network-filters">
      <div className="network-filters-container">
        <h4 className="network-filters__header-text">Filter</h4>
        <div className="network-filters__filter--alert">
          <p className="network-filters__filter-text">Alert Type</p>
          <form action="" className="network-filters__filter--alert-form" />
          <input type="checkbox" onChange={handleChangeDevice} />
          <label htmlFor="" className="network-filters__checkbox-text">
            New Device
          </label>
          <br />
          <input type="checkbox" onChange={handleChangeOutage} />
          <label htmlFor="" className="network-filters__checkbox-text">
            Outage
          </label>
          <br />
          <input type="checkbox" onChange={handleChangeHighRisk} />
          <label htmlFor="" className="network-filters__checkbox-text">
            High Device Risk
          </label>
          <br />
          <input type="checkbox" onChange={handleChangeLoggedOn} />
          <label htmlFor="" className="network-filters__checkbox-text">
            Device Logon
          </label>
          <form />
        </div>
        <div className="network-filters__filter--created">
          <p className="network-filters__filter-text">Created</p>
          <form action="" className="network-filters__created--filters" />
          <input type="checkbox" onChange={handleChangeLessThanHour}/>
          <label htmlFor="" className="network-filters__checkbox-text">
            Less than 1hr ago
          </label>
          <br />
          <input type="checkbox" onChange={handleChangeOneToThreeHours}/>
          <label htmlFor="" className="network-filters__checkbox-text">
            1 - 3hrs ago
          </label>
          <form />
        </div>
        <div className="network-filters__filter--importance">
          <p className="network-filters__filter-text">Importance Level</p>
          <form action="" className="network-filters__importance--filters" />
          <input type="checkbox" onChange={handleChangeLowImportance}/>
          <label htmlFor="" className="network-filters__checkbox-text">
            Low
          </label>
          <br />
          <input type="checkbox" onChange={handleChangeHighImportance}/>
          <label htmlFor="" className="network-filters__checkbox-text">
            High
          </label>
          <form />
        </div>
        <div className="network-filters__apply">
          <p>Apply</p>
        </div>
      </div>
    </section>
  );
};

export default NetworkFilter;
