import "./anuidade.css";
import Zero from "/public/images/zero-anuidade.svg"

export function Anuidade() {
    return (
        <div class="anuidade">
            <div class="text">
                <h2>Zero anuidade</h2>
                <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>
            </div>
            <div class="image">
                <img src={ Zero } alt="" />
            </div>
        </div>
    )
}