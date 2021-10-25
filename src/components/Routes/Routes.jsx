import React from 'react'
import Alerts from '../Alerts/Alerts'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Devices from '../Devices/Devices'
import Security from '../Security/Security'
import SideNav from '../Nav/SideNav/SideNav'
import Settings from '../../components/Routes/Routes.jsx'
import Header from '../../containers/Header/Header'

const Routes = () => {
   
   const handleClick = () => {
      console.log("working")
    }
  


   return (
      <div className="routes">
         <Switch>
            <Route exact path="/dashboard">
               <Header pageHeading="Dashboard"/>
               <SideNav selectedPage= "Dashboard" />
               <Dashboard />
            </Route>
            <Route exact path="/devices">
               <Header pageHeading="Devices"/>
               <SideNav selectedPage= "Devices"  />
               <Devices />
            </Route>
            <Route exact path="/security">
               <Header pageHeading="Security"/>   
               <SideNav selectedPage= "Security"  />
               <Security />
            </Route>
            <Route exact path="/alerts">
               <Header pageHeading="Alerts"/>
               <SideNav selectedPage= "Alerts"  />
               <Alerts />
            </Route>
               <SideNav selectedPage= "Settings"  />
               <Route exact path="/settings">
               <Settings />
            </Route>
         </Switch>
      </div>
   )
}

export default Routes
