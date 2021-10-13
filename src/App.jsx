
import './App.css';
import SideNav from './components/Nav/SideNav/SideNav';

const App = () => {

  const handleClick = () => {
    console.log("working")
  }
  return (
    <SideNav handleClick={handleClick}/>
  );
}

export default App;
