import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About/About";
import { FaleConosco } from "./pages/Contact";
import { SignUp } from "./pages/SignUp/SignUp";

const Router = () => {
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/cadastro" element={ <SignUp /> } />
                <Route path="/sobre" element={ <AboutUs /> } />
                <Route path="/faleconosco" element={ <FaleConosco /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;