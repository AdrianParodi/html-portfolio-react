import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Flex, Box, Button, Textarea, Input, Text } from '@chakra-ui/react';
import { colors } from '../../themes/themes.js';

const Contacto = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const initialValues = {
    first_name: '',
    last_name: '',
    user_email: '',
    message: '',
  };

  const validationSchema = yup.object({
    first_name: yup.string().required("Complete este campo"),
    last_name: yup.string().required("Complete este campo"),
    user_email: yup.string().email("Se requiere de un email válido").required("Complete este campo"),
    message: yup.string().required("Complete este campo")
  });

  const onSubmit = (values, { resetForm }) => {
    emailjs.send(
      'service_3u6xvb9',
      'template_wbe1e8i',
      values,
      'vKAmbJer8s-j2FRxm'
    ).then((response) => {
      console.log('Envío Exitoso!', response.status, response.text);
      setSuccessMessage('El formulario se ha enviado correctamente.');
      resetForm(); // Limpia el formulario
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Oculta el mensaje después de 5 segundos
    }).catch((error) => {
      console.log('FAILED...', error);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur
      }) => (
        <Box as='section' className="contacto" id="contacto" display='flex' flexDirection='column'>
          <Flex as='div' mb='1.2em'>
            <h1>Contacto</h1>
          </Flex>
          <Box as={Form} className="formulario" onSubmit={handleSubmit} width={['94%', '94%', '50%']} alignSelf='center'>
            <Flex as='div' flexDirection='column' mb='1'>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Nombre *"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                bg={colors.color2}
              />
              <Box role="alert" mt='0.1em' minHeight='1.7em' color={colors.color3}>
                {touched.first_name && errors.first_name ? errors.first_name : ' '}
              </Box>
            </Flex>

            <Flex as='div' flexDirection='column' mb='1'>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Apellido *"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                bg={colors.color2}
              />
              <Box className="alert alert-danger" role="alert" mt='0.1em' minHeight='1.7em' color={colors.color3}>
                {touched.last_name && errors.last_name ? errors.last_name : ' '}
              </Box>
            </Flex>

            <Flex as='div' flexDirection='column' mb='1'>
              <Input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Email *"
                value={values.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                bg={colors.color2}
              />
              <Box className="alert alert-danger" role="alert" mt='0.1em' minHeight='1.7em' color={colors.color3}>
                {touched.user_email && errors.user_email ? errors.user_email : ' '}
              </Box>
            </Flex>

            <Flex as='div' flexDirection='column' mb='2'>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Mensaje *"
                bg={colors.color2}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                minHeight='8em'
              />
              <Box role="alert" mt='0.1em' minHeight='1.7em' color={colors.color3}>
                {touched.message && errors.message ? errors.message : ' '}
              </Box>
            </Flex>

            <Flex as='div' mb='4' justifyContent='center'>
              <Button className="small-button" type="submit" bg={colors.color3} color={colors.color1} width={['60%', '50%', '45%', '40%', '30%']} borderRadius='20px'>
                Enviar
              </Button>
            </Flex>
            
            <Flex minHeight='4em' justifyContent='center'>
            {successMessage && (
              <Text color="green.500" mt="1" textAlign="center">{successMessage}</Text>
            )}
            </Flex>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default Contacto;
