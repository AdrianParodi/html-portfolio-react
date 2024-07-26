// import './CardDestacado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex, Text, Box } from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'

const CardDestacado = ({titulo, icono, descripcion}) => {

    return(
        <Flex flexDirection='column' className='tarjeta-destacados' borderColor={colors.color3} borderStyle='dashed' borderWidth='1px' borderRadius='20px' width={['45%', '30%' ]} alignItems='center' flexWrap='wrap' my={['20px','40px']} p='20px' textAlign='center' alignContent='center' >
            <Box as ={FontAwesomeIcon} icon={icono} color={colors.color3} fontSize={['2.5rem', '3rem', '4rem', '5rem']} />

            <Text as='h2' color={colors.color2} my={['20px','25px']}>{titulo} </Text>
            <Text as='p' color={colors.color3} lineHeight={['20px','25px']}>{descripcion}</Text>
        </Flex>
    )
}

export default CardDestacado