
import './App.css';
<<<<<<< HEAD
import SideNav from './components/Nav/SideNav/SideNav';
import Dashboard from './components/Dashboard/Dashboard';
import Devices from './components/Devices/Devices';
import Security from './components/Security/Security';
import Network from './components/Network/Network';
import Settings from './components/Settings/Settings';
import Header from "./containers/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
=======
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> e8af90fce13edb048a9668d0eb0f1c01615b96ed
import Routes from './components/Routes/Routes';
import Header from "./containers/Header/Header";

const App = () => {

  
  return (
    <Router>
      <div className="App">
        <Routes />
        <Header pageHeading="Dashboard"/>
      </div>
    </Router>
  )
}

export default App;
