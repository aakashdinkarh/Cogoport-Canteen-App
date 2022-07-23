import React, { Component } from "react";

import "./Footer.css";
import imgSrc from "./new.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="SakshiComponent">
        <div className="main_1">
          <div className="check">
            <h1>Cogoport-Canteen</h1>
            <h1 className="insta">We are on instagram</h1>
            <h1 className=" text insta check2 ">Get in Touch</h1>
          </div>

          <div className=" yo">
            <div className="text_3">
              Wood fired Neapolitan pizzas prepared with the purest respect for
              traditions, fresh hand-made pasta (do not miss our pasta with the
              truffles) and over a hundred different wines from the most
              renowned winemakers. Ah, and one last trick: delicious Italian
              Gelato for dessert!
            </div>

            <img className="image" src={imgSrc} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
