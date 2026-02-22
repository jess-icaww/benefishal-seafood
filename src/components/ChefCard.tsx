import React from "react";
import "./ChefCard.css";

type ChefCardType = {
  image: string;
  title: string;
  description: string;
  details: string;
}

const ChefCard = ({image, title, description, details}:ChefCardType ) => {
  return (
    <>
    <div className="chef-container">
        <div className="chef-image">
            <img src={image}></img>
        </div>

        <div className="details">
            <h3>{title}</h3>
            <h5>{description}</h5>
            <p>{details}</p>
        </div>
    </div>
    </>
  );
};

export default ChefCard;
