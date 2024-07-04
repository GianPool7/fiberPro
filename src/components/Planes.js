import React from "react";
import v1 from "../images/planes/connectionorange.png"
import v2 from "../images/planes/fibraorange.png"
import v3 from "../images/planes/speedorange.png"

export default function Planes(){
    return(
        
        <div class="flex w-100 bg-red-600 p-5 mt-5 justify-center">
            <div class="border-solid border-2 border-sky-500 rounded-lg bg-white w-90 p-5 justify-around">

                <h4 class="font-bold text-orange-600 text-2xl text-center p-5 w-100">INTERNET 100% FIBRA</h4>

                <div class="flex ">

                    <div class="p-2 bg-slate-950">

                        <div class="p-5 bg-lime-900">
                            <p class="line-through p-1">200 mbps</p>
                            <h3 class="text-3xl font-bold p-3">400 Mbps</h3>
                            <h4>Duplica tu velocidad</h4>
                            <h4 class="font-bold text-3xl">x6 meses</h4>
                            <h3>S/ 70 Mensuales</h3>
                            <h4 class="text-4xl p-3">Instalación Gratis</h4>
                        </div>

                        <div class="p-5">
                            <a href="" class="rounded-full bg-blue-700 p-3 text-white">Quiero este Plan</a>
                        </div>
                    </div>


                    <div class="flex flex-col gap-5 p-8 bg-red-600">

                        <div class="flex bg-white shadow-lg shadow-gray-800/50 rounded-lg p-8 justify-between w-50 text-black">
                            <div>
                                <img src={v1} alt="" class="w-70"/>
                            </div>

                            <div>
                                <h3 class="">100% Fibra Óptica</h3>
                            </div>
                        </div>

                        <div class="flex bg-white shadow-lg shadow-gray-800/50 rounded-lg p-8 justify-between w-50 text-black">
                            <div>
                                <img src={v2} alt="" class="w-70"/>
                            </div>

                            <div>
                                <h3 class="">100% Fibra Óptica</h3>
                            </div>
                        </div>

                        <div class="flex bg-white shadow-lg shadow-gray-800/50 rounded-lg p-8 justify-between w-50 text-black">
                            <div>
                                <img src={v3} alt="" class="w-70"/>
                            </div>

                            <div>
                                <h3 class="">100% Fibra Óptica</h3>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </div>

    );
}