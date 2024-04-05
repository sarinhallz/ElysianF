import "./owner.css";
import CEO from "../../../public/images/owner.svg";

export function Owner() {
    return (
        <div class="ab-owner">
            <div class="abo-title">
                <h2>A Saga de Alexander Hawthorne: O Visionário do Mundo Financeiro</h2>
            </div>

            <div class="abo-content">
                <img src={ CEO } alt="" />
                    <div class="ab-textnbutton">
                        <p>
                            Alexander Hawthorne foi um visionário do mundo financeiro, reconhecido por sua visão
                            estratégica, determinação implacável e paixão por inovação. Nascido em uma família de classe
                            média, desde cedo demonstrou um interesse notável por números e finanças. Sua jornada foi
                            marcada por resiliência e busca por conhecimento, mergulhando nos estudos de economia,
                            mercados
                            financeiros e gestão de investimentos.
                        </p>
                        <p>
                            Com o tempo, Alexander se destacou como um líder nato, trabalhando arduamente em várias
                            posições
                            dentro do setor financeiro e construindo uma rede valiosa de contatos. Em meio a um cenário
                            de
                            turbulência econômica, sua visão clara o levou a fundar o Elysian Financials, uma
                            instituição
                            guiada por princípios sólidos, transparência e compromisso com os clientes.
                        </p>
                        <p>
                            Sob sua liderança, o Elysian Financials enfrentou desafios e prosperou, construindo uma
                            reputação de confiança, qualidade e resultados excepcionais. Alexander se tornou um ícone do
                            mundo financeiro, inspirando outros com sua determinação, visão estratégica e paixão por
                            fazer
                            a...
                        </p>
                        <button>Saiba Mais</button>
                    </div>
            </div>
        </div>
    )
}