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
1) En el header o navbar tengo varias etiquetas <Link> (de react-scroll), pero la que dice 'Portafolio' no la pude hacer responsive en la misma linea, para cambiarle el tamaño de fuente. Averiguando, vi que hay que escribir un css para lograr esto. Usted nos dijo que nos olvidaramos del css. Por eso dejé esto con tamaño único