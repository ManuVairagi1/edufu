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
              src="https://dev.edufu.in/server/api/uploadFile/getUploadedFile/userUploadFile/2021/11/21/15/college_6062435248037947.jpg"
            ></img>
          </div>

          <div className="info">
            <img
              className="profile_image"
              src="https://dev.edufu.in/server/api/uploadFile/getUploadedFile/userUploadFile/2021/10/14/10/college_4335357513197369.jpg"
            ></img>
            <div className="name">Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="information">
            <div className="fee">
              <div className="information_header">Average Yearly Fee</div>
              <div className="information_value">Rs. 8k - 72k</div>
            </div>
            <div className="border"></div>
            <div className="course">
              <div className="information_header">Available Course</div>
              <div className="information_value">30 Courses</div>
            </div>
            <div className="border"></div>
            <div className="rank">
              <div className="information_header">Rank</div>
              <div className="information_value">93</div>
            </div>
          </div>
          <div className="border1"></div>

          <div className="apply">
            <button className="brochure_button">Brouchure</button>
            <button className="apply_button">Apply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
