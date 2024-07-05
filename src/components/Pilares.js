import React from "react";
import alcance  from '../images/Pilares/alcance.png';
import conexion  from '../images/Pilares/conexion.png';
import fibra  from '../images/Pilares/fibra.png';
import velocidad  from '../images/Pilares/velocidad.png';

export default function Pilares(){

    const pila=[
        {image:alcance,descripcion:"VELOCIDAD",subdes:"SIMÉTRICA"},
        {image:conexion,descripcion:"ALCANCE",subdes:"2.4 GHZ Y 5 GHZ"},
        {image:fibra,descripcion:"100%",subdes:"FIBRA ÓPTICA"},
        {image:velocidad,descripcion:"CONEXIÓN",subdes:"MULTIDISPOSITIVO"},
        
    ]

    return(

        <>
            <div class="flex flex-wrap gap-5 justify-center text-center p-8 items-center content-center">

                {pila.map((carta,index)=>(

                    <div className="c1" class=" w-70 bg-white rounded-md p-4 border-solid border-2 border-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg shadow-black/40"
                        key={index}>
                        <div class="flex justify-center  w-50 p-2">
                            <img src={carta.image} alt="FiberPro" class="" />
                        </div>
                        <div class="text-blue-600 text-center p-2">
                            <p class="text-sm">{carta.descripcion}</p>
                            <p class="text-sm">{carta.subdes}</p>
                        </div>
                    </div>

                ))}




            </div>
        </>


    );


}