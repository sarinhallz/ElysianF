/* importando componentes utilizados para a construção da página */
import { Navbar } from "../components/Navbar/navbar.jsx"
import { Rodape } from "../components/Footer/footer.jsx";
import { FormInvestiment } from "../components/Investments/investform.jsx";
import { InvCards } from "../components/InvestmentCards/cards.jsx";
import { InvAbout } from "../components/InvText/invtext.jsx";
import { InvIntrod } from "../components/InvIntro/invintro.jsx";

// componente funcional que representa a página de Investimentos
export function Investments() {
    return (
        <main className="content">
            {/* renderiza a barra de navegação na parte superior */}
            <Navbar />

            {/* renderiza a introdução aos investimentos */}
            <InvIntrod />

            {/* renderiza informações detalhadas sobre os investimentos */}
            <InvAbout />

            {/* renderiza o formulário para adicionar novos investimentos */}
            <FormInvestiment />

            {/* renderiza os cards de investimento com dados recentes */}
            <InvCards />

            {/* renderiza o rodapé da página */}
            <Rodape />
        </main>
    )
}
