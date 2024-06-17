import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Login } from './pages/Login.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>


    </BrowserRouter>
  </React.StrictMode>,
)
