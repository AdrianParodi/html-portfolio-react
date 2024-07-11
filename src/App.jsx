import { useState } from 'react'
import bumeran from '/img/Imagen-navbar.png'
import fotoPerfil from '/img/CV.jpeg'
import fotoSobreMi from '/img/sobre mi.jpeg'
import testimonio1 from '/img/Testimonio1.png'
import testimonio2 from '/img/Testimonio2.png'

// Import de archivos css
import './normalize.css'
import './App.css'
import './responsive.css'
import '@fortawesome/fontawesome-free/css/all.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


// Iconos seccion Sobre mi
import {faDesktop, faMobileScreenButton, faChartLine} from '@fortawesome/free-solid-svg-icons';

// Iconos seccion Habilidades
import {faPython} from '@fortawesome/free-brands-svg-icons';
import {faNetworkWired, faComments} from '@fortawesome/free-solid-svg-icons';

// Iconos seccion Servicios
import { faGears,  } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <header>
        <div className="header-container">
            <div className="header-izq">
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
                <i className="bi bi-list"></i>
            </nav>
            <div className="div-boton">
                <a href="#contacto">
                    <button className="small-button">Contratarme</button>
                </a>  
            </div>
        </div>
      </header>

      {/* <!-- Seccion Hero --> */}
      <section className="hero" id="hero">
        <div>
            <h1>Hola, soy Adrian <br></br>
            Programador y diseñador web</h1>
            <p>Ingeniero químico con marcado perfil analítico y formación de doctorado. <br></br>
            Ofrezco servicios en el area de ingenieria, desarrollo del backend de aplicaciones y diseño de paginas web.
            </p>

            <div className="contenedor-dos-botones">
                <a href="#contacto">
                    <button className="big-button">Contratarme</button>
                </a>
                
                <a href="#sobre-mi">
                    <button className="big-button">Sobre mi</button>
                </a>
            </div>
        </div>
            <img className="foto-perfil" src={fotoPerfil} alt="rostro del desarrollador"></img>
      </section>

      {/* <!-- Seccion Sobre mi --> */}
      <section className="sobre-mi" id="sobre-mi">
        {/* <!-- Subseccion con la foto y el cuadro de borde blanco --> */}
        <h1>Sobre mi</h1>
        <section className="sobre-mi-top">
            <img className="foto-sobre-mi" src={fotoSobreMi} alt="fotografía del desarrollador"></img>
            <div className= "div-borde-blanco">
                <h2>Diseñar no es un problema para mí. Soy diseñador web y programador en Python</h2>
                <p> Actualmente brindo mis servicios en <em>Upwork.com</em> en el area de ingeniería y programación, principalmente en Matlab y en Python. Asimismo, trabajo en el desarrollo del backend para aplicaciones en Android y en el desarrollo web. <br></br>
                Adicionalmente, brindo clases de química en idioma inglés desde hace mas de 5 años en la plataforma <em>Tutor.com</em></p>
                <a href="#servicios">
                    <button className="services-button">
                    <i className="fa-solid fa-arrow-right-long flechas-icons"></i>
                    Consultar Servicios Disponibles
                    <i className="fa-solid fa-arrow-left-long flechas-icons"></i>
                    </button>
                </a>
            </div>
        </section>

        {/* <!-- Subseccion de los cuadros con borde amarillo e imagenes --> */}
        <section className="destacados" id="destacados">
            <div>
              <FontAwesomeIcon icon={faDesktop}/>
              <h2>Diseño Web</h2>
              <p>Foco en el diseño responsive de sitios web y sus funcionalidad con JS. </p>
            </div>

            <div>
              <FontAwesomeIcon icon={faMobileScreenButton} />    
              <h2>Backend de aplicaciones</h2>
              <p>Desarrollo de funcionalidades para 2 aplicaciones disponibles en la app store de google.</p>
            </div>

            <div>
                <FontAwesomeIcon icon={faChartLine}/>
                <h2>+ 90% de éxito</h2>
                <p>En proyectos desarrollados como freelancer.</p>
            </div>
        </section>
      </section>

        {/* <!-- Seccion Habilidades --> */}
      <section id="habilidades">
        <h1>Habilidades</h1>
        {/* <!-- Subseccion con los cuadros amarillos e íconos --> */}
        <section className="habilidades" >
            <div>
              <FontAwesomeIcon icon={faDesktop}/> 
              <h1>Web</h1>
              <p>Diseño responsive completo, utilizando tecnologías como HTML, CSS y JS</p>
            </div>
            
            <div>
              <FontAwesomeIcon icon={faMobileScreenButton}/>
              <h1>Mobile Apps</h1>
              <p>Desarrollo del backend de aplicaciones utilizando el framework Flask de Python</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faPython}/>
                <h1>Python</h1>
                <p>Como lenguaje principal para el desarrollo de aplicaciones web.</p>
            </div>
        </section>
      </section>

      {/* <!-- Seccion Proyectos --> */}
      <section id="proyectos">
        <h1>Proyectos</h1>
        {/* <!-- Subseccion con los cuadros amarillos e íconos --> */}
        <section className="proyectos" >
          <div>
            <h1>Backend de aplicaciones</h1>
            <p>Desarrollo de funcionalidades para las aplicaciones 
            <a href="https://play.google.com/store/search?q=simulador%20gps&c=apps&hl=en_US&gl=US" target="_blank">Simulador GPS</a> y 
            
            <a href="https://play.google.com/store/apps/details?id=com.tweetdownloader&hl=en_US&gl=US" target="_blank">Tweet Downloader</a></p>
          </div>
          
          <div>
            <h1>ReactorD</h1>
            <p>Colaborador principal en el desarrollo del  paquete <a href="https://github.com/SalvadorBrandolin/reactord" target="_blank">ReactorD</a> para el diseño de reactores en Python</p>
          </div>

          <div>
            <h1>Diseño web</h1>
            <p>Landing Pages. Aquí puedes ver un ejemplo</p>
            <a href="https://adrieto.github.io/image-based-web-project/" target="_blank"> Ver Landing Page</a>
          </div>
        </section>   
      </section>

      {/* <!-- Seccion de Servicios --> */}
      <section id="servicios">
        <h1>Servicios</h1>

        {/* <!-- Subseccion con las divisiones para cada recuadro --> */}
        <section className="servicios" >
            <div>
              <FontAwesomeIcon icon={faNetworkWired}/>
              <h2>Diseño Web</h2>
              <p>¡Potencia tu presencia en línea! Ofrezco servicios profesionales de creación de páginas web utilizando HTML, CSS y JavaScript. Ya sea que necesites una página moderna, responsive y con alto rendimiento, puedo transformar tu visión en una realidad.</p>
              <button>Detalles</button>
            </div>

            <div>
              <FontAwesomeIcon icon={faGears}/> 
              <h2>Mobile Apps</h2>
              <p>Impulsa tu aplicación con un backend robusto y eficiente. Ofrezco servicios de desarrollo backend para que tu aplicación funcione de manera rápida y segura. Con un enfoque en la escalabilidad y el rendimiento, optimizaré la estructura de tu aplicación para que brinde una experiencia de usuario impecable.</p>
              <button>Detalles</button>
            </div>

            <div>
              <FontAwesomeIcon icon={faPython}/> 
              <h2>Desarrollo en Python</h2>
              <p>Simplifica tus procesos y automatiza tareas con mis servicios de desarrollo de scripts en Python. Ofrezco soluciones eficientes y personalizadas para optimizar tu flujo de trabajo y ahorrar tiempo. ¡Haz que Python trabaje para ti y maximiza tu productividad! </p>
              <button>Detalles</button>
            </div>

            <div>
              <FontAwesomeIcon icon={faComments}/> 
              <h2>Consultoría</h2>
              <p>Optimiza tus procesos industriales con nuestras consultorías en ingeniería química. Especializados en programación y automatización, ofrecemos soluciones innovadoras para mejorar la eficiencia y reducir costos. </p>
              <button>Detalles</button>
            </div>

            <div>
                <i className="fa-brands fa-python"></i>
                <h2>Lorem, ipsum</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis eos nulla eligendi, suscipit consectetur similique earum repellat sit amet corporis cum est quas.</p>
                <button>Detalles</button>
            </div>

            <div>
                <i className="fa-brands fa-python"></i>
                <h2>Lorem, ipsum</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In omnis eos nulla eligendi, suscipit consectetur similique earum repellat sit amet corporis cum est quas.</p>
                <button>Detalles</button>
            </div>
        </section>
    
      </section>

      {/* <!-- Seccion de testimonios --> */}
      <section id="testimonios">
        <h1>
            Testimonios
        </h1>

        {/* <!-- Subseccion con los recuadros de cada testimonio --> */}
        <section className="testimonios">
            <div>
                <img src={testimonio1} alt="Imagen del primer testimonio"></img>
                <section className="stars"></section>
                <p>Adrián me ayudó a mover parte de dos aplicaciones Android a un servidor web, reduciendo el tamaño de éstas y haciéndolas mas accesible para los usuarios. <br></br>
                Gracias! </p>
            </div>

            
            <div>
                <img src={testimonio2} alt="Imagen del segundo testimonio"></img>
                <section className="stars"></section><p> Pude ahorrar muchas horas de trabajo rutinario con el desarrollo que me brindó Adrián para extraer datos desde archivos PDF. <br></br>Muchas gracias! </p>
            </div>

            <div>
                <img src={testimonio1} alt=""></img>
                <section className="stars"></section>
                <p>Lorem ipsum dolor sit amet consectetur,.</p>
            </div>

            <div>
                <img src={testimonio2} alt=""></img>
                <section className="stars"></section>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi a illo culpa odit.
                </p>
            </div>

            <div>
                <img src={testimonio1} alt=""></img>
                <section className="stars"></section>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. consectetur, adipisicing elit.</p>
            </div>

            <div>
                <img src={testimonio2} alt=""></img>
                <section className="stars"></section>
                <p>Lorem ipsum dolor sit amet consectetur,</p>
            </div>

            <div>
                <img src={testimonio1} alt=""></img>
                <section className="stars"></section>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div>
                <img src={testimonio2} alt=""></img>
                <section className="stars"></section>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>

        </section>
    </section>

    {/* <!-- Seccion de contacto --> */}

    <section className="contacto" id="contacto">
      <div>        
        <h1>Contacto</h1>
      </div>
      <form className="formulario">
        <div>
          <input type="text" id="fname" name="fname" placeholder="Nombre *"></input>
        </div>
        <div>
          <input type="text" id="lname" name="lname" placeholder="Apellido *"></input>
        </div>
        
        <div>
          <input type="email" id="email" name="email" placeholder="Email *"></input>
        </div>

        <div>
          <textarea id="mensaje" name="mensaje" required placeholder="Mensaje *"></textarea>
        </div>

        <div>
          <button className="small-button" type="submit"> Enviar</button>
        </div>    
              
      </form>
    </section>

    <footer>
      <section className="footer-section">
        <div>
          <p>© 2024 - Desarrollado por Adrian Parodi</p>
        </div>
        
        <div className="div-iconos">
          <a href="https://www.linkedin.com/in/adrian-parodi/" target="_blank">
              <i className="fa-brands fa-linkedin footer-icons"></i>
          </a>

          <a href="https://github.com/Adrieto" target="_blank">
              <i className="fa-brands fa-github footer-icons"></i>
          </a>


          <a href="https://www.upwork.com/freelancers/~01dacc95db22177ffa?viewMode=1" target="_blank">
              <i className="fa-brands fa-upwork footer-icons"></i>
          </a>
        </div>
        
        <div>
          <p>parodiadrian3@gmail.com</p>
        </div>
      </section>       
    </footer>

    </>
  )
}

export default App