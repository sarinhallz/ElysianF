// importa os componentes necessários do React Router para configurar as rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importa os componentes das páginas que serão linkadas
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About/About";
import { FaleConosco } from "./pages/Contact";
import { Cadastro } from "./pages/SignUp/signup.jsx";
import { Investments } from "./pages/Investiments.jsx";

// define o componente Router, responsável por configurar as rotas da aplicação
const Router = () => {
    return(
        // define o roteador principal usando BrowserRouter
        <BrowserRouter>
            {/* define as rotas da aplicação */}
            <Routes>
                {/* rota para a página inicial */}
                <Route path="/" element={ <Home /> } />
                {/* rota para a página "Sobre Nós" */}
                <Route path="/sobre" element={ <AboutUs /> } />
                {/* rota para a página de contato */}
                <Route path="/contato" element={ <FaleConosco /> } />
                {/* rota para a página de cadastro */}
                <Route path="/cadastro" element={<Cadastro />} />
                {/* rota para a página de investimentos */}
                <Route path="/investimentos" element={ <Investments /> } />
            </Routes>
        </BrowserRouter>
    )
}

// exporta o componente Router para ser utilizado na aplicação principal
export default Router;
