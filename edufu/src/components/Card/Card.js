import React, { Component } from "react";
import "../Card/card.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="body">
          <div className="featured">featured</div>
          <div className="image">
            <img
              className="background_image"
              src="https://static01.nyt.com/images/2020/03/17/well/askwell-wholegrains/askwell-wholegrains-mediumSquareAt3X.jpg"
            ></img>
          </div>

          <div className="info">
            <img
              className="profile_image"
              src="https://kj1bcdn.b-cdn.net/media/10277/how-to-grow-wheat.jpg"
            ></img>
            <div className="name">Wheat</div>
          </div>
          <div className="information">
            <div className="fee">
              <div className="information_header">Price</div>
              <div className="information_value"> Rs. 20-25</div>
            </div>
            <div className="border"></div>
            <div className="course">
              <div className="information_header">Quantity</div>
              <div className="information_value">1kg</div>
            </div>
            <div className="border"></div>
            <div className="rank">
              <div className="information_header">Unit</div>
              <div className="information_value">Kilogram</div>
            </div>
          </div>
          <div className="border1"></div>

          <div className="apply">
            <button className="brochure_button">Buy</button>
            <button className="apply_button">Sell</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
