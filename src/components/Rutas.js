import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from "react";
import Pageplanes from "./Pageplanes";
import App from '../App';



export default function Ruta(){

    return(

        <Router>
            <Routes>
                <Route path="/planes" element={<Pageplanes/>}>
                    
                </Route>
            </Routes>
        </Router>

    );

}