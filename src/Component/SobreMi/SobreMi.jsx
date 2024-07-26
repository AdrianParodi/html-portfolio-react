// import './SobreMi.css'
import CardDestacado from '../CardDestacado/CardDestacado';

// Iconos seccion Sobre mi
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faMobileScreenButton, faChartLine, faArrowRightLong, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

import {Button, Link, Image, Flex, Text, Box} from '@chakra-ui/react'
import { colors } from '../../themes/themes.js';
import fotoSobreMi from '/img/sobre mi.jpeg'


const SobreMi=()=>{

  const imgSize='380px' //imagen
  const fS1 = '18px' //fontSize
  const fW1 = 600 //fontWeight

  const tarjetasDestacado = [
    {key:1, titulo:"Diseño Web", icono:faDesktop, descripcion: "Foco en el diseño responsive de sitios web y sus funcionalidad con JS."},

    {key:2, titulo:"Backend de aplicaciones" , icono:faMobileScreenButton , descripcion:"Desarrollo de funcionalidades para 2 aplicaciones disponibles en la App Store de Google."},

    {key:3, titulo:"+ 90% de éxito" , icono:faChartLine , descripcion: "En proyectos desarrollados como freelancer."}
  ]

    return(
      <Flex as="section" flexDirection='column' className="sobre-mi" id="sobre-mi" border='1px solid red' > 
         
      {/* <!-- Subseccion con la foto y el cuadro de borde blanco --> */}
      <Text as='h1'>Sobre mí</Text>
      <Flex border='1px solid green' alignItems='center' ml={['0px']} width='auto'> 
          <Image src={fotoSobreMi} display={['none', 'none', 'block', 'block']} width={[null,null,'240px','280px','380px']} height={[null,null,'240px','280px','380px']} borderRadius='50%' alt="fotografía del desarrollador"  mr='25px'></Image>
          
          <Flex flexDirection='column'borderColor={colors.color2} borderStyle='dashed' borderWidth='1px' borderRadius='25px' px={['5px','10px','20px']} py={['15px','25px','30px']} flexGrow={1} minWidth={0} >
              <Text as='h2' color={colors.color2}>Diseñar no es un problema para mí. Soy diseñador web y programador en Python</Text>
              <Text my='30px'> Actualmente brindo mis servicios en <em>Upwork.com</em> en el área de ingeniería y programación, principalmente en Matlab y en Python. Asimismo, trabajo en el desarrollo del backend para aplicaciones en Android y en el desarrollo web. <br/>
              Adicionalmente, brindo clases de química en idioma inglés desde hace 7 años en la plataforma <em>Tutor.com.</em></Text>
              <Link href="#servicios">
                <Button bg={colors.color3} color={colors.color1} borderRadius='20px'  fontSize={['14px','16px','16px']} fontWeight= {['700','600']} alignItems='center' width={['98%','90%','100%','80%','66%','60%']} py={['15px','25px']}>
                    <Box as={FontAwesomeIcon} icon={faArrowRightLong} className="flechas-icons" marginRight={['10px','20px','15px']} color={colors.color1} fontSize={['15px','25px','20px']}/>
                    Consultar Servicios Disponibles
                    <Box as={FontAwesomeIcon} icon={faArrowLeftLong} className="flechas-icons" marginLeft={['10px','20px','15px']} color={colors.color1} fontSize={['15px','25px','20px']}/>
                  </Button>
              </Link>
          </Flex>
      </Flex>
      {/* <!-- Subseccion de los cuadros con borde amarillo e imagenes --> */}
      <Flex justifyContent='space-between'>

        {tarjetasDestacado.map(tarjetaDestacado => <CardDestacado key={tarjetaDestacado.key} titulo={tarjetaDestacado.titulo} icono={tarjetaDestacado.icono} descripcion={tarjetaDestacado.descripcion}/>
      )
      }
      </Flex>
      </Flex>
      

      
    )
}

export default SobreMi