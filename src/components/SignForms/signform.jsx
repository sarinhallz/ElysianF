// importações necessárias para o componente
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import "./signform.css";

// definição do componente SguForms para o formulário de cadastro
export function SguForms() {
    // hook para navegação entre as rotas
    const navigate = useNavigate();

    // estado inicial do formulário
    const formInicial = {
        name: '',
        rg: '',
        cpf: '',
        tel: '',
        endereco: '',
        email: '',
        password: '',
        confpassword: '',
    };

    // estados para controlar o formulário e emails existentes
    const [existentesEmails, setExistentesEmails] = useState([]);
    const [formState, setFormState] = useState(formInicial);

    // função para lidar com a entrada de dados nos campos do formulário
    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name } = target;
        setFormState({ ...formState, [name]: value });
    }

    // função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // validação dos campos obrigatórios e regras de senha
        if (!formState.name || !formState.rg || !formState.cpf || !formState.tel || !formState.endereco || !formState.email || !formState.password || !formState.confpassword) {
            document.getElementById("msg-error").textContent = 'Todos os campos são obrigatórios.';
            return;
        } else if (formState.password !== formState.confpassword) {
            document.getElementById("msg-error").textContent = 'As senhas não coincidem.';
            return;
        } else if (formState.password.length < 8) {
            document.getElementById("msg-error").textContent = 'Senha muito curta. Tente novamente.';
            return;
        }

        // adicionar o email ao array de existentes
        setExistentesEmails([...existentesEmails, formState.email]);

        // dados do formulário a serem enviados
        const formComum = {
            name: formState.name,
            rg: formState.rg,
            cpf: formState.cpf,
            tel: formState.tel,
            endereco: formState.endereco,
            email: formState.email,
            password: formState.password,
            confpassword: formState.confpassword,
            createAt: new Date(),
        };

        // configurações para a requisição de envio do formulário
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formComum),
        };

        // enviar os dados do formulário para o servidor
        fetch("http://localhost:3002/users", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                // limpar o formulário após o envio
                setFormState({ ...formInicial });
                // redirecionar para a página Home após o cadastro
                navigate('/');
            })
            .catch((error) => {
                console.error('Erro ao enviar dados:', error);
            });
    }

    // renderização do formulário
    return (
        /* área de dados de cadastro */
        <div className="sg-data">
            {/* boas vindas */}
            <h2>Welcome to <span className="highlight-text">Elysian Financials!</span></h2>
            <p>We're glad to have you here</p>

            {/* formulário */}
            <form className="sg-form" id="sg-form" onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleInput}
                    placeholder="Digite seu nome"
                />

                <InputMask
                    required
                    mask="99.999.999-9"
                    maskChar="_"
                    type="text"
                    name="rg"
                    id="rg"
                    value={formState.rg}
                    onChange={handleInput}
                    placeholder="Digite seu RG" />

                <InputMask
                    required
                    mask="999.999.999-99"
                    maskChar="_"
                    type="text"
                    name="cpf"
                    id="cpf"
                    value={formState.cpf}
                    onChange={handleInput}
                    placeholder="Digite seu CPF"
                />

                <InputMask
                    required
                    mask="(99) 99999-9999"
                    maskChar="_"
                    type="text"
                    name="tel"
                    id="tel"
                    value={formState.tel}
                    onChange={handleInput}
                    placeholder="Digite seu telefone" />

                <input
                    required
                    type="text"
                    name="endereco"
                    id="endereco"
                    value={formState.endereco}
                    onChange={handleInput}
                    placeholder="Digite seu endereço"
                />

                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleInput}
                    placeholder="Digite seu e-mail"
                />

                <div className="password">

                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={handleInput}
                        minlength="8"
                        placeholder="Digite sua senha"
                    />

                    <input
                        required
                        type="password"
                        name="confpassword"
                        id="confpassword"
                        value={formState.confpassword}
                        onChange={handleInput}
                        minlength="8"
                        placeholder="Confirme sua senha" />
                </div>
                {/* mensagem de erro */}
                <div className="error-msg" id="msg-error"></div>

                {/* botão de cadastro */}
                <button className="sg-btn" type="submit">Cadastrar</button>
            </form>
        </div>
    )

}