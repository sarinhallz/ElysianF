// importações de estilos e imagem
import "./invintro.css";
import InvImg from "/public/images/inv-intro.svg";

// definição do componente InvIntrod para exibir a introdução sobre investimentos
export function InvIntrod() {
    return (
        <main className="content">
            <div className="intro">
                {/* imagem de introdução sobre investimentos */}
                <img src={InvImg} alt="Introdução sobre Investimentos" />
            </div>
        </main>
    );
}
