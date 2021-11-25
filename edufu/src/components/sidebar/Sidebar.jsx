import React, { Component } from "react";
import "../sidebar/sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="headers">
          <div className="filter">Filters</div>
          <div className="clear">Clear All</div>
        </div>

        <div className="institute_type">
          <div className="easy">
            <h2 className="header">Institute Type</h2>
            <img
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_arrowDown_0377EB.svg"
              alt=""
            />
          </div>

          <div className="box">
            <img
              class="tick_box"
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_radioCheck_mixed.svg"
              alt=""
            />
            <p className="option1">College</p>
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_radioCheck_mixed.svg"
              alt=""
            />
            <p className="option2">School</p>
          </div>
        </div>
        <div className="line"></div>

        <div className="type">
          <div className="easy">
            <h2 className="header">Type</h2>
            <img
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_arrowDown_0377EB.svg"
              alt=""
            />
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_radioCheck_mixed.svg"
              alt=""
            />
            <p className="option1">All</p>
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_radioCheck_mixed.svg"
              alt=""
            />
            <p className="option2">Featured</p>
          </div>
        </div>

        <div className="search">
          <div className="easy">
            <h2 className="header">Search</h2>
            <img
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_arrowDown_0377EB.svg"
              alt=""
            />
          </div>
          <input type="text" className="option1" placeholder="Search Course" />
        </div>

        <div className="city">
          <div className="easy">
            <h2 className="header">CITY/TOWN</h2>
            <img
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_arrowDown_0377EB.svg"
              alt=""
            />
          </div>
          <div className="box">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Nearby
            </label>
          </div>
          <div className="box">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Chennai
            </label>
          </div>
          <div className="box">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Hydrabad
            </label>
          </div>
        </div>

        <div className="college_type">
          <div className="easy">
            <h2 className="header">College Type</h2>
            <img
              src="https://dev.edufu.in/assets/images/institutionSearch/icon_arrowDown_0377EB.svg"
              alt=""
            />
          </div>
          <div className="box2">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              All
            </label>
          </div>
          <div className="box2">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Government
            </label>
          </div>
          <div className="box2">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Private
            </label>
          </div>

          <div className="box2">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Aided
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
