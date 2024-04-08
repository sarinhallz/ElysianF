// importando do arquivo de estilos CSS
import "./fqasks.css";

// componente para exibir perguntas frequentes na página Fale Conosco
export function FqAsks() {
    return (
        <div class="fc-perguntas"> {/* div que envolve todo o conteúdo */}
            <h2>Perguntas frequentes</h2> {/* título das perguntas frequentes */}
            {/* primeira pergunta */}
            <h3>Como posso entrar em contato com o Elysian Financials?</h3>
            <p>
                Você pode entrar em contato conosco de várias maneiras para obter assistência ou tirar dúvidas. Utilize o formulário de contato disponível nesta página para nos enviar uma mensagem detalhada sobre sua consulta ou solicitação. Se preferir, você também pode enviar um <span style={{ color: '#097467'}}>e-mail diretamente para nossa equipe de atendimento ao cliente em info@elysianfinancials.com</span>. Além disso, estamos disponíveis para atendê-lo pelo telefone no <span style={{ color: '#097467'}}>número (11) 3030-9857</span> durante o nosso horário de atendimento padrão, <span style={{ color: '#097467'}}>de segunda a sexta-feira, das 9h às 18h</span>. Estamos aqui para ajudá-lo da melhor forma possível e aguardamos o seu contato.
            </p>
            {/* segunda pergunta */}
            <h3>Quais são os horários de atendimento do Elysian Financials?</h3>
            <p>
                O Elysian Financials tem o prazer de atendê-lo de <span style={{ color: '#097467'}}>segunda a sexta-feira, das 9h às 18h e aos sábados, das 9h às 12h</span>. Durante esse período, nossa equipe está disponível para ajudá-lo com consultas, dúvidas, solicitações e suporte técnico.
            </p>
            {/* terceira pergunta */}
            <h3>Quais são as opções de atendimento disponíveis para clientes corporativos?</h3>
            <p>
                Para clientes corporativos, oferecemos atendimento personalizado através de nossos gerentes de relacionamento. Para <span style={{ color: '#097467'}}>mais informações ou para agendar uma reunião com um gerente de relacionamento, entre em contato conosco pelo e-mail corporate@elysianfinancials.com ou pelo telefone (11) 3030-9857.</span>
            </p>
        </div>
    );
}
