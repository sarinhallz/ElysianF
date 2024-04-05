import "./resources.css";
import Account from "../../../public/images/img-acc.svg";
import Card from "../../../public/images/img-card.svg";

export function Resources(){
    return(
        <div className="container-res">
            <div className="titlensub">
                <h2>Desbravando Novas Fronteiras Financeiras: Conta Digital e Cartão Elysian</h2>
                <p>Explore diversos recursos e serviços no Elysian Financials, como investimentos estratégicos, empréstimos flexíveis, seguros confiáveis e cartões de crédito exclusivos. Encontre as soluções perfeitas para seus objetivos financeiros.</p>
            </div>
            <div className="account">
                <h2>Conta do Elysian</h2>
                <img src={ Account } alt="" />
                <p>Uma conta digital que te dá controle sobre o seu dinheiro. Agora tudo está em somente um lugar: na palma da sua mão.</p>
            </div>
            <div className="card">
                <h2>Cartão Elysian</h2>
                <img src={ Card } alt="" />
                <p>Não é apenas um cartão: dá pra pagar boleto no crédito, criar cartão virtual e muitas outras coisas.</p>
            </div>
    </div>
    )
}