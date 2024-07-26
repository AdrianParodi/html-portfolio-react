// import './CardServicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Text, Flex, Box, Button} from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'


const CardServicio=({titulo, icono, descripcion})=>{
    const fS1 = '18px' //fontSize
    const fW1 = 600 //fontWeight
    return(
        <Flex className='tarjeta-servicios' flexDirection='column'  width='30%' borderStyle='dashed' borderColor={colors.color3} borderWidth='1px' borderRadius='20px' my='20px' p='20px'>
            <Box as ={FontAwesomeIcon}   icon={icono} color={colors.color3} fontSize={['2.5rem', '3rem', '4rem', '5rem']}/>
            <Flex className="textoMasBoton" flexDirection='column' alignItems='center' textAlign='center' flex='1'>
                <Text as='h2' color={colors.color2} my='25px'>{titulo}</Text>
                <Text as='p' color={colors.color2} my='15px' lineHeight='25px'>{descripcion} </Text>
                <Button bg={colors.color3} color={colors.color1} borderRadius='20px' fontSize={fS1} fontWeight={fW1} width='160px' mt='auto'>Detalles</Button>
            </Flex>
        </Flex>

    )
}

export default CardServicio