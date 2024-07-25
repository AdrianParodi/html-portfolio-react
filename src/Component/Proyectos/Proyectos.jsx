// import './Proyectos.css'
import CardProyecto from '../CardProyecto/CardProyecto.jsx'
import {Text, Flex, Link} from '@chakra-ui/react'
import {colors} from '../../themes/themes.js'

const Proyectos=()=>{
    const tarjetasProyectos = [
        {key:1, titulo:"Backend de aplicaciones" , descripcion: <Text color={colors.color1} lineHeight='25px'>Desarrollo de funcionalidades para las aplicaciones <Link href="https://play.google.com/store/search?q=simulador%20gps&c=apps&hl=en_US&gl=US" target="_blank" color={colors.color1} fontWeight='bold'>Simulador GPS</Link> y <Link href="https://play.google.com/store/apps/details?id=com.tweetdownloader&hl=en_US&gl=US" target="_blank" color={colors.color1} fontWeight='bold'>Tweet Downloader</Link>.</Text>},

        {key:2, titulo:"ReactorD" , descripcion: <Text color={colors.color1} lineHeight='25px'>Colaborador principal en el desarrollo del  paquete <Link href="https://github.com/SalvadorBrandolin/reactord" target="_blank" color={colors.color1} fontWeight='bold'>ReactorD</Link> para el diseño de reactores en Python.</Text>},
        
        {key:3, titulo:"Diseño web", descripcion: <Text color={colors.color1} lineHeight='25px'>Landing Pages. Aquí puedes ver un ejemplo: <Link href="https://adrieto.github.io/image-based-web-project/" target="_blank" color={colors.color1} fontWeight='bold'><br/> Ver Landing Page</Link></Text>}
    ]
    
    return(
        <Flex as='section' id="proyectos" flexDirection='column'>
            <Text as='h1'>Proyectos</Text>
                <Flex className='contenedor-proyectos' justifyContent='space-between'>
                    {tarjetasProyectos.map(tarjetaProyecto => <CardProyecto key={tarjetaProyecto.key} titulo={tarjetaProyecto.titulo} descripcion={tarjetaProyecto.descripcion}/> 
                )
                }   
                </Flex>
        </Flex>
    )
}

export default Proyectos