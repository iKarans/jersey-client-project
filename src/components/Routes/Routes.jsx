import React, {useState} from 'react'
import Network from '../Network/Network'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Devices from '../Devices/Devices'
import Security from '../Security/Security'
import Settings from '../Settings/Settings'

const Routes = () => {
   



   return (
      <div>
         <Switch>
            <Route exact path="/dashboard">
               <Dashboard />
            </Route>
            <Route exact path="/devices">
               <Devices />
            </Route>
            <Route exact path="/security">
               <Security />
            </Route>
            <Route exact path="/network">
               <Network />
            </Route>
            <Route exact path="/settings">
               <Settings />
            </Route>
         </Switch>
      </div>
   )
}

export default Routes
