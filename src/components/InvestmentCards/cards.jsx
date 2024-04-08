/* importando css e REACT */
import React from "react";
import "./cards.css";

// opções de tipos de investimento
const opcoesTipoInvestimento = {
    fundoInvestimento: "Fundo de Investimento",
    cdb: "CDB",
    lci: "LCI",
    lca: "LCA",
    tesouroDireto: "Tesouro Direto",
    acao: "Ações de Empresa",
    longo: "Longo Prazo",
    medio: "Médio Prazo",
    curto: "Curto Prazo",
    muitoBaixo: "Muito Baixo",
    baixo: "Baixo",
    medio: "Médio",
    alto: "Alto",
    muitoAlto: "Muito Alto",
};

// componente de exibição dos investimentos mais recentes
export function InvCards({ investmentData, investmentList }) {
    // verifica se investmentList está definida e não está vazia
    if (!investmentList || investmentList.length === 0) {
        return null; // não renderiza nada se investmentList estiver vazia
    }

    // ordena a investmentList por createdAt em ordem descendente
    const sortedInvestments = investmentList.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    // obtém os três últimos itens da lista ordenada
    const latestInvestments = sortedInvestments.slice(0, 3);

    return (
        <section className="createInv">
            <div className="title">
                <h2>últimos investimentos...</h2>
                <p>estes foram os seus três últimos investimentos</p>
            </div>
            <div className="invcards">
                {latestInvestments.map((investment, index) => (
                    <div key={index} className="invcard">
                        <h3>{investment.nameInvestor}</h3>
                        <p>email: {investment.email}</p>
                        <p>telefone: {investment.tel}</p>
                        <p>tipo de investimento: {opcoesTipoInvestimento[investment.typeInvest]}</p>
                        <p>valor investido: R$ {investment.valorInvest}</p>
                        <p>duração prevista: {opcoesTipoInvestimento[investment.term]}</p>
                        <p>risco: {opcoesTipoInvestimento[investment.risk]}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
