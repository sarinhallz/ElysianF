import "./About.css";
import { History } from "../../components/Ab-History/abhistory";
import { AbIntro } from "../../components/Ab-Intro/abintro";
import { Navbar } from "../../components/Navbar/navbar";
import { Owner } from "../../components/Ab-Owner/owner";
import { Rodape } from "../../components/Footer/footer";

export function AboutUs(){
    return(
        <main className="content">
            <Navbar />
            <AbIntro />
            <div className="abcontainer">
                <History />
                <Owner />
            </div>
            <Rodape />
        </main>
    )
}