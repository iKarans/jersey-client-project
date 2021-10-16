import "./App.css";
import DeviceList from "./containers/DeviceList/DeviceList";
import Header from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Header pageHeading="Dashboard" />
      <DeviceList />
      <Dashboard />
      <Login />
    </div>
  );
};
export default App;
