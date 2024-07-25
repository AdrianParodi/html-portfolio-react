import CardTestimonio from '../CardTestimonio/CardTestimonio.jsx'
import {Flex, Text} from '@chakra-ui/react'
import testimonio1 from '/img/Testimonio1.png'
import testimonio2 from '/img/Testimonio2.png'


const Testimonios=()=>{
    const listaTestimonios=[
        {key:1, foto:testimonio1, descripcion: "Adrián me ayudó a mover parte de dos aplicaciones Android a un servidor web, reduciendo el tamaño de éstas y haciéndolas mas accesible para los usuarios. Gracias!"},

        {key:2, foto:testimonio2, descripcion:"Pude ahorrar muchas horas de trabajo rutinario con el desarrollo que me brindó Adrián para extraer datos desde archivos PDF. Muchas gracias!"},

        {key:3, foto:testimonio1, descripcion: "Adrián me ayudó a mover parte de dos aplicaciones Android a un servidor web, reduciendo el tamaño de éstas y haciéndolas mas accesible para los usuarios. Gracias!"},

        {key:4, foto:testimonio2, descripcion:"Pude ahorrar muchas horas de trabajo rutinario con el desarrollo que me brindó Adrián para extraer datos desde archivos PDF. Muchas gracias!"},

        {key:5, foto:testimonio1, descripcion: "Adrián me ayudó a mover parte de dos aplicaciones Android a un servidor web, reduciendo el tamaño de éstas y haciéndolas mas accesible para los usuarios. Gracias!"},

        {key:6, foto:testimonio2, descripcion:"Pude ahorrar muchas horas de trabajo rutinario con el desarrollo que me brindó Adrián para extraer datos desde archivos PDF. Muchas gracias!"},

        {key:7, foto:testimonio1, descripcion: "Adrián me ayudó a mover parte de dos aplicaciones Android a un servidor web, reduciendo el tamaño de éstas y haciéndolas mas accesible para los usuarios. Gracias!"},

        {key:8, foto:testimonio2, descripcion:"Pude ahorrar muchas horas de trabajo rutinario con el desarrollo que me brindó Adrián para extraer datos desde archivos PDF. Muchas gracias!"}
    ]

    return(
        <Flex as='section' id="testimonios" flexDirection='column'>
            <Text as='h1'>Testimonios</Text>
            <Flex className='contenedor-testimonios' justifyContent='space-between' flexWrap='wrap'>
                {listaTestimonios.map(testimonio=><CardTestimonio key={testimonio.key} foto={testimonio.foto} descripcion={testimonio.descripcion}/>
            )
            }
            </Flex>
        </Flex>       
    )
}

export default Testimonios



