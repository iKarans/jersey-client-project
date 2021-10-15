
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/Routes/Routes';
import Header from "./containers/Header/Header";

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
