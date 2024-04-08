// importações de estilos e imagens necessárias
import "./resources.css";
import Account from "/public/images/img-acc.svg";
import Card from "/public/images/img-card.svg";

// definição do componente Resources para os recursos e serviços oferecidos
export function Resources() {
    return (
        <div className="container-res">
            {/* título e subtexto explicativo */}
            <div className="titlensub">
                <h2>Desbravando Novas Fronteiras Financeiras</h2>
                <p>Explore diversos recursos e serviços no Elysian Financials, como investimentos estratégicos, empréstimos flexíveis, seguros confiáveis e cartões de crédito exclusivos. Encontre as soluções perfeitas para seus objetivos financeiros.</p>
            </div>
            {/* seção de recursos */}
            <div className="resources">
                {/* card para conta do Elysian */}
                <div className="account">
                    <h2>Conta do Elysian</h2>
                    <img src={Account} alt="Conta do Elysian" />
                    <p>Uma conta digital que te dá controle sobre o seu dinheiro. Agora tudo está em somente um lugar: na palma da sua mão.</p>
                </div>
                {/* card para Cartão Elysian */}
                <div className="card">
                    <h2>Cartão Elysian</h2>
                    <img src={Card} alt="Cartão Elysian" />
                    <p>Não é apenas um cartão: dá pra pagar boleto no crédito, criar cartão virtual e muitas outras coisas.</p>
                </div>
            </div>
        </div>
    );
}
