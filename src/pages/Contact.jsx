/* importando componentes utilizados para a construção da página */
import { Rodape } from "../components/Footer/footer.jsx";
import { FqAsks } from "../components/FqAsks/fqasks.jsx";
import { FqForms } from "../components/FqForms/fqforms.jsx";
import { FqIntro } from "../components/FqIntro/fqintro.jsx";
import { Navbar } from "../components/Navbar/navbar.jsx";

// componente funcional que representa a página de contato
export function FaleConosco() {
    return (
        <main className="content">
            {/* renderiza a barra de navegação na parte superior */}
            <Navbar />

            {/* renderiza a introdução à página de contato */}
            <FqIntro />

            {/* renderiza o formulário de contato */}
            <FqForms />

            {/* renderiza as perguntas frequentes sobre o contato */}
            <FqAsks />

            {/* renderiza o rodapé da página */}
            <Rodape />
        </main>
    )
}
