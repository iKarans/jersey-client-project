
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
import Routes from './components/Routes/Routes';

const App = () => {

  
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  )
}

export default App;
