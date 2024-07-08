import React from "react";
import Main from "../components/Main"
import Pilares from "../components/Pilares"
import Cplanes from "../components/cPlanes";
import BeneficiosCaja from "../components/Beneficios";
import Banner from '../images/banner.webp';

export default function Inicio(){

    return(
        <>

            <Main></Main>
            <Pilares/>
            <div class="p-2 ">
                <h3 class="text-center text-6xl text-orange-600 leading-loose ">
                INSTALACIÓN GRATIS
                </h3>
                <br/>
                <h3 class="text-3xl leading-relaxed">
                DUPLICAMOS TU VELOCIDAD POR 6 MESES
                </h3>
            </div>

            <Cplanes/>

            <img src={Banner} alt='' class="mt-8"/>

            <BeneficiosCaja/>


        </>

    )



}