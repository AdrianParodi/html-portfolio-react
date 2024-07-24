import './normalize.css'
// import '@fortawesome/fontawesome-free/css/all.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import theme from './themes/themes.js';

import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
import SobreMi from './Component/SobreMi/SobreMi.jsx'

// import Footer from './Component/Footer/Footer.jsx'

// import Habilidades from './Component/Habilidades/Habilidades.jsx'
// import Proyectos from './Component/Proyectos/Proyectos.jsx'
// import Servicios from './Component/Servicios/Servicios.jsx'
// import Testimonios from './Component/Testimonios/Testimonios.jsx'
// import Contacto from './Component/Contacto/Contacto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
      <main>
        <Header/>
        <Hero/>
        <SobreMi/>
        {/*<Habilidades/>
        <Proyectos/>
        <Servicios/>
        <Testimonios/>
        <Contacto/>
        <Footer/> */}
    </main>
  </ChakraProvider>
)
