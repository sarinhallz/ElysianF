import { SguForms } from "../../components/SignForms/signforms.jsx";
import { SguIntro } from "../../components/SignIntro/signintro.jsx";

export function SignUp(){
    return(
        <main className="content">
            <Navbar />
            <div className="sg-container">
                <SguIntro />
                <SguForms />
            </div>
            <Rodape />
        </main>
    )
}