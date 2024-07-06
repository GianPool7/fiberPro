//import React from "react";
import React, { useState } from 'react';
import subidaDescarga from "../images/Beneficios/Subida-Descarga.png";
import subida from "../images/Beneficios/s.png";

const BeneficiosCaja = () =>{

    const cajaBeneficios=[
        
        {image:subidaDescarga,titulo:"Descargas y Carga Ilimitadas",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Velocidad Garantizada",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"100% Fibra Óptica",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Mayor Estabilidad",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Velocidad Simétrica",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},
        {image:subida,titulo:"Conectividad en Simultáneo",contenido:"Nuestros planes de internet permiten descargar y cargar datos sin límites y de manera simétrica. Podrás disfrutar de transmitir, trabajar y jugar sin preocuparte."},

    ]

    // Estado para los textos
    const [texts, setTexts] = useState(cajaBeneficios);

    // Función para manejar el evento cuando el mouse entra en un elemento
    const handleMouseEnter = (index) => {
        const newItems = [...texts];
        newItems[index].titulo = newItems[index].contenido;
        setTexts(newItems);
    };
    
    // Función para manejar el evento cuando el mouse sale de un elemento
    const handleMouseLeave = (index) => {
        const newItems = [...texts];
        newItems[index].titulo = cajaBeneficios[index].titulo;
        setTexts(newItems);
    };



    return(
        <div class="">

            <div class="flex flex-wrap gap-10 p-5 place-content-center ">
                {cajaBeneficios.map((card,index)=>(
                    <div class="bg-white w-80 p-8 rounded-lg shadow-lg shadow-cyan-500/50"
                        key={index}>
                        <img class="w-20 block m-auto p-5" src={card.image} alt=""/>
                        <h2 class="font-bold">{card.titulo}</h2>
                    </div>
                ))}
            </div>

        </div>
    );

}

export default BeneficiosCaja;