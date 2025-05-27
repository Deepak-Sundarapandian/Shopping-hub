import React from 'react';
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sliderImages} from '../../utils/images';

const Slider = () => {
  return (
    <div classNameName = "hero-slider">
      <div classNameName='hero-slider-item'>
        <img src = {sliderImages[1]} alt = "" />
      </div>
    </div>
  )
}

export default Slider