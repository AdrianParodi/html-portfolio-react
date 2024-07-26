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
          fontSize: ['2xl','3xl','4xl'],
          fontWeight: 'bold',
          color: 'color2'
        },
        'h2': {
          fontSize: ['lg','xl','2xl'],
          fontWeight: 'semibold',
        //   color:'none'
        },
        'h3': {
          fontSize: 'sm',
          fontWeight: 'semibold',
        },
        'p': {
          fontSize: ['md','md','lg'],
          lineHeight: ['25px','30px','35px','40px'],
          color: 'color2'
        },
        'section': {
          px: ['2%', '4%', '8%', '10%', null, '15%'],
        },

        'body': {
          bg: 'color1'
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
