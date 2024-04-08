/* importando componentes utilizados para a construção da página */
import { Navbar } from "../components/Navbar/navbar.jsx"
import { Intro } from "../components/Intro/intro.jsx";
import { Resources } from "../components/Recursos/resources.jsx";
import { Rodape } from "../components/Footer/footer.jsx";
import { Anuidade } from "../components/Anuidade/anuidade.jsx";

// componente funcional que representa a página inicial
export function Home() {
    return (
        <main className="content">
            {/* renderiza a barra de navegação na parte superior */}
            <Navbar />

            {/* renderiza a introdução à página */}
            <Intro />

            {/* renderiza os recursos disponíveis */}
            <Resources />

            {/* renderiza informações sobre a anuidade */}
            <Anuidade />

            {/* renderiza o rodapé da página */}
            <Rodape />
        </main>
    )
}
