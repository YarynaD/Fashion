import React, { Component } from "react";
import Product from "./Product";

import bags from "../../data/bags.json";

import "../../style/Grid.less";
import "../../style/Product-small.less";

class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        <article className="Product-small">
          <div className="Grid__cell_6 Grid__prefix_3">
            <h2 className="Product-small__header">Our accessory for ladies</h2>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <h3 className="Product-small__description">
              Creating Remarkable ladies bags Prints in 2 Colors Combination
            </h3>
          </div>
          <div className="Grid__cell_12 Grid__row">
            {bags.map((bag, i) => (
              <div
                className={`Grid__cell_3 ${i === 0 ? "Grid__cell_alpha" : ""} `}
              >
                <Product img={bag.img} tag={bag.tag} title={bag.name} />
              </div>
            ))}

            <div className="Grid__cell_3 Grid__cell_alpha">
              <Product
                img="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,e_improve,h_220,w_220/v1513913847/0a0904c0604a143dfb92089ea348a267--leather-handbags-leather-bags_mrkxsu.jpg"
                tag="bag"
                title="Fashionest bag"
              />
            </div>
            <div className="Grid__cell_3 Grid__cell_omega">
              <figure className="Product-small__item">
                <img
                  className="Product-small__image"
                  src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_pad,e_fill_light:70,g_center,h_220,w_220/v1513911113/4ac429c3bf8e7ddf66938bc46f94133e--coach-shoulder-bag-shoulder-bags_ggdtvq.jpg"
                  alt="bag"
                />
                <figcaption className="Product-small__caption">
                  Black stylish bag
                </figcaption>
              </figure>
            </div>
            <div className="Grid__cell_3 Grid__cell_alpha">
              <figure className="Product-small__item">
                <img
                  className="Product-small__image"
                  src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,e_improve,h_220,w_220/v1513913030/High-Heel-shoes-for-bride-2017-Design-20k_zoxztk.jpg"
                  alt="shoes"
                />
                <figcaption className="Product-small__caption">
                  Futures shoes
                </figcaption>
              </figure>
            </div>
            <div className="Grid__cell_3 Grid__cell_omega">
              <figure className="Product-small__item">
                <img
                  className="Product-small__image"
                  src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,e_improve,h_220,w_220/v1513913392/66a78435-748a-4699-ac2e-4ae1d918e1d1_dpzaea.jpg"
                  alt="shoes"
                />
                <figcaption className="Product-small__caption">
                  Nice Shoes
                </figcaption>
              </figure>
            </div>
            <div className="Grid__cell_3 Grid__cell_alpha">
              <figure className="Product-small__item">
                <img
                  className="Product-small__image"
                  src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_pad,h_220,w_220/v1513912062/black-leather-bridal-shoes_fashion-classics-peep-toe-buckle-trap-high-heels-sandals-shoes-woman-black_nwuhip.jpg"
                  alt="shoes"
                />
                <figcaption className="Product-small__caption">
                  Fashionest sandals
                </figcaption>
              </figure>
            </div>
            <div className="Grid__cell_3 Grid__cell_omega">
              <figure className="Product-small__item">
                <img
                  className="Product-small__image"
                  src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_pad,h_220,w_220/v1513912105/item_XL_26691140_73477627_sfmhth.jpg"
                  alt="shoess"
                />
                <figcaption className="Product-small__caption">
                  Stylish sandals
                </figcaption>
              </figure>
            </div>
          </div>
        </article>
        <article className="Section-description">
          <div className="Grid__cell_4 Grid__prefix_4">
            <h3 className="Section-description__header">STYLERS PHILOSOPHY</h3>
          </div>
          <div className="Grid__cell_6 Grid__prefix_3">
            <h2 className="Section-description__title">
              Simplicity & perfection
            </h2>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <p className="Section-description__description">
              The punk and cheeky version of the iconic “chaîne d’ancre” link is
              an ode to the wonders of time.<br />
              Prepare to be hooked.
            </p>
          </div>
          <div className="Grid__cell_3 Grid__prefix_5">
            <a className="Section-description__link" href="#">
              Tear and create
            </a>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <img
              className="Section-description__image"
              src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,e_fill_light:92,h_349,w_620/v1513215285/pexels-photo-206296_znhguv.jpg"
              alt="style"
            />
          </div>
        </article>
        <article className="Product-big">
          <div className="Grid__cell_8 Grid__prefix_2">
            <h2 className="Product-big__title ">Best Women Shoes Collection</h2>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <p className="Product-big__description">
              A narcissistic robot ​infiltrated our ​collections.
            </p>
          </div>
          <div className="Grid__cell_4 Grid__prefix_5">
            <a className="Product-big__link" href="#">
              Follow it’s tracks
            </a>
          </div>
          <section className="Product-big__catalogue">
            <div className="Grid__cell_6">
              <img
                src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_thumb,g_south,h_520,w_460/v1513997229/PI911MA10-O11_13_mv7rv4.jpg"
                alt="boots"
              />
            </div>
            <div className="Grid__cell_6">
              <section className="Product-big__catalogue Product-big__catalogue_col">
                <section className="Product-big__catalogue">
                  <figure className="Grid__cell_3 Grid__omega">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_thumb,h_220,w_220/a_0/v1513998614/o_women-sexy-high-heels-dress-shoes-pumps-h1211031-3608_xvqdy7.jpg"
                      alt="shoes"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket<br /> square 45
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                  <figure className="Grid__cell_3 Grid__alpha">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,h_220,w_220/v1513998664/87e6974b451b60f6f60229b58701e06e--formal-shoes-fancy-shoes_gpwomm.jpg"
                      alt="shoes"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket<br /> square 45
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                </section>
                <section className="Product-big__catalogue">
                  <figure className="Grid__cell_3 Grid__omega">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,w_220/v1513998677/gold-shoes-wedding-Sexy-Rhinestone-Sandals-2017-High-Heels-Women-Shoes-Platform-Shoes-Woman-High-Heels.jpg_640x640_mljnxz.jpg"
                      alt="shoes"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket<br /> square 45
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                  <figure className="Grid__cell_3 Grid__alpha">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,h_220,w_220/v1513998628/teddy-winnie-Blue-Velvet-Gladiator-Sandals-Women-Pumps-Ankle-Strap-High-Heel-Shoes-Woman-Peep-Toe_hes9om.jpg"
                      alt="shoes"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket<br /> square 45
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                </section>
              </section>
            </div>
          </section>
        </article>
        <article className="Section-description">
          <div className="Grid__cell_4 Grid__prefix_4">
            <h3 className="Section-description__header">JEWELRY</h3>
          </div>
          <div className="Grid__cell_6 Grid__prefix_3">
            <h2 className="Section-description__title">Types Of Cosmetics</h2>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <p className="Section-description__description">
              Having Your Breasts Reduced With Breast Augmentation
            </p>
          </div>
          <div className="Grid__cell_3 Grid__prefix_5">
            <a className="Section-description__link" href="#">
              Tear and create
            </a>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <img
              className="Section-description__image"
              src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,h_349,w_620/v1513250638/makeup-brush-1768790_640_uujdzz.jpg"
              alt="jewelry"
            />
          </div>
        </article>
        <article className="Product-big">
          <div className="Grid__cell_8 Grid__prefix_2">
            <h2 className="Product-big__title ">
              Beautiful Plants for Decoration
            </h2>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <p className="Product-big__description">
              A narcissistic robot ​infiltrated our ​collections.
            </p>
          </div>
          <div className="Grid__cell_4 Grid__prefix_5">
            <a className="Product-big__link" href="#">
              Follow it’s tracks
            </a>
          </div>
          <section className="Product-big__catalogue">
            <div className="Grid__cell_6">
              <img
                src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_thumb,g_east,h_520,w_460/v1513388645/flowerpots-2924375_640_axu4js.jpg"
                alt="plants"
              />
            </div>
            <div className="Grid__cell_6">
              <section className="Product-big__catalogue Product-big__catalogue_col">
                <section className="Product-big__catalogue">
                  <figure className="Grid__cell_3 Grid__omega">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_thumb,g_center,h_220,w_220/v1514001556/Prayer_Plant._Image_via_Decoist_cb0wmi.jpg"
                      alt="plants"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                  <figure className="Grid__cell_3 Grid__alpha">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_scale,e_colorize:10,h_220,w_220/v1514001517/813175026474_dsbzj8.jpg"
                      alt="plants"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                </section>
                <section className="Product-big__catalogue">
                  <figure className="Grid__cell_3 Grid__omega">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_thumb,g_south,h_220,w_220/v1514002558/e80da8762cc81bc4915b83090f24e22c--chlorophytum-indoor-plants_crbzyk.jpg"
                      alt="plants"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                  <figure className="Grid__cell_3 Grid__alpha">
                    <img
                      className="Product-big__image"
                      src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_thumb,g_center,h_220,w_220/v1514002418/3bbb42b7243cddfbd1699c4bbd525c44--home-plants-indoor-plants_ybrakh.jpg"
                      alt="plants"
                    />
                    <figcaption className="Product-big__promotext">
                      More colors available
                    </figcaption>
                    <figcaption className="Product-big__item-name">
                      Flamboyant Web pocket
                    </figcaption>
                    <figcaption className="Product-big__price">
                      $145.00
                    </figcaption>
                  </figure>
                </section>
              </section>
            </div>
          </section>
        </article>
        <article className="Section-description">
          <div className="Grid__cell_4 Grid__prefix_4">
            <h3 className="Section-description__header">COSMETIC</h3>
          </div>
          <div className="Grid__cell_6 Grid__prefix_3">
            <h2 className="Section-description__title">
              Cosmetics Accessories
            </h2>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <p className="Section-description__description">
              More and more people are opting to live the herbal life: moving
              away from chemicals and scientific medicines, and taking
              traditional herbs to do everything from losing weight to relieving
              pain. They are awesome
            </p>
          </div>
          <div className="Grid__cell_3 Grid__prefix_5">
            <a className="Section-description__link" href="#">
              Tear and create
            </a>
          </div>
          <div className="Grid__cell_8 Grid__prefix_2">
            <img
              className="Section-description__image"
              src="http://res.cloudinary.com/dvhn8lvvz/image/upload/c_crop,e_fill_light:92,g_center,h_349,w_620/v1513299896/coconut-oil-in-jar-2089930_640_wvntdd.jpg"
              alt="cosmetics"
            />
          </div>
        </article>
      </div>
    );
  }
}

export default Grid;
