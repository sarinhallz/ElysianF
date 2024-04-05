import { Navbar } from "../components/Navbar/navbar.jsx"
import { Intro } from "../components/Intro/intro.jsx";
import { Resources } from "../components/Recursos/resources.jsx";
import { Rodape } from "../components/Footer/footer.jsx";
import { Anuidade } from "../components/Anuidade/anuidade.jsx";

export function Home(){
    return(
        <main className="content">
            <Navbar />
            <Intro />
            <Resources />
            <Anuidade />
            <Rodape />
        </main>
    )
}