import React from "react";
import './style.css';

export default function Hero() {
    return (
        <section className="hero">
            <img src="images/grp.png" className="grp_pic " />
            <h1 className="hero_header">Online Experiences</h1>
            <p className="hero_text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}