// importações de estilos, imagem do logo e Link para navegação
import "./navbar.css";
import Logo from "/public/images/logo.svg";
import { Link } from "react-router-dom";

// definição do componente Navbar para a barra de navegação
export function Navbar() {
    return (
        <div className="menu">
            {/* lista de opções na barra de navegação */}
            <ul className="options1">
                <li><Link to="/contato">Fale Conosco</Link></li>
                <li><Link to="/investimentos">Investimentos</Link></li>
            </ul>
            {/* link para a página inicial com o logo */}
            <Link to="/"><img src={ Logo } alt="Logo" /></Link>
            {/* lista de opções adicionais na barra de navegação */}
            <ul className="options2">
                <li><Link to="/sobre">Sobre nós</Link></li>
                <li><Link to="/cadastro">Minha conta</Link></li>
            </ul>
        </div>
    );
}
