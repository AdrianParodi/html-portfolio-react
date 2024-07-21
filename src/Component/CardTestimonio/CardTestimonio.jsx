import './CardTestimonio.css'

const CardTestimonio=({foto, descripcion})=>{
    return (
        <div className='tarjeta-testimonios'>
            <img src={foto} alt="testimonio"/>
            <div className="stars"></div>
            <p>{descripcion}</p>
        </div>
    )
}

export default CardTestimonio