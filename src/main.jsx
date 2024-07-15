import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Hero from './Component/Hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
