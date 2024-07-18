import './Servicios.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Iconos seccion Servicios
import { faGears, faNetworkWired, faComments } from '@fortawesome/free-solid-svg-icons';
import {faPython} from '@fortawesome/free-brands-svg-icons';

const Servicios=()=>{
    return(
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

      </section>
    </section>     
    )
}

export default Servicios