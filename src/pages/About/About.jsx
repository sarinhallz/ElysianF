/* importando componentes utilizados para a construção da página */
import "./About.css";
import { History } from "../../components/AbHistory/abhistory";
import { AbIntro } from "../../components/AbIntro/abintro";
import { Navbar } from "../../components/Navbar/navbar";
import { Owner } from "../../components/AbOwner/owner";
import { Rodape } from "../../components/Footer/footer";

// componente funcional que representa a página da história da empresa (sobre nós)
export function AboutUs(){
    return(
        // o conteúdo principal da página está dentro da tag main com a classe "content"
        <main className="content">
            {/* renderiza a Navbar para a navegação */}
            <Navbar />

            {/* renderiza o componente AbIntro para a introdução */}
            <AbIntro />

            {/* container para o conteúdo da história e informações do proprietário */}
            <div className="abcontainer">
                {/* renderiza o componente History para exibir a história */}
                <History />

                {/* renderiza o componente Owner para exibir informações sobre o proprietário */}
                <Owner />
            </div>

            {/* renderiza o componente Rodape para o rodapé da página */}
            <Rodape />
        </main>
    )
}