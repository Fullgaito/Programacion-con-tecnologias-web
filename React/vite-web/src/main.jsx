import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Table from './table.jsx'
import Navbar from './navbar.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Table/>
    
  </StrictMode>,
)
