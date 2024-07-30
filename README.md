#Portafolio en React 

En este repositorio se puede encontrar mi implementación personal del siguiente portafolio:

https://dribbble.com/shots/22636222-Portfolio-design

El proyecto se desarrolló en React, una biblioteca de Javascript diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

Las distintas secciones de la página web fueron separadas en lo que se denominan **Componentes** en React. Cada componente tiene su propios archivos .jsx asociado. Además, se generaron componentes para representar tarjetas dentro del sitio, como los Servicios o las Habilidades. La ventaja de React es que el código se puede reutilizar sin tener que repetir tanto codigo HTML. 

Por otro lado, los estilos fueron definidos dentro de cada etiqueta, lo que permite manejar de manera simple y localizado el diseño responsive de diferentes etiquetas, aunque tenemos el problema de que las etiquetas pueden quedar muy cargadas de atributos. Las etiquetas de html fueron reemplazadas por etiquetas de Chakra, es decir, se hizo una migración a elementos de esa librería.

## Paquetes instaldos 
En este proyecto se instalaron las siguientes librerias
**Chakra**: para estilos y diseño responsive
**Formik y Yup**: para la generacion del formulario de contacto y esquema de validación de inputs
**Emailjs**: para enviar los datos cargados por el usario a una casilla de correo personal.
**React-scroll**: permite producir desplazamientos suaves entre distintas secciones del sitio web. Hacen uso de useEffect and useState


## Deployment
El deployment de la página web se realizó utilizando Vercel, que se conecta con un proyecto de github desarrollado en React y permite generar la página web con toda la funcionalidad de React. Cabe mencionar que el deployment del proyecto utilizando solamente Github no es posible, ya que los node modules del proyecto no son subidos a Github al realizar los distintos push.

Se puede acceder a la página web implementada en el siguiente link:
https://html-portfolio-react-ehnf2zfq9-adrian-parodis-projects.vercel.app/

Alternativamente, se puede acceder a la seccion *Deployments* en la barra derecha de esta sección, y ahí ingresar al link que aparece en el cuadro **"Production"**.

### Algunos problemas encontrados:
1) Tuve problemas al aplicar estilos globales para botones en el archivo themes.js. Especificamente, el comportamiento del _hover, me deja cambiar el color del texto al hacer hover, pero NO el color del background, me aparece un color gris por defecto, pero no encontré forma de sobreescribir eso globalmente. Obviamente, podría haber ido botón por botón y agregarle este comportamiento; de hecho probé hacerlo así y funciona. Pero decidí quitar eso, primero para que observe el problema que tengo y en segundo lugar porque me parece que tener eso es contraproducente para la mantenibilidad futura del sitio. 
Solo modifiqué el botón "Consultar Servicios Disponibles" porque ahí además tengo unos iconos que necesitaba cambiar de color. Eso sí lo hice, la lógica sería igual para los otros botones...  Si puede darme una mano para entender porque no pude cambiar eso de manera global, sería de gran ayuda. Gracias!

2) También tuve inconvenientes al aplicar estilos al menú desplegable en las versiones para dispositivos pequeños. El menú aparece desde el medio de la pantalla hacia la derecha. Quise hacer que se alinee a la izquierda, ocupando todo el ancho de pantalla y cambiar el color de fondo, color de la fuente y demás. Pero no tuve exito. Sospecho que hay algún estilo que está interfiriendo con esto. Pero no conseguí verlo.
