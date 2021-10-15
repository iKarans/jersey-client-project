import "./App.css";
import Header from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Header pageHeading="Dashboard"/>
      <Dashboard />
    </div>
  );
}
export default App;
