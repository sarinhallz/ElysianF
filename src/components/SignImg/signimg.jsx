// importando o arquivo CSS para estilização do componente
import "./signimg.css";

// importando a imagem a ser exibida no componente
import SignImage from "../../public/images/image-signup.svg";  // verifique o caminho correto para a imagem

// definição do componente SguIntro, responsável por exibir a imagem de introdução ao cadastro
export function SguIntro() {
    return (
        <div className="sg-img">
            <img src={SignImage} alt="sign up image" />
        </div>
    );
}
