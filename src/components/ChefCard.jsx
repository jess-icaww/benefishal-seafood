import React from "react";
import "./ChefCard.css";

const ChefCard = () => {
  return (
    <>
    <div className="chef-container">
        <div className="chef-image">
            <img src="/chef.png"></img>
        </div>

        <div className="details">
            <h3>Chef Name</h3>
            <h5>Chef Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis ligula. Vivamus hendrerit eros pulvinar, ultrices sapien in, interdum felis. Ut congue varius ante vitae porttitor. In consequat rutrum mi, et porttitor erat malesuada ut. </p>
        </div>
    </div>
    </>
  );
};

export default ChefCard;
