//import React from "react";
import React, { useState } from 'react';
import subidaDescarga from "../images/Beneficios/Subida-Descarga.png";
import subida from "../images/Beneficios/s.png";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";

const BeneficiosCaja = () =>{



    const cajaBeneficios=[
        
        {image:subidaDescarga,titulo:"Descargas y Carga Ilimitadas",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Velocidad Garantizada",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"100% Fibra Óptica",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Mayor Estabilidad",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Velocidad Simétrica",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Conectividad en Simultáneo",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},

    ]

    // son para realziar efectos lo que va adentro es como inicializar el texto pero de ahi desaparece

    /*

    const [text,cambitext]=useState('puede haber un estado 0');

    const handleMouseEnter=()=>{
        cambitext("adentro");
    }

    const handleMouseLeave=()=>{
        cambitext("afuera");
    }

    */

    const [text,cambitext]=useState(null);

    const handleMouseEnter=(index)=>{
        cambitext(index);
    }

    const handleMouseLeave=()=>{
        cambitext("afuera");
    }


    return(
        <div class="p-5">

            <div class="w-2/3 block m-auto">
                <div class="flex flex-wrap gap-10 p-5 place-content-center ">
                    {cajaBeneficios.map((card,index)=>(
                        <div class="bg-white w-80 p-8 rounded-lg shadow-lg shadow-cyan-500/50"
                            key={index}
                            onMouseEnter={()=>handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transition: 'background-color 0.3s, color 0.4s',
                                cursor:"pointer"
                            }}
                            >

                            {text===index ?(
                                <p>{card.contenido}</p>
                            ):(
                                <>
                                    <img class="w-20 block m-auto p-5" src={card.image} alt=""/>
                                    <h2 class="font-bold">{card.titulo}</h2>
                                </>
                            )}
                            
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );

}

export default BeneficiosCaja;