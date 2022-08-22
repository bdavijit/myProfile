
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import './style.js/style.css';

function App() {
  return (
        <div className='MainBox'>
              <div className='MainSubBox menuBox'>
                    <Navbar />
              </div>
              <div>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/Skills' element={<Skills />} />
                          <Route path='/Projects' element={<Projects />} />
                          <Route path='/Education' element={<Education />} />
                          <Route path='/Contact' element={<Contact />} />

                          <Route path='*' element={<Notfound />} />
                    </Routes>
              </div>
        </div>
  );
}

export default App;
