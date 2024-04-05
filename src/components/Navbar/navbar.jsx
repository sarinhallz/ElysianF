import "./navbar.css";
import Logo from "/public/images/logo.svg";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="menu">
            <ul className="options1">
                <li><Link to="/faleconosco">Fale Conosco</Link></li>
                <li><Link to="">Investimentos</Link></li>
            </ul>
            <Link to="/"><img src={ Logo } alt="" /></Link>
            <ul className="options2">
                <li><Link to="/sobre">Sobre nós</Link></li>
                <li><Link to="/cadastro">Minha conta</Link></li>
            </ul>
        </div>
    )
}