
import './App.css';
import SideNav from './components/Nav/SideNav/SideNav';
import Dashboard from './components/Dashboard/Dashboard';
import Devices from './components/Devices/Devices';
import Security from './components/Security/Security';
import Network from './components/Network/Network';
import Settings from './components/Settings/Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  

  const handleClick = () => {
    console.log("working")
  }
  return (
    <div className="App">
      <SideNav handleClick={handleClick}/>

    <Router>
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
    </Router>

  </div>
    
  );
}

export default App;
