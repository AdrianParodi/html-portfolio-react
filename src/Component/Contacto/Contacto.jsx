import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage} from 'formik';

import * as yup from 'yup';
// import { useState } from 'react'
import {Flex, Box, Text, Button, Textarea, Input} from '@chakra-ui/react'
import { colors } from '../../themes/themes.js'; // 

const Contacto=()=>{

  return( 
    <Formik initialValues={{
      firstname:'',
      lastname:'',
      email:'',
      mensaje:'perro'
    }}
    
    // Funciones

    validationSchema={yup.object({
      firstname:yup
      .string()
      .required("Este campo no puede estar vacío")
    })}
       
    onSubmit={(values)=>{console.log(values)
    }}
    >

    {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur
      })=>(

        <Box as='section' className="contacto" id="contacto" display='flex' flexDirection='column'>
        <Flex as='div'>
          <h1>Contacto</h1>
        </Flex>
        <Box as={Form} className="formulario" onSubmit={handleSubmit} width='45%' alignSelf='center' >
          <Flex as='div' flexDirection='column' mb='4'>
            <Input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Nombre *"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              width='100%'
            />
            {touched.firstname && errors.firstname && (
              <Box className="alert alert-danger" role="alert" mt='2'>
                {errors.firstname}
              </Box>
            )}
          </Flex>

          <Flex as='div' flexDirection='column' mb='4'>
            <Input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Apellido *"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              width='100%'
            />
            {touched.lastname && errors.lastname && (
              <Box className="alert alert-danger" role="alert" mt='2'>
                {errors.lastname}
              </Box>
            )}
          </Flex>

          <Flex as='div' flexDirection='column' mb='4'>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              width='100%'
            />
            {touched.email && errors.email && (
              <Box className="alert alert-danger" role="alert" mt='2'>
                {errors.email}
              </Box>
            )}
          </Flex>

          <Flex as='div' flexDirection='column' mb='4'>
            <Textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Mensaje *"
              bg={colors.color2}
              value={values.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              width='100%'
            />
            {touched.mensaje && errors.mensaje && (
              <Box className="alert alert-danger" role="alert" mt='2'>
                {errors.mensaje}
              </Box>
            )}
          </Flex>

          <Flex as='div' mb='4'>
            <Button className="small-button" type="submit" bg={colors.color3} color={colors.color1} width='100%'>
              Enviar
            </Button>
          </Flex>
        </Box>
      </Box>
    
      )
      }
    </Formik>
    )
}

export default Contacto