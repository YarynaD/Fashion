import React, { Component } from "react";
import "../../style/Navigation.less"

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <a href="#" className="Navigation__item">
          United Stats
        </a>
        <a href="#" className="Navigation__item">
          Find a Store
        </a>
        <a href="#" className="Navigation__item">
          Contact us
        </a>
      </nav>
    );
  }
}

export default Navigation;
