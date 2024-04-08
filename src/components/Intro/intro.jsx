/* importando componentes necessários */
import { Link } from "react-router-dom";
import "./intro.css";
import Introduction from "/public/images/img-intro.svg";

// componente de introdução à página inicial
export function Intro(){
    return(
        <div className="entrance">
            <div className="textNbtn">
                {/* seção de texto */}
                <div className="text">
                    <p>na <span>elysian financials</span>, elevamos sua prosperidade e segurança financeira para um novo patamar.</p>
                    <p>junte-se a nós e descubra uma nova era de <span>excelência financeira</span>.</p>
                </div>
                {/* botão para criar uma conta */}
                <div className="btn-create">
                    <Link to="/cadastro"><button>abra uma conta</button></Link>
                </div>
            </div>
            {/* imagem de introdução */}
            <div className="image">
                <img src={ Introduction } alt="" />
            </div>
        </div>
    );
}
