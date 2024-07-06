import React from "react";
import v1 from "../images/planes/connectionorange.png"
import v2 from "../images/planes/fibraorange.png"
import v3 from "../images/planes/speedorange.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Planes(){

    const megas=[
        {mbpsOld:"250 Mbps",mbps:"500 Mbps",precio:"S/ 90.00  Mensuales"},
        {mbpsOld:"200 Mbps",mbps:"400 Mbps",precio:"S/ 70.00  Mensuales"},
        {mbpsOld:"300 Mbps",mbps:"600 Mbps",precio:"S/ 100.00  Mensuales"},
    ]


    return(
        
        <div class="flex w-90 p-5 mt-5 justify-center" className="fondoss">



            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {megas.map((mbps,index)=>(

                    <SwiperSlide >
                        
                        <div class="rounded-lg bg-orange-500 w-50 p-5 justify-around m-10 shadow-lg shadow-cyan-500/80"
                        key={index}>

                            <div class="">

                                <h4 class="font-bold text-white text-2xl text-center w-100">INTERNET 100% FIBRA</h4>
                                <h4 class="font-bold text-white text-2xl text-center p-5 w-100">Instalación Gratis</h4>

                            </div>

                                <div class="flex flex-wrap W-10/12 p-2 content-center items-center">

                                    <div class="w-50 p-3 bg-white rounded-lg h-1/2">
                                            <div class="p-5 ">
                                                <p class="line-through p-1">{mbps.mbpsOld}</p>
                                                <h3 class="text-3xl font-bold p-3 text-blue-700">{mbps.mbps}</h3>
                                                <h4 class="m-5">Duplica tu velocidad</h4>
                                                <h4 class="font-bold text-3xl m-5">x6 meses</h4>
                                                <h3 class="bg-orange-600 text-white rounded-full p-2 m-2">{mbps.precio}</h3>
                                            </div>
                                    </div>

                                    <div class="w-50 flex flex-col gap-5 p-2">

                                        <div class="flex  flex-wrap bg-white shadow-lg shadow-gray-800/50 rounded-lg p-8 justify-between w-50 text-black">
                                            <div>
                                                <img src={v1} alt="" class="w-70"/>
                                            </div>

                                            <div>
                                                <h3 class="">100% Fibra Óptica</h3>
                                            </div>
                                        </div>

                                        <div class="flex flex-wrap bg-white shadow-lg shadow-gray-800/50 rounded-lg p-8 justify-between w-50 text-black">
                                            <div>
                                                <img src={v2} alt="" class="w-70"/>
                                            </div>

                                            <div>
                                                <h3 class="">Internet ilimitado y simétrico</h3>
                                            </div>
                                        </div>

                                        <div class="flex flex-wrap bg-white shadow-lg shadow-gray-800/50 rounded-lg p-8 justify-between w-50 text-black">
                                            <div>
                                                <img src={v3} alt="" class="w-70"/>
                                            </div>

                                            <div>
                                                <h3 class="">Mayor velocidad</h3>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                            <div class="p-5">
                                <a href="" class="rounded-full bg-blue-700 p-3 text-white">Quiero este Plan</a>
                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </div>

    );
}