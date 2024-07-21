import './CardHabilidad.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CardHabilidad = ({titulo, icono, descripcion})=>{

return(
    <div className='tarjeta-habilidades'>
        <FontAwesomeIcon  className='icono-habilidad' icon={icono}/>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
    </div>
    )
}


export default CardHabilidad