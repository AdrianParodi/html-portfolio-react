import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Footer=()=>{
    return(
        <section className="footer-section">
            <div>
            <p>© 2024 - Desarrollado por Adrian Parodi</p>
            </div>
            
            <div className="div-iconos">
            <a href="https://www.linkedin.com/in/adrian-parodi/" target="_blank">
                <i className="fa-brands fa-linkedin footer-icons"></i>
            </a>

            <a href="https://github.com/Adrieto" target="_blank">
                <i className="fa-brands fa-github footer-icons"></i>
            </a>


            <a href="https://www.upwork.com/freelancers/~01dacc95db22177ffa?viewMode=1" target="_blank">
                <i className="fa-brands fa-upwork footer-icons"></i>
            </a>
            </div>
            
            <div>
            <p>parodiadrian3@gmail.com</p>
            </div>
        </section>   
    )
}

export default Footer