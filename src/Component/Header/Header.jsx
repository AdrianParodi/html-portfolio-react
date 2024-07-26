import React, { useState, useEffect } from 'react';
import {Button, Box, Image, Flex, ChakraProvider, IconButton} from '@chakra-ui/react'
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faList } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../themes/themes.js'; // Colores para la página web color1, color2, color3
import {Link, Events} from 'react-scroll'
import bumeran from '/img/Imagen-navbar.png'


const Header=()=>{
    const marginNavbar= '1px';
    const fS1 = [null,null,null, '14px','18px'] //fontSize
    const fW1 = 600 //fontWeight

    // Propiedades React-scroll
    const smooth=true
    const duration=1000
    const offset=-75

    // Funciones manejadoras del menu
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuClick = ()=> {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (section) => {
        setIsOpen(false);
        setTimeout(() => {
          scroller.scrollTo(section, {
            smooth,
            duration,
            offset,
          });
        }, 100); // Retraso de 100ms para cerrar el menú antes del desplazamiento
      };
    
      useEffect(() => {
        return () => {
          // Desregistrar el evento al desmontar el componente
          Events.scrollEvent.remove('end');
        };
      }, []);


    return(
        <Flex as='header' alignItems="center" marginLeft='auto'
        marginRight='auto' bg={colors.color1} height='4.2rem' position='fixed' top='0' zIndex='10' width='100%' pt='5px' >
            {/* <Flex className="header-container" justifyContent='space-between'> */}

            <Flex as='section' display={['none',null,null,'flex']}flexDirection='row' justifyContent='space-between' width='100%' >
                <Flex as='div' className="header-izq" alignItems="center" color={colors.color2} flexShrink='0'>
                    <Link className="portafolio" to="hero" smooth={smooth} duration={duration} offset={offset}  textDecoration='none' fontSize={[null,null,null,'24px','28px','32px']} fontWeight='700'>
                    Portafolio
                    </Link>
                    <Image src={bumeran} alt=""/>
                </Flex>
                
                <Flex as='nav' alignItems='center' justifyContent='space-evenly' color={colors.color2} flex='1' overflow='hidden' >
                    <Link to="sobre-mi" smooth={smooth} duration={duration} offset={offset}  fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Sobre mi</Link>
                    <Link to="habilidades" smooth={smooth} duration={duration} offset={offset}  fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Habilidades</Link>
                    <Link to="proyectos" smooth={smooth} duration={duration} offset={offset}  fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Proyectos</Link>
                    <Link to="servicios" smooth={smooth} duration={duration} offset={offset}  fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Servicios</Link>
                    <Link to="testimonios" smooth={smooth} duration={duration} offset={offset}  fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Testimonios</Link>
                    <Link to="contacto" smooth={smooth} duration={duration} offset={offset}  fontSize={fS1} fontWeight={fW1} mx={marginNavbar}>Contacto</Link>
                    <Box as={FontAwesomeIcon} icon={faList} display='none'></Box> {/* Oculte el ícono usando estilo inline */}    
                </Flex>

                <Box className="div-boton" display="flex" alignItems='center' marginLeft='auto' >
                    <Link to="contacto" smooth={smooth} duration={duration} offset={offset} >
                        <Button bg={colors.color3} color={colors.color1} borderRadius='20px' fontSize={fS1} fontWeight={fW1} width={[null,null,null,'110px','140px','160px']}>Contratarme</Button>
                    </Link>  
                </Box>
            </Flex>

            <Box display={['flex',null,null,'none']} justifyContent='center' width='100%'>

                        {/* Implementación del menú para tamaños de pantalla pequeños */}
                    <Menu isOpen={isOpen}>
                        <MenuButton as={IconButton} onClick={handleMenuClick}
                        aria-label='Options'
                            icon={<FontAwesomeIcon icon={faBars} />}
                            variant='outline' borderColor={colors.color1}/>
                
                        <MenuList>
                        <MenuItem> <Link to="hero" smooth={smooth} duration={duration} offset={offset}  onClick={() => handleLinkClick('hero')} > Portafolio </Link>
                        </MenuItem>
                        <MenuItem> <Link to="sobre-mi" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('sobre-mi')} > Sobre mí </Link>
                        </MenuItem>
                        <MenuItem> <Link to="habilidades" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('habilidades')} > Habilidades </Link>
                        </MenuItem>
                        <MenuItem> <Link to="proyectos" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('proyectos')}> Proyectos </Link>
                        </MenuItem>
                        <MenuItem> <Link to="servicios" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('servicios')} > Servicios </Link>
                        </MenuItem>
                        <MenuItem> <Link to="testimonios" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('testimonios')}> Testimonios </Link>
                        </MenuItem>
                        <MenuItem> <Link to="contacto" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('contacto')} > Contacto </Link>
                        </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
        </Flex>
    )
}

export default Header