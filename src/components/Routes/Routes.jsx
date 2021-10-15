import React from 'react'
import Network from '../Network/Network'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Devices from '../Devices/Devices'
import Security from '../Security/Security'
import SideNav from '../Nav/SideNav/SideNav'
import Settings from '../../components/Routes/Routes.jsx'

const Routes = () => {
   
<<<<<<< HEAD
=======
   const handleClick = () => {
      console.log("working")
    }
  
>>>>>>> 369b3e4634cb8b04f4e0e02fbd48a481be60ddff


   return (
      <div className="routes">
         <Switch>
            <Route exact path="/dashboard">
               <SideNav selectedPage= "Dashboard" />
               <Dashboard />
            </Route>
            <Route exact path="/devices">
<<<<<<< HEAD
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
=======
               <SideNav selectedPage= "Devices"  />
               <Devices />
            </Route>
            <Route exact path="/security">
               <SideNav selectedPage= "Security"  />
               <Security />
            </Route>
            <Route exact path="/network">
               <SideNav selectedPage= "Network"  />
               <Network />
            </Route>
            <Route exact path="/settings">
               <SideNav selectedPage= "Settings"  />
>>>>>>> 369b3e4634cb8b04f4e0e02fbd48a481be60ddff
               <Settings />
            </Route>
         </Switch>
      </div>
   )
}

export default Routes
