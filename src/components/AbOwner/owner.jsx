/* importando arquivo css e imagem necessários*/
import "./owner.css";
import CEO from "/public/images/owner.svg";

// componente para renderizar a seção sobre o CEO Alexander Hawthorne
export function Owner() {
    return (
        <div className="ab-owner"> {/* div principal para a seção do CEO */}
            <div className="abo-title"> {/* container para o título */}
                <h2>A Saga de Alexander Hawthorne: O Visionário do Mundo Financeiro</h2> {/* título da seção */}
            </div>

            <div className="abo-content"> {/* container para o conteúdo */}
                <img src={ CEO } alt="CEO" /> {/* imagem do CEO */}
                <div className="ab-textnbutton"> {/* container para o texto e botão */}
                    <p>
                        Alexander Hawthorne foi um visionário do mundo financeiro, reconhecido por sua visão
                        estratégica, determinação implacável e paixão por inovação. Nascido em uma família de classe
                        média, desde cedo demonstrou um interesse notável por números e finanças. Sua jornada foi
                        marcada por resiliência e busca por conhecimento, mergulhando nos estudos de economia,
                        mercados financeiros e gestão de investimentos.
                    </p>
                    <p>
                        Com o tempo, Alexander se destacou como um líder nato, trabalhando arduamente em várias
                        posições dentro do setor financeiro e construindo uma rede valiosa de contatos. Em meio a um
                        cenário de turbulência econômica, sua visão clara o levou a fundar o Elysian Financials, uma
                        instituição guiada por princípios sólidos, transparência e compromisso com os clientes.
                    </p>
                    <p>
                        Sob sua liderança, o Elysian Financials enfrentou desafios e prosperou, construindo uma
                        reputação de confiança, qualidade e resultados excepcionais. Alexander se tornou um ícone do
                        mundo financeiro, inspirando outros com sua determinação, visão estratégica e paixão por fazer
                        a...
                    </p>
                    <button>Saiba Mais</button> {/* botão para saber mais */}
                </div>
            </div>
        </div>
    );
}
