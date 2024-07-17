import './Habilidades.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Iconos seccion Habilidades
import {faPython} from '@fortawesome/free-brands-svg-icons';
import {faDesktop, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';


const Habilidades=()=>{
    return(
        
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
    )
}

export default Habilidades
