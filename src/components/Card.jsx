import React from "react";
import one from '../assets/one.png';
import star from '../assets/star1.png';
export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src={one} />
            <div className="card-stats">
                <img className="card--star" src={star} alt="" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}