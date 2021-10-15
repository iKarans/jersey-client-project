import React, {useState} from 'react'
import Network from '../Network/Network'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Devices from '../Devices/Devices'
import Security from '../Security/Security'
import SideNav from '../Nav/SideNav/SideNav'
import Settings from '../../components/Routes/Routes.jsx'

const Routes = () => {
   
   
   const handleClick = () => {
      console.log("working")
    }
  


   return (
      <div className="routes">
         <Switch>
            <Route exact path="/dashboard">
               <SideNav selectedPage= "Dashboard" handleClick={handleClick} />
               <Dashboard />
            </Route>
            <Route exact path="/devices">
               <SideNav selectedPage= "Devices" handleClick={handleClick} />
               <Devices />
            </Route>
            <Route exact path="/security">
               <SideNav selectedPage= "Security" handleClick={handleClick} />
               <Security />
            </Route>
            <Route exact path="/network">
               <SideNav selectedPage= "Network" handleClick={handleClick} />
               <Network />
            </Route>
            <SideNav selectedPage= "Settings" handleClick={handleClick} />
            <Route exact path="/settings">
               <Settings />
            </Route>
         </Switch>
      </div>
   )
}

export default Routes
