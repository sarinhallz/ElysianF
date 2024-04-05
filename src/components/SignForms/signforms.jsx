import "./signforms.css"
import "./signforms.js"

export function SguForms() {
    return (
        /* área de dados de cadastro */
        <div class="sg-data">
            {/* boas vindas */}
            <h2>Welcome to <span style="color:#097467;">Elysian Financials!</span></h2>
            <p>We're glad to have you here</p>

            {/* formulário */}
            <form class="sg-form" id="sg-form" action="">
                <input type="text" name="name" id="name" placeholder="Digite seu nome" />
                <input type="text" name="rg" id="rg" placeholder="Digite seu RG" />
                <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF" />
                <input type="text" name="tel" id="tel" placeholder="Digite seu telefone" />
                <input type="text" name="end" id="end" placeholder="Digite seu endereço" />
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />

                <div class="password">
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" />
                    <input type="password" name="confsenha" id="confsenha" placeholder="Confirme sua senha" />
                </div>

                {/* mensagem de erro */}
                <div class="error-msg" id="pass-error"></div>

                {/* termos de uso e politica de privacidade */}
                <div class="termos">
                    <div class="t-textncheck">
                        <input type="checkbox" name="terms" id="terms" />
                        <p>Eu li e concordo com os <span style="color:#097467; cursor: pointer;">termos de uso</span> e com a <span style="color:#097467; cursor: pointer;">política de privacidade</span></p>
                    </div>
                    <div class="error-msg" id="terms-error"></div>
                </div>
                {/* botão de cadastro */}
                <button class="sg-btn" type="submit">Cadastrar</button>
            </form>
        </div>
    )
}