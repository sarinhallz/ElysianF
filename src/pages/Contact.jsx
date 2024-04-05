import { Rodape } from "../components/Footer/footer";
import { FqAsks } from "../components/FqAsks/fqasks";
import { FqForms } from "../components/FqForms/fqforms";
import { FqIntro } from "../components/FqIntro/fqintro";
import { Navbar } from "../components/Navbar/navbar";

export function FaleConosco(){
    return(
        <main className="content">
            <Navbar />
            <FqIntro />
            <FqForms />
            <FqAsks />
            <Rodape />
        </main>
    )
}