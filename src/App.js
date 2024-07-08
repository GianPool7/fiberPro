import './App.css';
import Inicio from './Pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planes from './Pages/Planes';
import Barra from './components/Navbar/Barra';
import Ppagina from './components/Footer/Ppagina'

function App() {

    return(

        <>

        <Router>

            <Barra/>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/planes" element={<Planes/>}/>
            </Routes>

        </Router>


        <Ppagina/>

        </>

    )

}

export default App;
