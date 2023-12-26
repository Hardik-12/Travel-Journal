// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import data from "./data";
import './App.css'



export default function App(){
  const destinations = data.map(location => {
    return (
      <Hero 
        key = {location.id}
        {...location}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className="location-lists">
        {destinations}
      </section>
    </div>
  )
}