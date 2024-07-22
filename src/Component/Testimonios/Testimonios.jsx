import './Testimonios.css'
import CardTestimonio from '../CardTestimonio/CardTestimonio.jsx'

import testimonio1 from '/img/Testimonio1.png'
import testimonio2 from '/img/Testimonio2.png'


const Testimonios=()=>{
    const listaTestimonios=[
        {key:1, foto:testimonio1, descripcion: "Adrián me ayudó a mover parte de dos aplicaciones Android a un servidor web, reduciendo el tamaño de éstas y haciéndolas mas accesible para los usuarios. Gracias!"},

        {key:2, foto:testimonio2, descripcion:"Pude ahorrar muchas horas de trabajo rutinario con el desarrollo que me brindó Adrián para extraer datos desde archivos PDF. Muchas gracias!"}
    ]

    return(
        <section id="testimonios">
            <h1>Testimonios</h1>
            <div className='contenedor-testimonios'>
                {listaTestimonios.map(testimonio=><CardTestimonio key={testimonio.key} foto={testimonio.foto} descripcion={testimonio.descripcion}/>
            )
            }
            </div>
        </section>       
    )
}

export default Testimonios



