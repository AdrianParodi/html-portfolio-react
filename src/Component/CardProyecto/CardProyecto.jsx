// import './CardProyecto.css'


const CardProyecto=({titulo, descripcion})=>{

    return(
        <div className='tarjeta-proyectos'>
            <h1>{titulo}</h1>
            {descripcion}
        </div>
    )
}

export default CardProyecto
