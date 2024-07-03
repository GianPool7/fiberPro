import React from "react";
import alcance  from '../images/Pilares/alcance.png';
import conexion  from '../images/Pilares/conexion.png';
import fibra  from '../images/Pilares/fibra.png';
import velocidad  from '../images/Pilares/velocidad.png';

export default function Pilares(){

    return(

        <>
            <div class="flex gap-5 justify-center text-center p-8">

                <div className="c1" class=" w-80 bg-black rounded-md p-8">
                    <div class="flex justify-center">
                        <img src={alcance} alt="FiberPro" class="w-52" />
                    </div>
                    <div class="p-6 text-blue-600">
                        <h3>VELOCIDAD SIMÉTRICA</h3>
                    </div>
                </div>

                <div className="c1" class=" w-80 bg-black rounded-md p-8">
                    <div class="flex justify-center">
                        <img src={conexion} alt="FiberPro" class="w-52" />
                    </div>
                    <div class="p-6 text-blue-600">
                        <h3>ALCANCE 2.4 GHZ Y 5 GHZ</h3>
                    </div>
                </div>

                <div className="c1" class=" w-80 bg-black rounded-md p-8">
                    <div class="flex justify-center">
                        <img src={fibra} alt="FiberPro" class="w-52" />
                    </div>
                    <div class="p-6 text-blue-600">
                        <h3>100% <br/>
                        FIBRA ÓPTICA</h3>
                    </div>
                </div>

                <div className="c1" class=" w-80 bg-black rounded-md p-8">
                    <div class="flex justify-center">
                        <img src={velocidad} alt="FiberPro" class="w-52" />
                    </div>
                    <div class="p-6 text-blue-600">
                        <h3>VELOCIDAD</h3>
                    </div>
                </div>

            </div>
        </>


    );


}