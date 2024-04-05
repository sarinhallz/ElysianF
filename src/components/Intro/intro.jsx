import "./intro.css";
import Introduction from "../../../public/images/img-intro.svg";

export function Intro(){
    return(
        <div className="entrance">
            <div className="textNbtn">
                <div className="text">
                    <p>Na <span>Elysian Financials</span>, elevamos sua prosperidade e segurança financeira para um novo patamar.</p>
                    <p>Junte-se a nós e descubra uma nova era de <span>excelência financeira</span>.</p>
                </div>
                <div className="btn-create">
                    <button>Abra uma conta</button>
                </div>
            </div>
            <div className="image">
                <img src={ Introduction } alt="" />
            </div>
        </div>
    )
}