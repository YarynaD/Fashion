import React, { Component } from "react";

class Product extends Component {
  render() {
    const { img, tag, title } = this.props;

    return (
      <figure className="Product-small__item">
        <img className="Product-small__image" src={img} alt={tag} />
        <figcaption className="Product-small__caption">{title}</figcaption>
      </figure>
    );
  }
}

export default Product;
