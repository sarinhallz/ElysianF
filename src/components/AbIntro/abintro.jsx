/* importando arquivo css e imagem necessários */
import "./abintro.css";
import IntroImg from "/public/images/sn-img.svg";

// componente para renderizar a introdução
export function AbIntro() {
    return (
        <div className="intro"> {/* div principal para a introdução */}
            <img src={ IntroImg } alt="Introdução" /> {/* imagem da introdução */}
        </div>
    );
}
