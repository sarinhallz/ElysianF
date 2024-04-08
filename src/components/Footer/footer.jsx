/* importando o arquivo css e as imagens necessárias */
import "./footer.css";
import Logo from "/public/images/logo-complete.svg"; 
import Twitter from "/public/images/Twitter.svg"; 
import Linkedin from "/public/images/Linkedin.svg";
import Instagram from "/public/images/Instagram.svg";
import Facebook from "/public/images/Facebook.svg";

// componente para renderizar o rodapé
export function Rodape() {
    return (
        <footer> {/* elemento footer que engloba todo o conteúdo */}
            <div className="ft-container"> {/* container principal do rodapé */}
                <div className="ft-lgnsm"> {/* container para o logo e o menu sitemap */}
                    <img className="logo" src={ Logo } alt="Logo" /> {/* logo da empresa */}
                    <h4>sitemap</h4> {/* título para o menu sitemap */}
                    {/* lista de links do menu sitemap */}
                    <p>Home</p>
                    <p>Fale Conosco</p>
                    <p>Investimentos</p>
                    <p>Quem somos</p>
                    <p>Minha Conta</p>
                </div>
                <div className="ft-cnt"> {/* container para informações de contato */}
                    <h4>contact us</h4> {/* título para as informações de contato */}
                    <p>Rua das Fiandeiras, Vila Olímpia, São Paulo - SP</p> {/* endereço */}
                    <a href="https://maps.app.goo.gl/b9XsSibmVSLNZ8NZ7"> {/* link para o mapa */}
                        <p>map/directions</p> {/* texto do link para o mapa */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2358684243113!2d-46.66013652466999!3d-23.559970778800746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc39f02db3%3A0xc27ded71c57e5202!2sBanco%20Central%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1712326506004!5m2!1spt-BR!2sbr" width="400" height="150"></iframe> {/* mapa incorporado */}
                    </a>
                </div>
                <div className="ft-medias"> {/* container para as redes sociais */}
                    <h4>find us in social medias</h4> {/* título para as redes sociais */}
                    <div className="ft-logos"> {/* container para os ícones das redes sociais */}
                        {/* ícones das redes sociais */}
                        <img src={ Facebook } alt="Facebook" />
                        <img src={ Instagram } alt="Instagram" />
                        <img src={ Linkedin } alt="LinkedIn" />
                        <img src={ Twitter } alt="Twitter" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
