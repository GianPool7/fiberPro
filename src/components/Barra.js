import React from "react";
import logo  from '../images/LOGOTIPO.png'

export default function Barra() {
    return(

        <>
            <div class="fixed w-full bg-gradient-to-r from-gray-500/50 to-black-500/50">
                <div class=" flex space-x-4 gap-2 place-content-center">
                    
                    <nav class="place-content-center">
                        <a href="" class="text-1xl text-slate-100 p-8" >Discord</a>
                        <a href="" class="text-1xl text-slate-100 p-8" >Facebook</a>
                        <a href="" class="text-1xl text-slate-100 p-8" >Instagram</a>
                        <a href="" class="text-1xl text-slate-100 p-8" >Twich</a>
                        <a href="" class="text-1xl text-slate-100 p-8" >Discord</a>
                        <a href="" class="text-1xl text-slate-100 p-8" >Youtube</a>
                    </nav>

                </div>

                <div class=" flex space-x-4 gap-2 place-content-center">
                <a href="" class="text-3xl text-slate-100 p-8" >
                    <img src={logo} alt="FiberPro" class="w-24" />
                </a>
                <nav class="place-content-center">
                    <a href="" class="text-3xl text-slate-100 p-8" >Inicio</a>
                    <a href="" class="text-3xl text-slate-100 p-8" >Planes</a>
                    <a href="" class="text-3xl text-slate-100 p-8" >Formas de Pago</a>
                    <a href="" class="text-3xl text-slate-100 p-8" >Cobertura</a>
                    <a href="" class="text-3xl text-slate-100 p-8" >Contacto</a>
                </nav>

                </div>
            </div>
        </>

    );
}

