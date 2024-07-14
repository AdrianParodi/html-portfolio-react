import './Header.css'

import bumeran from '/img/Imagen-navbar.png'

const Header=()=>{
    return(
        <header>
            <div className="header-container">
                <div className="header-izq">
                    <p>Portafolio</p>
                    <img src={bumeran} alt=""/>
                </div>
                <nav>
                    <a href="#hero">Principal</a>
                    <a href="#sobre-mi">Sobre</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#testimonios">Testimonios</a>
                    <a href="#contacto">Contacto</a>
                    <i className="bi bi-list"></i>
                </nav>
                <div className="div-boton">
                    <a href="#contacto">
                        <button className="small-button">Contratarme</button>
                    </a>  
                </div>
            </div>
        </header>

    )
}

export default Header