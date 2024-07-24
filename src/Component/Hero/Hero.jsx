// import './Hero.css'
import fotoPerfil from '/img/CV.jpeg'

import {Button, Box, Link, Image, Flex, Heading, Text} from '@chakra-ui/react'
import { colors } from '../../themes/themes.js';

const Hero=()=>{
    const imgSize='310px' //imagen

    //Atributos de los botones
    const fS1 = '18px'
    const fW1 = 600
    const buttonWidth='200px'
    const buttonPY = '25px'
    const buttonBR = '25px'

    return(
        <Flex as="section" className="hero" id="hero" flexDirection='row' justifyContent='space-between' paddingX='10%' my='50px' bg={colors.color1} color={colors.color2}>
            <Flex flexDirection='column' paddingRight='200px' >
                <Text as='h1' marginBottom='40px'>Hola, soy Adrián <br/>
                Programador y diseñador web</Text>
                <Text  >Ingeniero químico con marcado perfil analítico y formación de doctorado. <br/> 
                Ofrezco servicios en el área de ingeniería, desarrollo del backend de aplicaciones y diseño de páginas web.
                </Text>

            <Flex className="contenedor-dos-botones" flexDirection='row' justifyContent='space-between' my='25px'>
                <Link href="#contacto">
                    <Button bg={colors.color3} color={colors.color1} fontSize={fS1} fontWeight={fW1} width={buttonWidth} paddingY={buttonPY} borderRadius={buttonBR}>Contratarme</Button>
                </Link>
                
                <Link href="#sobre-mi">
                    <Button bg={colors.color3} color={colors.color1} fontSize={fS1} fontWeight={fW1} width={buttonWidth}  paddingY={buttonPY} borderRadius={buttonBR} marginRight='160px'>Sobre mí</Button>
                </Link>
                </Flex>
            </Flex>

            <Image width={imgSize} height={imgSize} borderRadius='50%' className="foto-perfil" src={fotoPerfil} alt="rostro del desarrollador"></Image>
        </Flex>
    )
}

export default Hero