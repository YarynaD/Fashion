import React, { Component } from "react";
import  "../../style/Search-in.less";

class Search extends Component {
  render() {
    return (
      <div className="Search-in">
        <button className="Search-in__menu-button">
          <img
            className="Search-in__hamburger"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          />
        </button>
        <form className="Search-in__form">
          <img
            className="Search-in__icon"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/105498-200.png"
          />
          <input
            className="Search-in__input"
            type="search"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
