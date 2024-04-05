import "./footer.css";
import Twitter from "../../../public/images/Twitter.svg";
import Linkedin from "../../../public/images/Linkedin.svg";
import Instagram from "../../../public/images/Instagram.svg";
import Facebook from "../../../public/images/Facebook.svg";

export function Rodape() {
    return (
        <footer>
            <div className="ft-container">
                <div className="ft-lgnsm">
                    <img className="logo" src="../logo-complete.svg" alt="" />
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