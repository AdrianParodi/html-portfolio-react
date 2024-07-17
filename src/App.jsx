import bumeran from '/img/Imagen-navbar.png'
import fotoPerfil from '/img/CV.jpeg'
import fotoSobreMi from '/img/sobre mi.jpeg'
import testimonio1 from '/img/Testimonio1.png'
import testimonio2 from '/img/Testimonio2.png'

// Import de archivos css
import './normalize.css'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import './responsive.css'

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

    </>
  )
}

export default App