import React, { Component } from "react";
import "../../style/Navigation.less";
import navigation from "../../data/navigation";

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        {navigation.map(link => (
          <a href="#" className="Navigation__item">
            {link.name}
          </a>
        ))}
      </nav>
    );
  }
}

export default Navigation;
