import React, { Component } from "react";
import Card from "../Card/Card";
import Sidebar from "../sidebar/Sidebar";
import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="hero_page">
        <Sidebar />
        <div className="card_hero">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Main;
