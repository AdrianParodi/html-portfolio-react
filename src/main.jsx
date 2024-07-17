import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Hero from './Component/Hero/Hero.jsx'
import SobreMi from './Component/SobreMi/SobreMi.jsx'
import Habilidades from './Component/Habilidades/Habilidades.jsx'
import Proyectos from './Component/Proyectos/Proyectos.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <SobreMi/>
    <Habilidades/>
    <Proyectos/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
