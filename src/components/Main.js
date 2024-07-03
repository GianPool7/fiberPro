import React from "react";
import videoSource from '../Videos/video.mp4';

export default function Main(){
    return(
        <div className="video-container">
            <video autoPlay loop muted className="video">
                <source src={videoSource} type="video/mp4" />
            </video>
        </div>
    );
}