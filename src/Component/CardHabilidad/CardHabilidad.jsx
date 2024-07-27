import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {colors} from '../../themes/themes.js'
import {Flex, Text, Box} from '@chakra-ui/react'


const CardHabilidad = ({titulo, icono, descripcion})=>{

return(
    <Flex className='tarjeta-habilidades' flexDirection='column' borderStyle='solid' borderColor={colors.color3} borderWidth='1px' borderRadius='20px' bg={colors.color3} color={colors.color1} alignItems='center' textAlign='center' p='20px' my='40px' width='30%'>
        <Box as ={FontAwesomeIcon} icon={icono} fontSize={['2.5rem', '3rem', '4rem', '5rem']}/>
        <Text as='h2' color={colors.color1} my='25px'>{titulo}</Text>
        <Text as='p' color={colors.color1} lineHeight='25px'>{descripcion} </Text>
    </Flex>
    )
}

export default CardHabilidad