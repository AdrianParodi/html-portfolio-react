import { useState } from 'react'
import bumeran from '/img/Imagen-navbar.png'
// import bumeran from '/vite.svg'
import './App.css'

function App() {


  return (
    <header>
        <div class="header-container">
            <div class="header-izq">
                <p>Portafolio</p>
                <img src={bumeran} alt=""/>
            </div>
            <nav>
                <a href="#hero">Principal</a>
                <a href="#sobre-mi">Sobre</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#servicios">Servicios</a>
                <a href="#testimonios">Testimonios</a>
                <a href="#contacto">Contacto</a>
                <i class="bi bi-list"></i>
            </nav>
            <div class="div-boton">
                <a href="#contacto">
                    <button class="small-button">Contratarme</button>
                </a>
                
            </div>
        </div>
      </header>
  )
}

export default App
