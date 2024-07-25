import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';
// import { useState } from 'react'
import {Flex, Text} from '@chakra-ui/react'

const Contacto = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {nombre:'',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nombre" >Email Address</label>
      <input
        id="nombre"
        name="nombre"
        type="nombre"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />

      <label htmlFor="email">Email Address</label>
       <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email} 
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contacto





// const Contacto=()=>{

//   let [nombre, setNombre] = useState('')
//   let [apellido, setApellido] = useState('')
//   let [email, setEmail] = useState('')
//   let [mensaje, setMensaje] = useState('')

//   function manejarEnvio(e){
//     e.preventDefault()
//     console.log(nombre)
//     console.log(apellido)
//     console.log(email)
//     console.log(mensaje)

//   }

//     return(
//         <section className="contacto" id="contacto">
//       <div>        
//         <h1>Contacto</h1>
//       </div>
//       <form className="formulario" onSubmit={manejarEnvio}>
//         <div>
//           <input type="text" id="fname" name="fname" placeholder="Nombre *" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
//         </div>
//         <div>
//           <input type="text" id="lname" name="lname" placeholder="Apellido *" value={apellido} onChange={(e)=>setApellido(e.target.value)}></input>
//         </div>
        
//         <div>
//           <input type="email" id="email" name="email" placeholder="Email *" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//         </div>

//         <div>
//           <textarea id="mensaje" name="mensaje" required placeholder="Mensaje *" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></textarea>
//         </div>

//         <div>
//           <button className="small-button" type="submit"> Enviar</button>
//         </div>    
              
//       </form>
//     </section>
//     )
// }

// export default Contacto