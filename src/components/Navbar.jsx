// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "../assets/images";


export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={IMAGES.image1} alt="Globe-Image" className="globe-img" />
            <span className="navbar-text">my travel journal.</span>
        </nav>
    )
}