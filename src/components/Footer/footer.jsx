import "./footer.css";
import Logo from "../../../public/images/logo-complete.svg"
import Twitter from "../../../public/images/Twitter.svg";
import Linkedin from "../../../public/images/Linkedin.svg";
import Instagram from "../../../public/images/Instagram.svg";
import Facebook from "../../../public/images/Facebook.svg";

export function Rodape() {
    return (
        <footer>
            <div className="ft-container">
                <div className="ft-lgnsm">
                    <img className="logo" src={ Logo } alt="" />
                    <h4>SITEMAP</h4>
                    <p>Home</p>
                    <p>Fale Conosco</p>
                    <p>Investimentos</p>
                    <p>Quem somos</p>
                    <p>Minha Conta</p>
                </div>
                <div className="ft-cnt">
                    <h4>CONTACT US</h4>
                    <p>Rua das Fiandeiras, Vila Olímpia, São Paulo - SP</p>
                    <a href="https://maps.app.goo.gl/b9XsSibmVSLNZ8NZ7">
                        <p>MAP/DIRECTIONS</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2358684243113!2d-46.66013652466999!3d-23.559970778800746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc39f02db3%3A0xc27ded71c57e5202!2sBanco%20Central%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1712326506004!5m2!1spt-BR!2sbr" width="400" height="150"></iframe>
                    </a>
                </div>
                <div className="ft-medias">
                    <h4>FIND US IN SOCIAL MEDIAS</h4>
                    <div className="ft-logos">
                        <img src={ Facebook } alt="Facebook" srcset="" />
                        <img src={ Instagram } alt="Instagram" srcset="" />
                        <img src={ Linkedin } alt="LinkedIn" srcset="" />
                        <img src={ Twitter } alt="Twitter" srcset="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}