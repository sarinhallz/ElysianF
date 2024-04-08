/* importando arquivo css e imagem necessários */
import "./anuidade.css";
import Zero from "/public/images/zero-anuidade.svg";

// componente para renderizar a seção de Zero Anuidade
export function Anuidade() {
    return (
        <div className="anuidade"> {/* div principal para a seção de Zero Anuidade */}
            <div className="text"> {/* container para o texto informativo */}
                <h2>Zero anuidade</h2> {/* título da seção */}
                <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p> {/* texto informativo */}
            </div>
            <div className="image"> {/* container para a imagem */}
                <img src={ Zero } alt="Zero Anuidade" /> {/* imagem Zero Anuidade */}
            </div>
        </div>
    );
}
