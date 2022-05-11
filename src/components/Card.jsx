import React from "react";
import '../css/Card.css';
import marker from '../images/globe.svg';

export default function Card({item}){
    let title=item.title;
    let location=item.location;
    let startDate=item.startDate;
    let endDate=item.endDate;
    let description=item.description;
    let imageURL=item.imageURL;
    let map=item.map;
    return(
        <div className="card">
            <img className="image"  src={imageURL} alt='error' />
            <div className="details">
                <div id="locationDetails">
                    {marker&&<img id="marker" src={marker} alt="" />}
                    {location&&<span id="location">{location}</span>}
                    {map&&<a id="map" target='_blank' href={map}>View on Google Maps</a>}
                </div>
                {title&&<h2 id="title">{title}</h2>}
                {startDate&&endDate&&<h3 id="date">{startDate}-{endDate}</h3>}
                {description&&<p id="description">{description}</p>}
            </div>
        </div>
    );
}