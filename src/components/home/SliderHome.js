import React, {Component } from "react";
import Slider from "react-slick";
class SliderHome extends Component {
    render(){
      const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplayaSpeed:3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return(
        <div>
        <Slider {...settings}>
          <div>
            <img className="slider-img" src="/images/slider1.jpg"></img>
          
          </div>
          <div>
          <img className="slider-img" src="/images/slider2.jpg"></img>
          </div>
          <div>
          <img className="slider-img" src="/images/slider3.jpg"></img>
          </div>
      
        </Slider>
      </div>
  
      );
  
    }
  
  }
  export default SliderHome;