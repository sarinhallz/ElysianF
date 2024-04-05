import "./abhistory.css";
import Inauguration from "../../../public/images/ab-1.svg";
import Start from "../../../public/images/ab-2.svg";
import Nowdays from "../../../public/images/ab-3.svg";

export function History() {
    return(
        <div class="history">
                <h2>Raízes da Excelência: Jornada do Elysian</h2>
                <p>
                    No ano de 1985, em meio a um cenário financeiro marcado por desafios e oportunidades, nasceu a lenda
                    do
                    Elysian Financials. Fundada por Alexander Hawthorne, um jovem empreendedor visionário, a instituição
                    surgiu como um farol de excelência, inovação e compromisso inabalável com os clientes.
                </p>
                <img src={Inauguration} alt="" />
                <p>
                    Tudo começou quando Alexander, após anos de experiência e aprendizado no setor financeiro, percebeu
                    uma
                    lacuna no mercado: a falta de uma instituição que combinasse tradição, transparência e expertise
                    personalizada. Movido por sua visão audaciosa, ele decidiu dar vida ao Elysian Financials, onde cada
                    detalhe seria meticulosamente planejado para proporcionar uma experiência única e transformadora aos
                    clientes.
                </p>
                <p>
                    No início de 1985, as portas do Elysian Financials se abriram pela primeira vez, marcando o início
                    de
                    uma jornada que ecoaria pelos anos seguintes. Com uma equipe talentosa e comprometida ao seu lado,
                    Alexander estabeleceu um padrão de excelência que rapidamente chamou a atenção do mundo financeiro.
                </p>
                <img src={ Start } alt="" />
                <p>
                    À medida que a reputação do Elysian Financials crescia, mais e mais clientes confiavam na
                    instituição
                    para cuidar de suas necessidades financeiras. Investidores, empresas e indivíduos buscavam os
                    serviços
                    do Elysian, atraídos pela promessa de uma abordagem única, focada em resultados e em construir
                    relacionamentos sólidos a longo prazo.
                </p>
                <p>
                    Com o passar dos anos, o Elysian Financials expandiu suas operações, incorporando novas tecnologias,
                    aprimorando seus serviços e mantendo-se à frente das tendências do mercado. A visão estratégica de
                    Alexander, aliada ao compromisso inabalável com a qualidade e a ética, solidificou o Elysian como
                    uma
                    das principais instituições financeiras do país.
                </p>
                <img src={ Nowdays } alt="" />
            </div>
    )
}