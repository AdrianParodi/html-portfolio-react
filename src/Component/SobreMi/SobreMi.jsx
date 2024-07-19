import './SobreMi.css'
import CardDestacado from '../CardDestacado/CardDestacado';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// Iconos seccion Sobre mi
import {faDesktop, faMobileScreenButton, faChartLine} from '@fortawesome/free-solid-svg-icons';

import fotoSobreMi from '/img/sobre mi.jpeg'


const SobreMi=()=>{

  const tarjetasDestacado = [
    {titulo:"Diseño Web", icono:faDesktop, descripcion: "Foco en el diseño responsive de sitios web y sus funcionalidad con JS."},

    {titulo:"Backend de aplicaciones" , icono:faMobileScreenButton , descripcion:"Desarrollo de funcionalidades para 2 aplicaciones disponibles en la App Store de Google."},

    {titulo:"+ 90% de éxito" , icono:faChartLine , descripcion: "En proyectos desarrollados como freelancer."}
  ]

    return(
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
      <div className="contenedor-destacados">

        {tarjetasDestacado.map(tarjetaDestacado => <CardDestacado titulo={tarjetaDestacado.titulo} icono={tarjetaDestacado.icono} descripcion={tarjetaDestacado.descripcion}/>
      )
      }
      </div>
    </section>
    )
}

export default SobreMi