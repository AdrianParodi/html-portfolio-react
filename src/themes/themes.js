import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
      body: "Mona sans, Helvetica Neue, Helvetica, sans-serif",
      heading: "Mona sans, Helvetica Neue, Helvetica, sans-serif",
    },
    colors: {
      color1: 'rgb(16,24,32)',  // "Negro"
      color2: 'rgb(249,249,249)', // "Blanco"
      color3: 'rgb(254,231,21)', // "Amarillo"
    },
    styles: {
      global: {
        'h1': {
          fontSize: '4xl',
          fontWeight: 'bold',
          color: 'color2'
        },
        'h2': {
          fontSize: '2xl',
          fontWeight: 'semibold',
        //   color:'none'
        },
        'h3': {
          fontSize: 's',
          fontWeight: 'semibold',
        },
        'p': {
          fontSize: 'lg',
          lineHeight: '40px',
          color: 'color2'
        },
        'section': {
          paddingX: '10%',
        },
        'body': {
          bg: 'color1',  // Usa el color definido en el objeto colors
        },
        'button':{
            bg: 'color3',
            color: 'color1'
        }
      },
    },
  });

  export default theme

  // Definir colores en formato rgb()
export const colors = {
    color1: 'rgb(16,24,32)',  // "Negro"
    color2: 'rgb(249,249,249)', // "Blanco"
    color3: 'rgb(254,231,21)', // "Amarillo"
};
