// import './CardDestacado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardDestacado = ({titulo, icono, descripcion}) => {

    return(
        <div className='tarjeta-destacados'>
            <FontAwesomeIcon className='icono-destacado' icon={icono}/>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}

export default CardDestacado