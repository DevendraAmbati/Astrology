import React, { Component } from "react";
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';

import Img1 from "../component/Images/002.jpg";
import Img2 from "../component/Images/003.jpg";
import Img3 from "../component/Images/004.jpg";
import Img4 from "../component/Images/005.jpg";
import Img5 from "../component/Images/006.jpg";
import Img6 from "../component/Images/007.jpg";
import Img7 from "../component/Images/008.jpg";
import Img8 from "../component/Images/009.jpg";
import Img9 from "../component/Images/010.jpg";
import Img10 from "../component/Images/011.jpg";
import Img11 from "../component/Images/012.jpg";
import Img12 from "../component/Images/001 (1) (1).jpg";
// src\Landingpage\component\Images\001 (1) (1).jpg
// C:\Users\dell\Downloads\src\src\Landingpage\component\Images\001 (1) (1).jpg

const images=[
  {
    id:1,
    image:"https://acharyaastrocenter.com/wp-content/uploads/2021/07/aries-.png",
    Text:"",
  },
  {
    id:2,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/taurus-.png",
    Text:"",
  },
  {
    id:3,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/gemini.png",
    Text:"",
  },
  {
    id:4,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/cancer.png",
    Text:"",
  },
  {
    id:5,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/leo.png",
    Text:"",
  },
  {
    id:6,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/virgo.png",
    Text:"",
  },
  {
    id:7,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/libra.png",
    Text:"",
  },
  {
    id:8,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/scorpio.png",
    Text:"",
  },
  {
    id:9,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/saggitarius.png",
    Text:"",
  },
  {
    id:10,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/capricorn.png",
    Text:"",
  },
  {
    id:11,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/aquarius.png",
    Text:"",
  },
  {
    id:12,
    image:"http://acharyaastrocenter.com/wp-content/uploads/2021/07/pisces.png",
    Text:"",
  },
  
]
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container  mt-1">
        <h2 className="text-center "><b></b></h2>
        
        <Slider {...settings}>
          {images.map((imag)=>(
            <div className="d-flex justify-content-center" key={imag.id}>
           <img src={imag.image} alt=""/>
          </div>
          ))}
        </Slider>
      </div>
    );
  }
}