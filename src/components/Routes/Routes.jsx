import React, {useState} from 'react'
import Network from '../Network/Network'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Devices from '../Devices/Devices'
import Security from '../Security/Security'
import SideNav from '../Nav/SideNav/SideNav'
import Settings from '../../components/Routes/Routes.jsx'

const Routes = () => {
   


   return (
      <div className="routes">
         <Switch>
            <Route exact path="/dashboard">
               <SideNav selectedPage= "Dashboard" />
               <Dashboard />
            </Route>
            <Route exact path="/devices">
               <SideNav selectedPage= "Devices" />
               <Devices />
            </Route>
            <Route exact path="/security">
               <SideNav selectedPage= "Security" />
               <Security />
            </Route>
            <Route exact path="/network">
               <SideNav selectedPage= "Network" />
               <Network />
            </Route>
            <SideNav selectedPage= "Settings" />
            <Route exact path="/settings">
               <Settings />
            </Route>
         </Switch>
      </div>
   )
}

export default Routes
