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
        <Flex as="section" className="hero" id="hero" flexDirection='row' justifyContent='space-between' alignItems='center' maxWidth='100%' paddingX={['2%','4%','8%','10%', null, '15%']} my={['50px',null,null,null,'80px','90px']} bg={colors.color1} color={colors.color2} border='1px solid red' >
            <Flex flexDirection='column' textAlign='left' maxWidth={['100%',null,'60%']} >
                <Text as='h1' mb='40px' px='5px'>Hola, soy Adrián <br/>
                Programador y diseñador web</Text>
                <Text  >Ingeniero químico con marcado perfil analítico y formación de doctorado. <br/> 
                Ofrezco servicios en el área de ingeniería, desarrollo del backend de aplicaciones y diseño de páginas web.
                </Text>

            <Flex className="contenedor-dos-botones" flexDirection='row' justifyContent='space-between'  my='25px'>
                <Link href="#contacto">
                    <Button bg={colors.color3} color={colors.color1} fontSize={['l','l','l','xl']} fontWeight={fW1} width={['145px',null,null,null,'180px','200px']} py={['5px','8px','20px','25px']} borderRadius={buttonBR} mr={['15px', '25px']}>Contratarme</Button>
                </Link>
                
                <Link href="#sobre-mi">
                    <Button bg={colors.color3} color={colors.color1} fontSize={['l','l','l','xl']} fontWeight={fW1} width={['145px',null,null,null,'180px','200px']} py={['5px','8px','20px','25px']} borderRadius={buttonBR} mr='160px'>Sobre mí</Button>
                </Link>
                </Flex>
            </Flex>
            <Flex>
                <Image display={['none', 'none', 'block', 'block']} width={[null,null,'240px','280px','380px']} height={[null,null,'240px','280px','380px']} borderRadius='50%' className="foto-perfil" src={fotoPerfil} alt="rostro del desarrollador"></Image>
            </Flex>
        </Flex>
    )
}

export default Hero