import React from "react";

const Card=( {productName, imgSrc, cardText, cardPrice}) => {
    return (
        <div className="card-details">
            <h3 className="card-heading">
                {productName}
                </h3>
            <div className="card-content">
                <img 
                className="card-picture"
                src={imgSrc}
                alt="specs picture"
                />
                 </div> 
                <h4 className="card-text">{cardText}</h4>
                <div className="card-price">
                    {cardPrice}
                </div>
           
        </div>
    )
}

export default Card;
