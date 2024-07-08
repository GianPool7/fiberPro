import React from "react";
import mtc from "../../svg/mtc.svg"
import logo from '../../images/LOGOTIPO.png'

export default function Pagina(){

    const menu_uno=[
        {titulo:"Inicio"},
        {titulo:"Planes"},
        {titulo:"Formas de Pago"},
        {titulo:"Cobertura"},
        {titulo:"Contacto"},
    ]

    const menu_dos=[
        {doc:"Condiciones de uso"},
        {doc:"Política de protección de datos"},
        {doc:"Preguntas frecuentes"},
        {doc:"Promociones"},
    ]

    const menu_tres=[
        {soli:"Solicitudes en línea"},
        {soli:"Atención de Reclamos"},
    ]


    return(

        <div class="bg-gradient-to-r from-blue-700 to-black w-full p-5 flex content-center place-content-center">

            <div class="w-11/12 flex flex-wrap justify-between gap-2 text-left">

                <div class="w-1/5">
                    <div class="p-2 place-content-center">   

                        <div class="flex justify-center p-1 bg-white">
                            <img src={logo} alt=""/>
                        </div>
                        <p class="text-2xl font-bold text-white">Ruc : 20556147761</p>

                    </div>
                </div>

                <div class="flex flex-wrap justify-around gap-5 ">

                    <div class="p-5">
                        <p class="text-2xl font-bold text-white border-b-4">Menu</p>
                        {menu_uno.map((menpage,index)=>
                            <ul class="p-2">    
                                <li class=" text-left p-5"
                                    key={index}>
                                    <a href="" class="text-1xl text-white font-bold p-4 ">{menpage.titulo}</a>
                                </li>
                            </ul>
                        )}


                    </div>

                    <div class="p-5">


                        <div class="mb-5">

                            <h2 class="text-2xl font-bold border-b-4 mb-5 text-white">Información de usuarios <br/> y abonados</h2>

                            {menu_dos.map((men,index)=>(
                                <ul>
                                    <li class="p-1 bg-gree text-left"
                                    key={index}>
                                        <a href="" class="text-1xl text-white font-bold p-4">{men.doc}</a>
                                    </li>
                                </ul>
                            ))}

                        </div>


                        <div class="">

                            <h2 class="text-2xl font-bold border-b-4 mb-5 text-white">Atención de Reclamos <br/>  y Solicitudes en Línea</h2>

                            {menu_tres.map((soli,index)=>(
                                <ul>
                                    <li class="p-1 bg-gree text-left">
                                        <a href="" class="text-1xl text-white font-bold p-4">{soli.soli}</a>
                                    </li>
                                </ul>
                            ))}

                        </div>

                    </div>

                    <div class="p-5">

                        <div class="">
                            <h2 class="text-2xl font-bold border-b-4 mb-5 text-white">Direccion</h2>
                            <p class="text-white">
                                Urb. Santo Domingo
                                <br/>
                                2da Etapa,Mz. L LT. 48 –
                                <br/>
                                Carabayllo,
                                <br/>
                                Lima                    
                            </p>
                        </div>

                        <div class="">
                            <h2 class="text-2xl font-bold border-b-4 mb-5 text-white">Horario de Atención</h2>
                            <p class="text-white">
                                8:00 a 16:00
                                <br/>
                                Lunes a Viernes
                                <br/>
                                8:00 a 13:00
                                <br/>
                                Sábados                
                            </p>
                        </div>

                        <div class="">
                            <h2 class="text-2xl font-bold border-b-4 mb-5 text-white">Email</h2>
                            <p class="text-white"> contacto@fiberpro.com.pe</p>
                        </div>

                    </div>

                </div>

                <div class="w-1/5">
                    <img src={mtc} alt=""/>
                </div>

            </div>
        </div>

    );

}