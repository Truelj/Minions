import './reset.css';
import './style.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllMinions from './components/AllMinions.js';
import Minion from './components/Minion.js';

function App() {
  return (
    <div className='App-container'>
      <Router>
        <Routes>
          <Route path='/minions' element ={<AllMinions/>}></Route>
          <Route path='/minions/new'  element={<Minion newMinion={true}/>} ></Route>
          <Route path='/minions/:minionId' element={<Minion/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
