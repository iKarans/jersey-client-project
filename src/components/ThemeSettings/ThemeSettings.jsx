import React from 'react'


import './ThemeSettings.scss'

const ThemeSettings = () => {
   const handleApply = (e) => {
      e.preventDefault()
   }

   return (
      <div className="themesettings">
         <h3 className="themesettings__header">Theme Settings</h3>
         <p className="themesettings__message">At Lujam, we’re aware that we all have different tastes so please feel free to customise the portal using some of our themes.</p>
         <form action="" className="themesettings__form">
            <h4 className="themesettings__form--header">Theme</h4>
            <div className="themesettings__form--radio">
               <label for="light">Light</label>
               <input type="radio" id="light" name="fav_language" value="HTML" />
               <label for="dark">Dark</label>
               <input type="radio" id="dark" name="fav_language" value="CSS" />
            </div>
            <button onClick={handleApply} className="themesettings__form--applybutton">Apply</button>
         </form>
      </div>
   )
}

export default ThemeSettings
