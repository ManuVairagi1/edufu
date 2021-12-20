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
            <h2 className="header">Types</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/08-512.png"
              alt=""
            />
          </div>

          <div className="box">
            <img
              class="tick_box"
              src="https://lh3.googleusercontent.com/proxy/Fh2c0NxLmodb0ommZ6xt1QhvDI1GqVnaXN6kDoxH-TLTvyswWK98KzI3VXJwKmpnvyYZsEVRsM48RICHFr6nLGh80h8dB1SaH1cc8CG_BjHnXpJ6NE7MZ5SGTzpa3RMc7V09Mpvi3CmJwDoMKrsfNUbaxeH32Fo_KTD-Bg"
              alt=""
            />
            <p className="option1">Wheat</p>
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://lh3.googleusercontent.com/proxy/Fh2c0NxLmodb0ommZ6xt1QhvDI1GqVnaXN6kDoxH-TLTvyswWK98KzI3VXJwKmpnvyYZsEVRsM48RICHFr6nLGh80h8dB1SaH1cc8CG_BjHnXpJ6NE7MZ5SGTzpa3RMc7V09Mpvi3CmJwDoMKrsfNUbaxeH32Fo_KTD-Bg"
              alt=""
            />
            <p className="option2">Barley</p>
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://lh3.googleusercontent.com/proxy/Fh2c0NxLmodb0ommZ6xt1QhvDI1GqVnaXN6kDoxH-TLTvyswWK98KzI3VXJwKmpnvyYZsEVRsM48RICHFr6nLGh80h8dB1SaH1cc8CG_BjHnXpJ6NE7MZ5SGTzpa3RMc7V09Mpvi3CmJwDoMKrsfNUbaxeH32Fo_KTD-Bg"
              alt=""
            />
            <p className="option2">Other</p>
          </div>
        </div>
        <div className="line"></div>

        <div className="type">
          <div className="easy">
            <h2 className="header">Type</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/08-512.png"
              alt=""
            />
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://lh3.googleusercontent.com/proxy/Fh2c0NxLmodb0ommZ6xt1QhvDI1GqVnaXN6kDoxH-TLTvyswWK98KzI3VXJwKmpnvyYZsEVRsM48RICHFr6nLGh80h8dB1SaH1cc8CG_BjHnXpJ6NE7MZ5SGTzpa3RMc7V09Mpvi3CmJwDoMKrsfNUbaxeH32Fo_KTD-Bg"
              alt=""
            />
            <p className="option1">All</p>
          </div>
          <div className="box">
            <img
              class="tick_box"
              src="https://lh3.googleusercontent.com/proxy/Fh2c0NxLmodb0ommZ6xt1QhvDI1GqVnaXN6kDoxH-TLTvyswWK98KzI3VXJwKmpnvyYZsEVRsM48RICHFr6nLGh80h8dB1SaH1cc8CG_BjHnXpJ6NE7MZ5SGTzpa3RMc7V09Mpvi3CmJwDoMKrsfNUbaxeH32Fo_KTD-Bg"
              alt=""
            />
            <p className="option2">Featured</p>
          </div>
        </div>

        <div className="search">
          <div className="easy">
            <h2 className="header">Search</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/08-512.png"
              alt=""
              className="arrowDown_icon"
            />
          </div>
          <input type="text" className="option1" placeholder="Search Course" />
        </div>

        <div className="city">
          <div className="easy">
            <h2 className="header">CITY/TOWN</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/08-512.png"
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
          <div className="box">
            <input type="checkbox" className="option1" />
            <label htmlFor="option1" className="option1">
              Other
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
