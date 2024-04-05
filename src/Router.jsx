import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About/About";

const Router = () => {
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/sobre" element={ <AboutUs/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;