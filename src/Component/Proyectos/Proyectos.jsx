import './Proyectos'

const Proyectos=()=>{
    return(
        <section id="proyectos">
            <h1>Proyectos</h1>
            {/* <!-- Subseccion con los cuadros amarillos e íconos --> */}
            <section className="proyectos" >
            <div>
                <h1>Backend de aplicaciones</h1>
                <p>Desarrollo de funcionalidades para las aplicaciones 
                <a href="https://play.google.com/store/search?q=simulador%20gps&c=apps&hl=en_US&gl=US" target="_blank">Simulador GPS</a> y 
                
                <a href="https://play.google.com/store/apps/details?id=com.tweetdownloader&hl=en_US&gl=US" target="_blank">Tweet Downloader</a></p>
            </div>
            
            <div>
                <h1>ReactorD</h1>
                <p>Colaborador principal en el desarrollo del  paquete <a href="https://github.com/SalvadorBrandolin/reactord" target="_blank">ReactorD</a> para el diseño de reactores en Python</p>
            </div>

            <div>
                <h1>Diseño web</h1>
                <p>Landing Pages. Aquí puedes ver un ejemplo</p>
                <a href="https://adrieto.github.io/image-based-web-project/" target="_blank"> Ver Landing Page</a>
            </div>
            </section>   
        </section>
    )
}

export default Proyectos