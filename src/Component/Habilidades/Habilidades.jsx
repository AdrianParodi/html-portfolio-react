import './Habilidades.css'
import CardHabilidad from '../CardHabilidad/CardHabilidad.jsx'

// Iconos seccion Habilidades
import {faPython} from '@fortawesome/free-brands-svg-icons';
import {faDesktop, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';


const Habilidades=()=>{

  const tarjetasHabilidades = [
    {titulo:"Web", icono:faDesktop, descripcion:"Diseño responsive completo, utilizando tecnologías como HTML, CSS y JS"},

    {titulo:"Mobile", icono:faMobileScreenButton, descripcion:"Desarrollo del backend de aplicaciones utilizando el framework Flask de Python"},

    {titulo:"Python", icono:faPython, descripcion:"Como lenguaje principal para el desarrollo de aplicaciones web."}
  ]

  const tarjeta1={titulo:"Python", icono:faPython, descripcion:"Como lenguaje principal para el desarrollo de aplicaciones web."}

    return(
        
      <section id="habilidades">
        <h1>Habilidades</h1>
        {/* <!-- Subseccion con los cuadros amarillos e íconos --> */}
        <section className="contenedor-habilidades" >
          {tarjetasHabilidades.map(tarjetaHabilidad => <CardHabilidad titulo={tarjetaHabilidad.titulo} icono={tarjetaHabilidad.icono} descripcion={tarjetaHabilidad.descripcion}/>
        )
        }

      </section>
    </section>
    )
}

export default Habilidades
