import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllMinions from './components/AllMinions.js';
import Minion from './components/Minion.js';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/minions' element ={<AllMinions/>}></Route>
          <Route path='/minions/new' strict element={<Minion newMinion={true}/>} ></Route>
          <Route path='/minions/:minionId' element={<Minion/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
