import "./navbar.css";
import Logo from "../../../public/images/logo-elysian.svg";

export function Navbar() {
    return (
        <div className="menu">
            <ul className="options1">
                <li>Fale Conosco</li>
                <li>Investimentos</li>
            </ul>
            <img src={ Logo } alt="" />
            <ul className="options2">
                <li>Sobre nós</li>
                <li>Minha conta</li>
            </ul>
        </div>
    )
}