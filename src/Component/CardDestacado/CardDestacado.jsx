// import './CardDestacado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex, Text } from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'

const CardDestacado = ({titulo, icono, descripcion}) => {

    return(
        <Flex flexDirection='column' className='tarjeta-destacados' borderColor={colors.color3} borderStyle='dashed' borderWidth='1px' borderRadius='20px' width='30%'  alignItems='center' my='40px' p='20px' textAlign='center'>
            <FontAwesomeIcon className='icono-destacado' icon={icono} color={colors.color3} size='5x' />
            <Text as='h2' color={colors.color2} my='25px'>{titulo} </Text>
            <Text as='p' color={colors.color3} lineHeight='25px'>{descripcion}</Text>
        </Flex>
    )
}

export default CardDestacado