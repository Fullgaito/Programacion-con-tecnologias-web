import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css'

import Inicio from './Inicio'
import AcercaDe from './AcercaDe'
import VideoJuegos from './VideoJuegos'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
              <Link to='/' className='nav-link'>Inicio</Link>
              <Link to='/about' className='nav-link'>Acerca de</Link>
              <Link to='/videoJuegos' className='nav-link'>VideoJuegos</Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/videoJuegos" element={<VideoJuegos/>}/>
        </Routes>
        <Routes>
          <Route path="/about" element={<AcercaDe/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
        </Routes>
        
      </div>
    </Router>
  )
  

}

export default App
