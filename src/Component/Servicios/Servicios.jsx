import CardServicio from '../CardServicio/CardServicio.jsx'
import {Flex, Text} from '@chakra-ui/react'
// Iconos seccion Servicios
import { faGears, faNetworkWired, faComments } from '@fortawesome/free-solid-svg-icons';
import {faPython} from '@fortawesome/free-brands-svg-icons';


const Servicios=()=>{
    const tarjetasServicios=[
        {key:1, icono:faNetworkWired,
            titulo:"Diseño Web", descripcion:"¡Potencia tu presencia en línea! Ofrezco servicios profesionales de creación de páginas web utilizando HTML, CSS y JavaScript. Ya sea que necesites una página moderna, responsive y con alto rendimiento, puedo transformar tu visión en una realidad."       
        },

        {key:2, icono:faGears,
            titulo:"Mobile Apps", descripcion:"Impulsa tu aplicación con un backend robusto y eficiente. Ofrezco servicios de desarrollo backend para que tu aplicación funcione de manera rápida y segura. Con un enfoque en la escalabilidad y el rendimiento, optimizaré la estructura de tu aplicación para que brinde una experiencia de usuario impecable."       
        },

        {key:3, icono:faPython,
            titulo:"Desarrollo en Python", descripcion:"Simplifica tus procesos y automatiza tareas con mis servicios de desarrollo de scripts en Python. Ofrezco soluciones eficientes y personalizadas para optimizar tu flujo de trabajo y ahorrar tiempo. ¡Haz que Python trabaje para ti y maximiza tu productividad!"       
        },
        {key:4, icono:faPython,
            titulo:"Consultoría", descripcion:"Optimiza tus procesos industriales con mis consultorías en ingeniería química. Especializado en programación y automatización, ofrezco soluciones innovadoras para mejorar la eficiencia y reducir costos."       
        }
    ]
    
    return(
       
      <Flex as='section' id="servicios" flexDirection='column' >
      <Text as='h1'>Servicios</Text>

      {/* <!-- Subseccion con las divisiones para cada recuadro --> */}

        <Flex className='contenedor-servicios' flexWrap='wrap' justifyContent='space-between'>
            {tarjetasServicios.map(
                tarjetaServicio=><CardServicio key={tarjetaServicio.key} titulo={tarjetaServicio.titulo} icono={tarjetaServicio.icono}  descripcion={tarjetaServicio.descripcion}/>
            )
        }
        </Flex>
    </Flex>     
    )
}

export default Servicios