/* importando componentes utilizados para a construção da página */
import { SguIntro } from "../../components/SignImg/signimg.jsx";
import { SguForms } from "../../components/SignForms/signform.jsx";
import "./Cadastro.css";

// componente funcional que representa a página de cadastro
export function Cadastro() {
    return (
        <main className="content">
            {/* container para o conteúdo de cadastro */}
            <div className="sg-container">
                {/* componente para a introdução ou imagem relacionada ao cadastro */}
                <SguIntro />

                {/* componente para o formulário de cadastro */}
                <SguForms />
            </div>
        </main>
    )
}
