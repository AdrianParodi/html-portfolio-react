// import './Header.css'
import {Button, Box, Link, Image, Flex,} from '@chakra-ui/react'
import { colors } from '../../themes/themes.js'; // Colores para la página web
// color1, color2, color3


import { ChakraProvider } from '@chakra-ui/react'
import bumeran from '/img/Imagen-navbar.png'


const Header=()=>{
    const marginNavbar= '1px';
    const fS1 = '18px' //fontSize
    const fW1 = 600 //fontWeight

    return(
        <Flex as='header' alignItems="center" marginLeft='auto'
        marginRight='auto' bg={colors.color1} height='4.2rem' position='fixed' top='0' zIndex='10' width='100%' pt='5px' >
            {/* <Flex className="header-container" justifyContent='space-between'> */}

            <Flex as='section' display='flex' flexDirection='row' justifyContent='space-between' width='100%'>
                <Flex as='div' className="header-izq" alignItems="center" color={colors.color2} flexShrink='0'>
                    <Link className="portafolio" href="#hero" textDecoration='none' fontSize='24px'fontWeight='700'>
                    Portafolio
                    </Link>
                    <Image src={bumeran} alt=""/>
                </Flex>
                
                <Flex as='nav' alignItems='center' justifyContent='space-evenly' color={colors.color2} flex='1' overflow='hidden'>
                    <Link href="#sobre-mi" fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Sobre mi</Link>
                    <Link href="#habilidades" fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Habilidades</Link>
                    <Link href="#proyectos" fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Proyectos</Link>
                    <Link href="#servicios" fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Servicios</Link>
                    <Link href="#testimonios" fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Testimonios</Link>
                    <Link href="#contacto" fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Contacto</Link>
                    <i className="bi bi-list" display='none'></i> {/* Oculte el ícono usando estilo inline */}                    
                </Flex>

                <Box className="div-boton" display="flex" alignItems='center' marginLeft='auto' >
                    <Link href="#contacto">
                        <Button bg={colors.color3} color={colors.color1} borderRadius='20px' fontSize={fS1} fontWeight={fW1} width='160px'>Contratarme</Button>
                    </Link>  
                </Box>
            </Flex>
        </Flex>
    )
}

export default Header