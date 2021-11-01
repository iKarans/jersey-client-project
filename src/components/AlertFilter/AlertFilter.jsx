import React from 'react';
import "./AlertFilter.scss";

const AlertFilter = (props) => {
  const {handleFilterCheckbox, handleIsLowImportance, handleIsHighImportance, handleIsLessHour,handleIsLessThreeHour, toggleFilterBox} = props;

  return (
    
      <section className="alert-filters" >
        <div className="alert-filters-container">
          <h4 className="alert-filters__header-text">Filter </h4>
          
          <div className="alert-filters__filter--alert" >
            <p className="alert-filters__filter-text">Alert Type</p>
            <form action="" className="alert-filters__filter--alert-form" />
              <input type="checkbox" id="New Device" onInput={handleFilterCheckbox}/>
              <label htmlFor="" className="alert-filters__checkbox-text">New Device</label><br/>
              <input type="checkbox" id="Outage" onInput={handleFilterCheckbox}/>
              <label htmlFor="" className="alert-filters__checkbox-text">Outage</label><br/>
              <input type="checkbox" id="High risk" onInput={handleFilterCheckbox}/>
              <label htmlFor="" className="alert-filters__checkbox-text">High Device Risk</label><br/>
              <input type="checkbox" id="Logged On" onInput={handleFilterCheckbox}/>
              <label htmlFor="" className="alert-filters__checkbox-text">Device Logon</label>
            <form/>
          </div>
          <div className="alert-filters__filter--created">
            <p className="alert-filters__filter-text">Created</p>
            <form action="" className="alert-filters__created--filters" />
              <input type="radio" name="time" onInput={handleIsLessHour}/>
              <label htmlFor="" className="alert-filters__checkbox-text">Less than 1hr ago</label><br/>
              <input type="radio" name="time" onInput={handleIsLessThreeHour}  />
              <label htmlFor="" className="alert-filters__checkbox-text">1 - 3hrs ago</label>
            <form/>
          </div>
          <div className="alert-filters__filter--importance">
            <p className="alert-filters__filter-text">Importance Level</p>
            <form action="" className="alert-filters__importance--filters" />
              <input type="radio" name="importance" onInput={handleIsLowImportance} />
              <label htmlFor="" className="alert-filters__checkbox-text">Low</label><br/>
              <input type="radio" name="importance" onInput={handleIsHighImportance}   />
              <label htmlFor="" className="alert-filters__checkbox-text">High</label>
            <form/>
          </div>
          <div className="alert-filters__buttons-wrapper">
          <div className="alert-filters__reset" onClick={toggleFilterBox}>
            <p>Reset</p>
          </div>
          <div className="alert-filters__apply" onClick={toggleFilterBox}>
            <p>Apply</p>
          </div>
        </div>
        </div>
      </section>

  )
}

export default AlertFilter;
