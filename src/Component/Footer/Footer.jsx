import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faUpwork } from '@fortawesome/free-brands-svg-icons';
import {Flex, Text, Link} from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'

const Footer=()=>{
    return(
        <Flex as='section' className="footer-section" justifyContent='space-between' alignItems='center' my='25px'>
            <Flex>
            <Text as='p'>© 2024 - Desarrollado por Adrián Parodi</Text>
            </Flex>
            
            <Flex className="div-iconos" justifyContent='space-between'  width='20%'>
                <Link href="https://www.linkedin.com/in/adrian-parodi/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color={colors.color3} size='3x'/>
                </Link>

                <Link href="https://github.com/Adrieto" target="_blank">
                    <FontAwesomeIcon icon={faGithub} color={colors.color3} size='3x'/>
                </Link>


                <Link href="https://www.upwork.com/freelancers/~01dacc95db22177ffa?viewMode=1" target="_blank">
                    <FontAwesomeIcon icon={faUpwork} color={colors.color3} size='3x'/>
                </Link>
            </Flex>
            
            <Flex>
            <Text>parodiadrian3@gmail.com</Text>
            </Flex>
        </Flex>   
    )
}

export default Footer