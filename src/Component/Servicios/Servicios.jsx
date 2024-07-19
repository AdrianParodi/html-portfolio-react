import './Servicios.css'
import CardServicio from '../CardServicio/CardServicio.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Iconos seccion Servicios
import { faGears, faNetworkWired, faComments } from '@fortawesome/free-solid-svg-icons';
import {faPython} from '@fortawesome/free-brands-svg-icons';


const Servicios=()=>{
    const tarjetasServicios=[
        {icono:faNetworkWired,
            titulo:"Diseño Web", descripcion:"¡Potencia tu presencia en línea! Ofrezco servicios profesionales de creación de páginas web utilizando HTML, CSS y JavaScript. Ya sea que necesites una página moderna, responsive y con alto rendimiento, puedo transformar tu visión en una realidad"       
        },
        {icono:faGears,
            titulo:"Mobile Apps", descripcion:"Impulsa tu aplicación con un backend robusto y eficiente. Ofrezco servicios de desarrollo backend para que tu aplicación funcione de manera rápida y segura. Con un enfoque en la escalabilidad y el rendimiento, optimizaré la estructura de tu aplicación para que brinde una experiencia de usuario impecable."       
        },
        {icono:faPython,
            titulo:"Desarrollo en Python", descripcion:"Simplifica tus procesos y automatiza tareas con mis servicios de desarrollo de scripts en Python. Ofrezco soluciones eficientes y personalizadas para optimizar tu flujo de trabajo y ahorrar tiempo. ¡Haz que Python trabaje para ti y maximiza tu productividad!"       
        },
        {icono:faPython,
            titulo:"Consultoria", descripcion:"Optimiza tus procesos industriales con nuestras consultorías en ingeniería química. Especializados en programación y automatización, ofrecemos soluciones innovadoras para mejorar la eficiencia y reducir costos."       
        }
    ]
    
    return(
       
      <section>
      <h1>Servicios</h1>

      {/* <!-- Subseccion con las divisiones para cada recuadro --> */}

        <div className='contenedor-servicios'>
            {tarjetasServicios.map(
                tarjetaServicio=><CardServicio titulo={tarjetaServicio.titulo} icono={tarjetaServicio.icono}  descripcion={tarjetaServicio.descripcion}/>
            )
        }
        </div>
    </section>     
    )
}

export default Servicios