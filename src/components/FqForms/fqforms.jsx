/* importando arquivo css e dependências */
import "./fqforms.css"; 
import React, { useState } from "react"; 

// componente de formulário para a página Fale Conosco
export function FqForms() {
    // estado inicial do formulário
    const formInicial = {
        name: '', // campo para o nome
        email: '', // campo para o email
        tel: '', // campo para o telefone
        tema: '', // campo para o tema da mensagem
        msg: '', // campo para a mensagem
    };

    // estado do formulário
    const [formState, setFormState] = useState(formInicial);

    // função para lidar com a entrada do usuário nos campos do formulário
    const handleInput = (event) => {
        const { value, name } = event.target;
        setFormState({ ...formState, [name]: value }); // atualiza o estado do formulário com os dados inseridos pelo usuário
    }

    // função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // previne o comportamento padrão de envio do formulário

        // dados do formulário a serem enviados
        const formComum = {
            name: formState.name,
            email: formState.email,
            tel: formState.tel,
            tema: formState.tema,
            msg: formState.msg,
            createdAt: new Date(), // data de criação da mensagem
        };

        // opções para a requisição
        const requestOptions = {
            method: "POST", // método de requisição POST
            headers: {
                "Content-type": "application/json", // tipo de conteúdo JSON
            },
            body: JSON.stringify(formComum), // dados do formulário convertidos para JSON
        };

        // envio da requisição para o servidor
        fetch("http://localhost:3002/messages", requestOptions)
            .then((response) => response.json()) // transforma a resposta em JSON
            .then((data) => {
                setFormState({ ...formInicial }); // limpa o formulário após o envio bem-sucedido
            })
            .catch((error) => {
                console.error('Erro ao enviar dados:', error); // exibe um erro caso ocorra algum problema no envio
            });
    }

    // retorno do para renderização do componente do formulário
    return (
        <div class="fc-form">
            <h2>Deixe sua mensagem!</h2> 
            <form onSubmit={handleSubmit}>
                <div class="fc-nomenemail"> {/* div para agrupar os campos de nome e email */}
                    <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={handleInput}
                    value={formState.name} 
                    placeholder="Digite seu nome" 
                    /> {/* campo para o nome */}

                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    onChange={handleInput}
                    value={formState.email} 
                    placeholder="Digite seu e-mail" 
                    /> {/* campo para o email */}
                </div>

                <div class="fc-telnopt"> {/* div para agrupar os campos de telefone e tema */}
                    <input 
                    type="text" 
                    name="tel" 
                    id="tel"
                    onChange={handleInput}
                    value={formState.tel} 
                    placeholder="Digite o seu telefone" 
                    /> {/* campo para o telefone */}

                    <select 
                    name="tema" 
                    id="tema"
                    onChange={handleInput}
                    value={formState.tema}
                    > {/* campo para o tema */}
                        <option value="opt0">Selecione o tema:</option> {/* opção padrão */}
                        <option value="opt1">Consultoria</option> {/* opção de tema */}
                        <option value="opt2">Atendimento ao Cliente</option> {/* opção de tema */}
                        <option value="opt3">Empréstimos e Financiamentos</option> {/* opção de tema */}
                        <option value="opt4">Cartões de Crédito e Débito</option> {/* opção de tema */}
                        <option value="opt5">Soluções Empresariais</option> {/* opção de tema */}
                        <option value="opt6">Feedbacks</option> {/* opção de tema */}
                    </select>
                </div>

                <input 
                type="text" 
                name="msg" 
                id="msg" 
                onChange={handleInput}
                value={formState.msg}
                placeholder="Digite sua mensagem" 
                /> {/* campo para a mensagem */}

                <button type="submit">Enviar</button> {/* botão de envio do formulário */}
            </form>
        </div>
    )
}