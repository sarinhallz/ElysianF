// importações de estilos e imagem
import "./invtext.css";
import Inv from "/public/images/inv-img.svg";

// definição do componente InvAbout para exibir informações sobre investimentos
export function InvAbout() {
    return (
        <div className="inv-text">
            {/* título e parágrafos sobre investimentos */}
            <h2>O que são investimentos?</h2>
            <p>
                Os investimentos são produtos emitidos pelas instituições financeiras, empresas ou pelo próprio governo com o objetivo de captar recursos de forma mais barata que os empréstimos bancários.
            </p>
            <p>
                Em troca, eles oferecem uma taxa de rentabilidade ou benefícios, como se tornar sócio do negócio e recebimento de proventos.
            </p>
            {/* imagem relacionada aos investimentos */}
            <img src={Inv} alt="Investimentos" />
            <p>
                Por exemplo: investir em ações é como comprar pedacinhos de uma empresa; em títulos públicos é como comprar uma fatia da dívida do Tesouro Nacional. Na prática, sempre que você investe, está comprando alguma coisa: seja uma parte de algo físico ou um direito.
            </p>
            {/* título e parágrafos sobre tipos de investimentos */}
            <h2>Tipos de investimentos</h2>
            <p>
                É possível dividir os investimentos de diversas maneiras. Porém, de forma básica, existem dois grandes tipos de investimentos: os de renda fixa e os de renda variável.
            </p>
            <p>
                Renda fixa: Os investimentos de renda fixa têm uma remuneração ou retorno financeiro conhecido no momento da aplicação. Nessa modalidade, o investidor pode saber exatamente quanto vai receber depois do prazo de vencimento ou conhecer qual é o índice que essa aplicação acompanha e, assim, é possível prever mais ou menos como ficará seus ganhos. Alguns exemplos são:
            </p>
            {/* lista de investimentos de renda fixa */}
            <div className="renda-fix">
                <p>Certificados de Depósito Bancário (CDBs);</p>
                <p>Títulos do Tesouro Direto;</p>
                <p>Letras de Crédito (LCI e LCA);</p>
                <p>Debêntures;</p>
                <p>Fundos de Investimentos de Renda Fixa.</p>
            </div>
            <p>
                Renda variável: Já nessa modalidade, o investidor não consegue prever seus ganhos, pois a rentabilidade desse tipo de investimento depende de diversos fatores, como a saúde da empresa por trás da aplicação, o momento do mercado, o cenário externo e outros indicadores. Como exemplos temos:
            </p>
            {/* lista de investimentos de renda variável */}
            <div className="renda-var">
                <p>Ações de empresas;</p>
                <p>Cotas de Fundos Imobiliários;</p>
                <p>Contratos futuros;</p>
                <p>Contratos de derivativos;</p>
                <p>Fundos de Investimento Multimercados;</p>
                <p>Fundos de Ações.</p>
            </div>
        </div>
    );
}
