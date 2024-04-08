/* importando componentes, dependências e arquivo css */
import React, { useState } from "react";
import { InvCards } from "../InvestmentCards/cards";
import InputMask from "react-input-mask";
import "./investform.css";

export function FormInvestiment() {
    // estado inicial do formulário e da lista de investimentos
    const formInicial = {
        nameInvestor: '',
        email: '',
        tel: '',
        typeInvest: '',
        valorInvest: '',
        term: '',
        risk: ''
    };

    // estados para controlar o formulário, os dados submetidos e a lista de investimentos
    const [formState, setFormState] = useState(formInicial);
    const [submittedData, setSubmittedData] = useState(null);
    const [investmentList, setInvestmentList] = useState([]);

    // função para lidar com a entrada de dados nos campos do formulário
    const handleInput = (event) => {
        const { value, name } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    // função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // validar se todos os campos obrigatórios estão preenchidos
        if (!formState.nameInvestor || !formState.email || !formState.tel || !formState.typeInvest || !formState.valorInvest || !formState.term || !formState.risk) {
            alert('Todos os campos são obrigatórios.');
            return;
        }

        // criar um objeto com os dados do formulário e a data de criação
        const formComum = {
            nameInvestor: formState.nameInvestor,
            email: formState.email,
            tel: formState.tel,
            typeInvest: formState.typeInvest,
            valorInvest: formState.valorInvest,
            term: formState.term,
            risk: formState.risk,
            createdAt: new Date(),
        };

        // opções para a requisição POST
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formComum),
        };

        // enviar os dados do formulário para o servidor
        fetch("http://localhost:3002/investments", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setSubmittedData(data);
                setInvestmentList([...investmentList, data]); // adicionar o novo investimento à lista
                setFormState({ ...formInicial }); // limpar o formulário
            })
            .catch((error) => {
                console.error('Erro ao enviar dados:', error);
            });
    }

    return (
        <section>
            <div className="inv-forms">
                <h2>Adicionar investimento</h2>
                <p>Personalize sua estratégia financeira</p>
                <form className="form-invest" onSubmit={handleSubmit}>
                    {/* campos do formulário */}
                    {/* input para o nome do investidor */}
                    <input
                        type="text"
                        id="nameInvestor"
                        name="nameInvestor"
                        value={formState.nameInvestor}
                        onChange={handleInput}
                        placeholder="Digite o seu nome (investidor)"
                        required
                    />
                    {/* input para o email */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInput}
                        placeholder="Digite o seu email"
                        required
                    />
                    {/* input para o telefone com máscara */}
                    <InputMask
                        type="tel"
                        id="tel"
                        name="tel"
                        value={formState.tel}
                        onChange={handleInput}
                        mask="(99) 99999-9999"
                        maskChar="_"
                        placeholder="Digite o seu telefone"
                        required
                    />
                    {/* select para o tipo de investimento */}
                    <select
                        id="typeInvest"
                        name="typeInvest"
                        value={formState.typeInvest}
                        onChange={handleInput}
                        required
                    >
                        <option value="">Escolha qual o tipo...</option>
                        <option value="fundoInvestimento">Fundo de Investimento</option>
                        <option value="cdb">CDB</option>
                        <option value="lci">LCI</option>
                        <option value="lca">LCA</option>
                        <option value="tesouroDireto">Tesouro Direto</option>
                        <option value="acao">Ações de empresa</option>
                    </select>
                    {/* input para o valor do investimento */}
                    <input
                        type="number"
                        id="valorInvest"
                        name="valorInvest"
                        value={formState.valorInvest}
                        onChange={handleInput}
                        placeholder="Digite o valor investido"
                        required
                    />
                    {/* select para a duração prevista */}
                    <select
                        type="text"
                        id="term"
                        name="term"
                        value={formState.term}
                        onChange={handleInput}
                        required
                    >
                        <option value="">Selecione a duração prevista</option>
                        <option value="curto">Curto prazo</option>
                        <option value="medio">Médio prazo</option>
                        <option value="longo">Longo prazo</option>
                    </select>
                    {/* select para o risco */}
                    <select
                        id="risk"
                        name="risk"
                        value={formState.risk}
                        onChange={handleInput}
                        required
                    >
                        <option value="">Selecione o risco...</option>
                        <option value="muitoBaixo">Muito Baixo</option>
                        <option value="baixo">Baixo</option>
                        <option value="medio">Médio</option>
                        <option value="alto">Alto</option>
                        <option value="muitoAlto">Muito Alto</option>
                    </select>
                    {/* botão de enviar */}
                    <button className="inv-btn" type="submit">Enviar</button>
                </form>
            </div>

            {/* mostrar o componente InvCards com os dados do investimento submetido */}
            {submittedData && <InvCards investmentData={submittedData} investmentList={investmentList} />}
        </section>
    )
}
