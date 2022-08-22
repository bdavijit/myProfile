import { NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './style.js/style.css';

function App() {
  return (
        <div className='MainBox'>
              <div className='MainSubBox menuBox'>
                    <Navbar />
              </div>
              <div className='MainSubBox'>data</div>
        </div>
  );
}

export default App;
