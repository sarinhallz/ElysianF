import "./About.css";
import { History } from "../../components/AbHistory/abhistory";
import { AbIntro } from "../../components/AbIntro/abintro";
import { Navbar } from "../../components/Navbar/navbar";
import { Owner } from "../../components/AbOwner/owner";
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