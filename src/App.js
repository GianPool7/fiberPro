import './App.css';
import Inicio from './Pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planes from './Pages/Planes';
import Barra from './components/Navbar/Barra';
import Ppagina from './components/Footer/Ppagina'
import Pagos from './Pages/Pagos';
import Error from './Pages/Error';

function App() {

    return(

        <>

        <Router>

            <Barra/>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/planes" element={<Planes/>}/>
                <Route path="/pagos" element={<Pagos/>}/>
                <Route path="/error" element={<Error/>}/>
            </Routes>

        </Router>


        <Ppagina/>

        </>

    )

}

export default App;
