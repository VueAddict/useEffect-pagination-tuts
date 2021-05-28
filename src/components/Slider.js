import React, { useState } from "react";
import images from "../seed.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // length of slides
  const length = images?.length;

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide === 0 ? length - 1 : currentSlide - 1;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide === length - 1 ? 0 : currentSlide + 1;
    });
  };

  if (images === undefined || !images.length) return null;

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {images?.map((slide, i) => {
        return (
          <div
            key={i}
            className={`slide ${i === currentSlide ? "active" : ""}`}
          >
            {i === currentSlide && (
              <img src={slide?.imageUrl} alt="random image from unplash" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
