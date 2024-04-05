import "./fqforms.css";

export function FqForms(){
    return(
        <div class="fc-form">
            <h2>Deixe sua mensagem!</h2>
            <form action="">
                <div class="fc-nomenemail">
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome" />
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div class="fc-telnopt">
                    <input type="text" name="tel" id="tel" placeholder="Digite o seu telefone" />
                    <select name="tema" id="tema">
                        <option value="opt0">Selecione o tema:</option>
                        <option value="opt1">Consultoria</option>
                        <option value="opt2">Atendimento ao Cliente</option>
                        <option value="opt3">Empréstimos e Financiamentos</option>
                        <option value="opt4">Cartões de Crédito e Débito</option>
                        <option value="opt5">Soluções Empresariais</option>
                        <option value="opt6">Feedbacks</option>
                    </select>
                </div>
                <input type="text" name="msg" id="msg" />
            </form>
        </div>
    ) 
}