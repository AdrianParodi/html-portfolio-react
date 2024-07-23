// import './CardServicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardServicio=({titulo, icono, descripcion})=>{
    return(
        <div className='tarjeta-servicios'>
            <FontAwesomeIcon className='icono-servicio'  icon={icono}/>
            <div className="textoMasBoton">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <button>Detalles</button>
            </div>
        </div>

    )
}

export default CardServicio