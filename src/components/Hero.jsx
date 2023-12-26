/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";



export default function Hero(props){
    return (
        <div>
            <section className="hero">
                <img src={props.img} alt="hero-image" className="hero-img" />
                <div className="hero-location">
                    <div className="hero-pointer">
                        <img src={props.pointerImg} alt="" className="map-pointer-image" />
                        <span className="hero-country">{props.country}</span>
                    </div>
                    <a href='https://www.w3schools.com' className="hero-view">View on Google Maps</a>
                </div>
                <div className="hero-info">
                    <h1 className="hero-name">{props.title}</h1>
                    <time className="hero-time">{props.date}</time>
                    <span className="hero-description">{props.description}</span>
                </div>
            </section>
            <hr />
        </div>
    )
}