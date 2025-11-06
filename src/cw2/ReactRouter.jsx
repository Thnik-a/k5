import React from 'react';
import  {BrowserRouter, Routes} from "react-router-dom";
import EslintConfig from "../../eslint.config.js";

function Contact() {
    const navigate = useNavigate();
    const kliknij = () =>{
        navigate('about');
    }
}
function Home() {
    return <h2>Strona Główna</h2>
}

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/"> Strona Główna</Link> </li>
                    <li><Link to="/about"> O nas </Link></li>
                    <li><Link to="/contact"> Kontakt </Link> </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Contact />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default ReactRouter;