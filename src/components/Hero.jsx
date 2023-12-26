// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "../assets/images";



export default function Hero(){
    return (
        <section className="hero">
            <img src={IMAGES.image3} alt="hero-image" className="hero-img" />
            <div className="hero-location">
                <div className="hero-pointer">
                    <img src={IMAGES.image2} alt="" className="map-pointer-image" />
                    <span className="hero-country">JAPAN</span>
                </div>
                <a href='https://www.google.com' className="hero-view">View on Google Maps</a>
            </div>
            <div className="hero-info">
                <h1 className="hero-name">Mount Fuji</h1>
                <time className="hero-time">12 Jan, 2021 - 24 Jan, 2021</time>
                <span className="hero-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</span>
            </div>
        </section>
    )
}