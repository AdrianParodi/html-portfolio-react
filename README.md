# Desarrollo de Portafolio en React 

En este repositorio se puede encontrar mi implementacion personal del siguiente portafolio:

https://dribbble.com/shots/22636222-Portfolio-design

El proyecto se desarrolló en React, una biblioteca de Javascript diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

Las distintas secciones de la página web fueron separadas en lo que se denominan Componentes en React. Cada componente tiene sus propios archivos .jsx y .css asociados. Además, se generaron  componentes para representar tarjetas dentro del sitio, como los Servicios o las Habilidades. 

La ventaja de React es que el código se puede reutilizar sin tener que duplicar tanto codigo HTML. 

## Deployment
El deployment de la página web se realizó utilizando Vercel, que permite generar una conexión con un proyecto de github desarrollado en React y generar la página web. Cabe mencionar que el deployment del proyecto utilizando solamente Github no es posible, ya que los node modules del proyecto no son subidos a Github al realizar los distintos push.

Se puede acceder a la página web implementada en el siguiente link:

https://html-portfolio-react-q7azpt9t2-adrian-parodis-projects.vercel.app/


#### Se instalaron Chakra, Formik y Yup
### Tambien react-scroll. Hablar del uso de UseState y useEffect junto con el menú de Chakra, para controlar los desplazamientos dentro del sitio.


Algunos problemas encontrados:
1) Tuve problemas al aplicar estilos globales para botones en el archivo themes.js. Especificamente, el comportamiento del _hover, me deja cambiar el color del texto al hacer hover, pero NO el color del background, me aparece un color gris por defecto, pero no encontré forma de sobreescribir eso globalmente. Obviamente, podría haber ido botón por botón y agregarle este comportamiento; de hecho probé hacerlo así y funciona. Pero decidí quitar eso, primero para que observe el problema que tengo y en segundo lugar porque me parece que tener eso es contraproducente para la mantenibilidad futura del sitio. 
Solo modifiqué el botón "Consultar Servicios Disponibles" porque ahí además tengo unos iconos que necesitaba cambiar de color. Eso sí lo hice, la lógica sería igual para los otros botones...  Si puede darme una mano para entender porque no pude cambiar eso de manera global, sería de gran ayuda. Gracias!