/* importando arquivo css e imagem necessária */
import "./fqintro.css";
import FqImg from "/public/images/fc-img.svg"

// componente de introdução para a página Fale Conosco
export function FqIntro() {
    return (
        <main className="content">
            {/* seção de introdução */}
            <div class="intro">
                {/* imagem de introdução */}
                <img src={ FqImg } alt="" />
            </div>
        </main>
    )
}
