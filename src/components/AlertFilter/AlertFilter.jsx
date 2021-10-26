import React from 'react';
import "./AlertFilter.scss";

const AlertFilter = (props) => {
  const {handleFilterCheckbox, handleIsLowImportance, handleIsHighImportance, handleIsLessHour, handleIsLessThreeHour} = props

  return (
    
      <section className="alert-filters" >
        <div className="alert-filters-container">
          <h4 className="alert-filters__header-text">Filter</h4>
          <div className="alert-filters__filter--alert" >
            <p className="alert-filters__filter-text">Alert Type</p>
            <form action="" className="alert-filters__filter--alert-form" />
              <input type="checkbox" onInput={handleFilterCheckbox} id="New Device"/>
              <label htmlFor="New Device" className="alert-filters__checkbox-text">New Device</label><br/>
              <input type="checkbox" onInput={handleFilterCheckbox} id="Outage"/>
              <label htmlFor="Outage" className="alert-filters__checkbox-text">Outage</label><br/>
              <input type="checkbox" onInput={handleFilterCheckbox} id="High risk"/>
              <label htmlFor="High risk" className="alert-filters__checkbox-text">High Device Risk</label><br/>
              <input type="checkbox" onInput={handleFilterCheckbox} id="Logged On" />
              <label htmlFor="Logged On" className="alert-filters__checkbox-text">Device Logon</label>
            <form/>
          </div>
          <div className="alert-filters__filter--created">
            <p className="alert-filters__filter-text">Created</p>
            <form action="" className="alert-filters__created--filters" />
              <input type="radio" name="time" />
              <label htmlFor="" className="alert-filters__checkbox-text">Less than 1hr ago</label><br/>
              <input type="radio" name="time"/>
              <label htmlFor="" className="alert-filters__checkbox-text">1 - 3hrs ago</label>
            <form/>
          </div>
          <div className="alert-filters__filter--importance">
            <p className="alert-filters__filter-text">Importance Level</p>
            <form action="" className="alert-filters__importance--filters" />
              <input type="radio" name="importance"/>
              <label htmlFor="" className="alert-filters__checkbox-text">Low</label><br/>
              <input type="radio" name="importance" />
              <label htmlFor="" className="alert-filters__checkbox-text">High</label>
            <form/>
          </div>
          <div className="alert-filters__apply">
            <p>Apply</p>
          </div>
        </div>
      </section>

  )
}

export default AlertFilter;
