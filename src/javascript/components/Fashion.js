import React, { Component } from "react";

import "../../style/common.less"
import "../../style/Grid.less"
import "../../style/Header.less"
import "../../style/Logo.less"

import "../../style/Product-big.less"

import "../../style/Promo.less"
import "../../style/Search-in.less"
import "../../style/Section-description.less"
import "../../style/Sitemap.less"
import "../../style/Social-media.less"
import "../../style/Subscribe.less"
import "../../style/User-options.less"

import Navigation from "./Navigation";
import Search from "./Search";
import Logo from "./Logo";
import Grid from "./ProductsFeed";

class Fashion extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <section className="Header__top">
            <Navigation/>
          </section>
          <section className="Header__bottom">
            <Search/>
            <Logo/>
            <div className="User-options">
              <a href="#">
                <figure className="User-options__item">
                  <img
                    className="User-options__image"
                    src="img/icons8-customer-50.png"
                    alt="icon"
                  />
                  <figcaption className="User-options__caption">
                    Account
                  </figcaption>
                </figure>
              </a>
              <a href="#">
                <figure className="User-options__item">
                  <img
                    className="User-options__image"
                    src="https://png.icons8.com/material/540/add-shopping-cart.png"
                    alt="icon"
                  />
                  <figcaption className="User-options__caption">
                    Cart
                  </figcaption>
                </figure>
              </a>
            </div>
          </section>
        </header>
        <main>
          <article className="Promo">
            <div className="Grid">
              <div className="Grid__cell_4 Grid__prefix_4 Grid__align">
                <h3 className="Promo__header">PEOPLE READY-TO-HELP</h3>
              </div>
              <div className="Grid__cell_10 Grid__prefix_1 Grid__align">
                <h2 className="Promo__title">
                  Provides All Essential Accessory Tips
                </h2>
              </div>
              <div className="Grid__cell_4 Grid__prefix_4">
                <a href="#" className="Promo__description">
                  Discover the meshe shows
                </a>
              </div>
            </div>
          </article>
          <Grid/>
        </main>
        <aside className="Grid">
          <section className="Section-description Section-description_contacts">
            <div className="Section-description__contacts-item">
              <h2 className="Section-description__title Section-description__title_small">
                Here to help
              </h2>
              <p className="Section-description__description Section-description__description_small">
                Have a question? You may find an answer in our{" "}
                <a className="Section-description__link" href="#">
                  FAQs
                </a>. But you can also contact us:
              </p>
              <a
                className="Section-description__link Section-description__link_shift"
                href="#"
              >
                Call 100-444-7700
              </a>
              <p className="Section-description__description Section-description__description_small">
                Monday to Friday: 9:00 a.m. - 6:00 p.m. & Thursday: 9:00 a.m. -
                7:00 p.m. ET Saturday: 10:00 a.m. - 6:00 p.m.
              </p>
              <a
                className="Section-description__link Section-description__link_shift"
                href="#"
              >
                Send us an email
              </a>
            </div>
            <div className="Section-description__contacts-item">
              <h2 className="Section-description__title Section-description__title_small">
                Meshe parteners
              </h2>
              <p className="Section-description__description Section-description__description_small">
                Check ou our parteners:
              </p>
              <a
                className="Section-description__link Section-description__link_shift"
                href="#"
              >
                check all here
              </a>
            </div>
          </section>
        </aside>
        <footer>
          <div className="Grid">
            <section className="Subscribe">
              <div className="Subscribe__top">
                <div className="Subscribe__call-to-action">
                  <h3 className="Subscribe__header">
                    Let’s keep the conversation going
                  </h3>
                  <p className="Subscribe__description">
                    Receive our newsletter and discover our stories,
                    collections, and surprises.
                  </p>
                </div>
                <form className="Subscribe__form" action="#">
                  <input
                    className="Subscribe__input"
                    type="text"
                    placeholder="E-mail"
                  />
                  <button className="Subscribe__button">Subscribe</button>
                </form>
              </div>
              <p className="Subscribe__details">
                By subscribing to our newsletter, you agree that your data will
                be processed in compliance with our General
                <a
                  className="Subscribe__details Subscribe__details_link"
                  href="#"
                >
                  Terms and Conditions of Use
                </a>{" "}
                and our{" "}
                <a
                  className="Subscribe__details Subscribe__details_link"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>
            </section>
            <nav className="Sitemap">
              <div className="Grid__cell_3 Grid__alpha">
                <section className="Sitemap__section">
                  <p className="Sitemap__section-title">Services</p>
                  <a className="Sitemap__item" href="#">
                    Contact Us
                  </a>
                  <a className="Sitemap__item" href="#">
                    FAQ
                  </a>
                  <a className="Sitemap__item" href="#">
                    Find a store
                  </a>
                  <a className="Sitemap__item" href="#">
                    Gifting
                  </a>
                  <a className="Sitemap__item" href="#">
                    Made to Measure
                  </a>
                </section>
              </div>
              <div className="Grid__cell_3 Grid__omega">
                <section className="Sitemap__section">
                  <p className="Sitemap__section-title">Orders</p>
                  <a className="Sitemap__item" href="#">
                    Payment
                  </a>
                  <a className="Sitemap__item" href="#">
                    Shipping
                  </a>
                  <a className="Sitemap__item" href="#">
                    Collect in store
                  </a>
                  <a className="Sitemap__item" href="#">
                    Track orders
                  </a>
                  <a className="Sitemap__item" href="#">
                    Exchange & returns
                  </a>
                </section>
              </div>
              <div className="Grid__cell_3">
                <section className="Sitemap__section">
                  <p className="Sitemap__section-title">Diamond House</p>
                  <a className="Sitemap__item" href="#">
                    The Hermès Foundation
                  </a>
                  <a className="Sitemap__item" href="#">
                    Careers
                  </a>
                  <a className="Sitemap__item" href="#">
                    Find a store
                  </a>
                  <a className="Sitemap__item" href="#">
                    Finance
                  </a>
                  <a className="Sitemap__item" href="#">
                    Our partner brands
                  </a>
                </section>
              </div>
              <div className="Grid__cell_3">
                <section className="Sitemap__section">
                  <p className="Sitemap__section-title">Legal</p>
                  <a className="Sitemap__item" href="#">
                    Terms and conditions
                  </a>
                  <a className="Sitemap__item" href="#">
                    Privacy & cookies
                  </a>
                  <a className="Sitemap__item" href="#">
                    BCR
                  </a>
                  <a className="Sitemap__item" href="#">
                    California Supply Act
                  </a>
                  <a className="Sitemap__item" href="#">
                    Legal issues
                  </a>
                  <a className="Sitemap__item" href="#">
                    Accessibility
                  </a>
                </section>
              </div>
            </nav>
          </div>
          <hr />
          <section className="Social-media">
            <div className="Grid">
              <div className="Grid__cell_3">
                <a href="#">
                  {" "}
                  <img
                    className="Social-media__icons"
                    src="img/40-google-plus-128.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="Social-media__icons"
                    src="img/twitter.png"
                    alt=""
                  />
                </a>
                <a href="">
                  {" "}
                  <img
                    className="Social-media__icons"
                    src="img/facebook-2048-black.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="Social-media__icons"
                    src="img/instagram_PNG8.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="Grid__cell_4 Grid__prefix_5">
                <section className="Social-media__copyright">
                  Morocco © Copyright Uixone, Sarl 2017
                </section>
              </div>
            </div>
          </section>
          <div className="Grid">
            <div className="Logo Grid__cell_2 Grid__prefix_5">
              <img className="Logo__image" src="img/Diamond-logo.png" />
              <p className="Logo__name">DIAMOND</p>
              <p className="Logo__description">--fashion--</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Fashion;
