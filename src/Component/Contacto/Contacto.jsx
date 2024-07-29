import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage} from 'formik';

// import * as yup from 'yup';
// import { useState } from 'react'
import {Flex, Box, Text, Button, Textarea} from '@chakra-ui/react'
import { colors } from '../../themes/themes.js'; // 

const Contacto=()=>{

  return( 
    <Formik initialValues={{
      firstname:'',
      lastname:'',
      email:'',
      mensaje:''
    }}
    
    onSubmit={(values)=>{console.log(values)
    }}
    >

    {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
      })=>(

        <Box as='section' className="contacto" id="contacto" display='flex' flexDirection='column'>
      <Flex as='div'>        
        <h1>Contacto</h1>
      </Flex>
      <Form className="formulario" onSubmit={handleSubmit}>
        <Flex as='div'>
          <input type="text" id="firstname" name="firstname" placeholder="Nombre *" value={values.firstname} onChange={handleChange}></input>
        </Flex>
        <Flex as='div'>
          <input type="text" id="lastname" name="lastname" placeholder="Apellido *" value={values.lastname} onChange={handleChange}></input>
        </Flex>
        
        <Flex as='div'>
          <input type="email" id="email" name="email" placeholder="Email *" value={values.email} onChange={handleChange}></input>
        </Flex>

        <Flex as='div'>
          <Textarea id="mensaje" name="mensaje" required placeholder="Mensaje *" value={values.mensaje} onChange={handleChange} ></Textarea>
        </Flex>

        <Flex as='div'>
          <Button className="small-button" type="submit" bg={colors.color3} color={colors.color1}> Enviar</Button>
        </Flex>    
              
      </Form>
    </Box>
      )
      }
    </Formik>
    )
}

export default Contacto