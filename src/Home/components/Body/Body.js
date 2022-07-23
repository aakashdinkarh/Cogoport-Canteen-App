import React, { Component } from "react";

import "./Body.css";
import bg from "./sidebar-bg_pattern.webp";
import img2 from "./body-img.jpg";
import Slider from "../slider/Slider"

class Body extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="headingContainer">
            <h1 className="welcome">Welcome to Cogoport-Canteen</h1>
          </div>


          <div className="mainDesc" >
                <div className="block1">
                  <h1 className="canteen-intro">
                    Because your most loved corner is right here
                  </h1>
                     <h3 className="text pose">
                        {" "}
                        A canteen is a favourite place of students in a school. In a
                        vacant period, students and teachers come here for refreshment.
                        Our school tuck shop is housed in a big hall. It is on one side
                        of the school. There is enough space in the canteen for students
                        and teachers. There is a separate section for the girl students.
                        It is run by a contractor who is a kind and efficient man. He
                        keeps the canteen neat and clean.A number of eatables are
                        available in the tuck shop. Some items like ‘samosas’ and
                        ‘omelette’ are prepared on order. The boys who serve as waiters
                        are very polite and efficient.
                     </h3>
                  
                </div>

                <img
                  className="one block2"
                  src="https://giardino.axiomthemes.com/wp-content/uploads/2017/12/bg-39-copyright.jpg"
                />
          </div>
                        
        
          <div className="text-container ">
            <h3 className="text">
              Recently, a growing interest to Machine Learning forced the
              companies to focus and invest on it. Besides, this major is
              considered an exciting research topic for scholars in Computer
              Science. Machine Learning (ML) is the major of computational
              science, which focuses on analyzing and interpreting patterns and
              structures in data to enable learning, reasoning
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
