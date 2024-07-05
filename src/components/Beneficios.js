//import React from "react";
import React, { useState } from 'react';
import subidaDescarga from "../images/Beneficios/Subida-Descarga.png";
import subida from "../images/Beneficios/s.png";
import '../responsive.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

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
        <div class="p-5 flex flex-wrap justify-center content-center h-2/3">

            <div class="w-10/12 p-5 flex flex-wrap justify-center content-center gap-10 mt-5 mb-5">

                    {texts.map((cajaBeneficios, index) => (

                        <div class="rounded-lg shadow-lg shadow-black/50 p-5 bg-red-50 w-1/4 h-80"
                            key={cajaBeneficios.index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className='caja' 
                            //style={{width:"30%",height:"300px"}}
                            >
                            <img class="w-40 p-5 block m-auto" src={cajaBeneficios.image} alt=""/>
                            

                            {cajaBeneficios.titulo}
                        </div>

                    ))}

                
            </div>

        </div>
    );

}

export default BeneficiosCaja;