import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img className="Logo__image" src="img/Diamond-logo.png" />
        <p className="Logo__name">DIAMOND</p>
        <p className="Logo__description">--fashion--</p>
      </div>
    );
  }
}

export default Logo;
