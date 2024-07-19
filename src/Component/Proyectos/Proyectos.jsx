import './Proyectos.css'
import CardProyecto from '../CardProyecto/CardProyecto.jsx'

const Proyectos=()=>{
    const tarjetasProyectos = [
        {titulo:"Backend de aplicaciones" , descripcion: <p>Desarrollo de funcionalidades para las aplicaciones <a href="https://play.google.com/store/search?q=simulador%20gps&c=apps&hl=en_US&gl=US" target="_blank">Simulador GPS</a> y <a href="https://play.google.com/store/apps/details?id=com.tweetdownloader&hl=en_US&gl=US" target="_blank">Tweet Downloader</a></p>},

        {titulo:"ReactorD" , descripcion: <p>Colaborador principal en el desarrollo del  paquete <a href="https://github.com/SalvadorBrandolin/reactord" target="_blank">ReactorD</a> para el diseño de reactores en Python</p>},
        
        {titulo:"Diseño web", descripcion: <p>Landing Pages. Aquí puedes ver un ejemplo <a href="https://adrieto.github.io/image-based-web-project/" target="_blank"><br /> Ver Landing Page</a></p>}
    ]
    
    return(
        <section>
            <h1>Proyectos</h1>
                <div className='contenedor-proyectos'>
                    {tarjetasProyectos.map(tarjetaProyecto => <CardProyecto titulo={tarjetaProyecto.titulo} descripcion={tarjetaProyecto.descripcion}/> 
                )
                }   
                </div>
        </section>
    )
}

export default Proyectos