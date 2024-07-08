import React, { useState } from "react";
import logo from "../../images/LOGOTIPO.png"
import { FaYoutube,FaFacebook,FaDiscord,FaWhatsapp,FaTiktok,FaTwitch } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Barra() {

    const activo=()=>{
        
    }

    return(
        <header className="sticky top-0 z-10 ">
            <div class="w-full ">
                <div class=" flex flex-wrap space-x-4 gap-2 place-content-center bg-gradient-to-r from-blue-700 to-black">
                 
                    <div class="flex flex-wrap justify-around content-center w-2/3 ">
                        <div class="">
                            <nav class="place-content-center flex flex-wrap p-2">
                             
                                <a href="" class="text-1xl p-2 text-white font-bold hover:bg-blue-900">
                                    Usuarios abandonados
                                </a>
                                                         
                                <a href="" class="text-1xl p-2 text-white font-bold hover:bg-blue-900">
                                    Nosotros
                                </a>
                                                         
                                <a href="" class="text-1xl p-2 text-white font-bold hover:bg-blue-900">
                                    Fibra Optica
                                </a>
                            </nav>
                        </div>
                        <div class="p-1">
                            <nav class="place-content-center flex flex-wrap gap-4">
                                <a href="" class="text-3xl text-white hover:bg-blue-700 rounded-lg p-2" >
                                    <FaFacebook/>
                                </a>
                                <a href="" class="text-3xl text-white hover:bg-violet-600 rounded-lg p-2" >
                                    <FaDiscord/>
                                </a>
                                <a href="" class="text-3xl text-white hover:bg-green-700 rounded-lg p-2" >
                                    <FaWhatsapp/>
                                </a>
                                <a href="" class="text-3xl text-white hover:bg-black rounded-lg p-2" >
                                    <FaTiktok/>
                                </a>
                                <a href="" class="text-3xl text-white hover:bg-purple-800 rounded-lg p-2" >
                                    <FaTwitch/>
                                </a>
                                <a href="" class="text-3xl text-white hover:bg-red-600 rounded-lg p-2" >
                                    <FaYoutube/>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap space-x-4 gap-2 place-content-center bg-white">
                    <div class="flex flex-wrap justify-between content-center place-content-center p-2 w-2/3"> 
                        <div class="flex p-2">
                            <a href="/" class="text-3xl text-slate-100" >
                                <img src={logo} alt="FiberPro" class="block m-auto" />
                            </a>
                        </div>
                        <div class="">
                                <nav class="place-content-center flex flex-wrap ">
                                    <Link class="text-2xl text-orange-600 font-bold p-4" to="/"
                                    >
                                    Inicio
                                    </Link>
                                    <Link class="text-2xl text-blue-800 font-bold p-4" to="/planes"
                                        onClick={activo}
                                    >

                                    </Link>
                                    <a href="" class="text-2xl text-blue-800 font-bold p-4 hover:text-orange-600" >Formas de Pago</a>
                                    <a href="" class="text-2xl text-blue-800 font-bold p-4" >Cobertura</a>
                                    <a href="" class="text-2xl text-blue-800 font-bold p-4" >Contacto</a>
                                </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}