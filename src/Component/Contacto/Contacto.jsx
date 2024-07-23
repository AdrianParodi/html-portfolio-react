// import './Contacto.css'
import { useState } from 'react'

const Contacto=()=>{

  let [nombre, setNombre] = useState('')
  let [apellido, setApellido] = useState('')
  let [email, setEmail] = useState('')
  let [mensaje, setMensaje] = useState('')

  function manejarEnvio(e){
    e.preventDefault()
    console.log(nombre)
    console.log(apellido)
    console.log(email)
    console.log(mensaje)

  }

    return(
        <section className="contacto" id="contacto">
      <div>        
        <h1>Contacto</h1>
      </div>
      <form className="formulario" onSubmit={manejarEnvio}>
        <div>
          <input type="text" id="fname" name="fname" placeholder="Nombre *" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
        </div>
        <div>
          <input type="text" id="lname" name="lname" placeholder="Apellido *" value={apellido} onChange={(e)=>setApellido(e.target.value)}></input>
        </div>
        
        <div>
          <input type="email" id="email" name="email" placeholder="Email *" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>

        <div>
          <textarea id="mensaje" name="mensaje" required placeholder="Mensaje *" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></textarea>
        </div>

        <div>
          <button className="small-button" type="submit"> Enviar</button>
        </div>    
              
      </form>
    </section>
    )
}

export default Contacto