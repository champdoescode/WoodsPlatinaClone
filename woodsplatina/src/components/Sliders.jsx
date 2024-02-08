import React from 'react'
import './Sliders.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Sliders = () => {
    var settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <div className="flex flex-col mt-16 justify-center p-12 items-center bg-[#e7e4dd]">
        <div className="text-3xl mb-12">PROJECT GALLERY</div>
        <div className="w-4/5">
        <Slider {...settings}>
          <div className="h-4/5 p-4 bg-white shadow-2xl slider-box">
              <div>Grand Entrance Foyer 25ft High</div>
              <div className="">
                  <img src="./images/g1-small.jpg" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4 bg-white shadow-2xl slider-box">
              <div>Double Highted Air-Con Lobby</div>
              <div className="">
                  <img src="./images/g2-small.jpg" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4 bg-white shadow-2xl slider-box">
              <div>Grand Entrance Foyer 25ft High</div>
              <div className="">
                  <img src="./images/g3-small.jpg" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4 bg-white shadow-2xl slider-box">
              <div>Grand Entrance Foyer 25ft High</div>
              <div className="">
                  <img src="./images/g4-small.jpg" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4 bg-white shadow-2xl slider-box">
              <div>Grand Entrance Foyer 25ft High</div>
              <div className="">
                  <img src="./images/g5-small.jpg" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4 bg-white shadow-2xl slider-box">
              <div>Grand Entrance Foyer 25ft High</div>
              <div className="">
                  <img src="./images/g6-small.jpg" alt=""/>
              </div>
          </div>
         
          
        </Slider>
      </div>
      </div>
    )
}
