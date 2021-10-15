import "./App.css";
import Header from "./containers/Header/Header";

import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Header pageHeading="Dashboard" />
      <Login />
    </div>
  );
};

export default App;
