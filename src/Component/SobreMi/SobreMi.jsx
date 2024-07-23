// import './SobreMi.css'
import CardDestacado from '../CardDestacado/CardDestacado';

// Iconos seccion Sobre mi
import {faDesktop, faMobileScreenButton, faChartLine} from '@fortawesome/free-solid-svg-icons';
import {Button, Box, Link, Image, Flex, Text, Heading} from '@chakra-ui/react'
import { colors } from '../../themes/themes.js';
import fotoSobreMi from '/img/sobre mi.jpeg'


const SobreMi=()=>{

  const imgSize='380px' //imagen

  const tarjetasDestacado = [
    {key:1, titulo:"Diseño Web", icono:faDesktop, descripcion: "Foco en el diseño responsive de sitios web y sus funcionalidad con JS."},

    {key:2, titulo:"Backend de aplicaciones" , icono:faMobileScreenButton , descripcion:"Desarrollo de funcionalidades para 2 aplicaciones disponibles en la App Store de Google."},

    {key:3, titulo:"+ 90% de éxito" , icono:faChartLine , descripcion: "En proyectos desarrollados como freelancer."}
  ]

    return(
      <Flex as="section" flexDirection='column' className="sobre-mi" id="sobre-mi">
      {/* <!-- Subseccion con la foto y el cuadro de borde blanco --> */}
      <Heading as='h1'>Sobre mí</Heading>
      <Flex alignItems='center'> 
          <Image src={fotoSobreMi} width={imgSize} height={imgSize} borderRadius='50%' alt="fotografía del desarrollador" mr='25px'></Image>
          <Flex flexDirection='column'borderColor={colors.color2} borderStyle='dashed' borderWidth='1px' borderRadius='25px' px='20px' py='30px'>
              <Heading as='h3' color={colors.color2}>Diseñar no es un problema para mí. Soy diseñador web y programador en Python</Heading>
              <Text my='30px'> Actualmente brindo mis servicios en <em>Upwork.com</em> en el área de ingeniería y programación, principalmente en Matlab y en Python. Asimismo, trabajo en el desarrollo del backend para aplicaciones en Android y en el desarrollo web. <br/>
              Adicionalmente, brindo clases de química en idioma inglés desde hace 7 años en la plataforma <em>Tutor.com</em></Text>
              <Link href="#servicios">
                  <Button>
                    <i className="fa-solid fa-arrow-right-long flechas-icons"></i>
                    Consultar Servicios Disponibles
                    <i className="fa-solid fa-arrow-left-long flechas-icons"></i>
                  </Button>
              </Link>
          </Flex>
      </Flex>
      </Flex>

      
    )
}

export default SobreMi