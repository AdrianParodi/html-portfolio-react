import {Text, Flex} from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'

const CardProyecto=({titulo, descripcion})=>{

    return(
        <Flex className='tarjeta-proyectos' flexDirection='column' textAlign='center' width={['48%','46%','46%','23%']}borderStyle='solid' borderWidth='1px' borderColor={colors.color3} bg={colors.color3} borderRadius='20px' px='10px' py='20px' my='20px'>

            <Text as='h2' color={colors.color1}  my='25px'>{titulo}</Text >
            {descripcion}
        </Flex>
    )
}

export default CardProyecto
