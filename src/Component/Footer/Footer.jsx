import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faUpwork } from '@fortawesome/free-brands-svg-icons';
import {Flex, Text, Link, Box} from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'

const Footer=()=>{
    return(
        <Flex as='section' flexDirection={['column',null,null,'row']} className="footer-section" justifyContent='space-between' alignItems='center' my='25px' border='1px solid red'>
            <Flex>
            <Text as='p' fontSize='12px'>© 2024 - Desarrollado por Adrián Parodi</Text>
            </Flex>
            
            <Flex className="div-iconos" justifyContent='space-between'  width={['50%','40%',null,'28%','30%']} alignItems='center' border='1px solid red' mx='1rem'>
                <Link href="https://www.linkedin.com/in/adrian-parodi/" target="_blank">
                <Box as={FontAwesomeIcon} icon={faLinkedin} color={colors.color3} fontSize={['2rem', '2.5rem', '3rem','3rem', '4rem']} mx={'0.2rem'} my='0.5rem'/>
                </Link>

                <Link href="https://github.com/Adrieto" target="_blank">
                <Box as={FontAwesomeIcon} icon={faGithub} color={colors.color3} fontSize={['2rem', '2.5rem', '3rem', '3rem', '4rem']} mx={'0.2rem'}/>
                </Link>


                <Link href="https://www.upwork.com/freelancers/~01dacc95db22177ffa?viewMode=1" target="_blank">
                <Box as={FontAwesomeIcon} icon={faUpwork} color={colors.color3}fontSize={['2rem', '2.5rem', '3rem','3rem', '4rem']} mx={'0.2rem'} my='0.5rem'/>
                </Link>
            </Flex>
            
            <Flex>
            <Text fontSize='12px'>parodiadrian3@gmail.com</Text>
            </Flex>
        </Flex>   
    )
}

export default Footer