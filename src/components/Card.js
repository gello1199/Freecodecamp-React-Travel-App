import React from 'react';

const Card = (props) => {
    
    return (
        <div className='card'>
            <div className="card--title">{props.title}</div>
            <img className="card--pin" src="https://toppng.com/uploads/preview/pin-drop-icon-drop-pin-icon-11553428790llctccp464.png" alt="pindrop img" />
            <div className="card--location">{props.location}</div>
            <a href={props.googleMapsUrl} className="card--maps">View on Google Maps</a>
            <div className="card--date">{props.startDate} - {props.endDate}</div>
            <div className="card--description">{props.description}</div>
            <img className="card--img" src={props.imageUrl} />
        </div>
    );
}

export default Card;
