import bumeran from '/img/Imagen-navbar.png'
import fotoPerfil from '/img/CV.jpeg'
import fotoSobreMi from '/img/sobre mi.jpeg'
// import testimonio1 from '/img/Testimonio1.png'
// import testimonio2 from '/img/Testimonio2.png'

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