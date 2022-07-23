import { useState, useEfect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import img from "./Img/img1.jpg";
import img2 from "./Img/img2.jpg";
import img3 from "./Img/img3.jpg";
import img4 from "./Img/img4.jpg";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const imgSrcs = [img, img2, img3, img4];

  const nextSlide = () => {
    if (slideIndex !== 4) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 4) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(4);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={imgSrcs[slideIndex - 1]} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
