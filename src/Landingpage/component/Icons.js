import React from 'react'
import Slider from "react-slick";
import Img from "../component/Images/gemstone (1).png"
import Img1 from "../component/Images/Ayurvedic (1).png";
import Img2 from "../component/Images/vastu (2).png";
import Img3 from "../component/Images/Raj Yog (1).png";
import Img4 from "../component/Images/Rudraksha (1).png";
import Img5 from "../component/Images/Dosh (1).png";
import Img6 from "../component/Images/Vastu (3).png";
import Img7 from "../component/Images/prediction (1).png";
import Img8 from "../component/Images/Mantra (1).png";
import Img9 from "../component/Images/yantra (1).png";
import Img10 from "../component/Images/rudrakash (1).png";

const Icons = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='p-2'>
        <div className="container  mt-1">
        <h2 className="text-center "><b></b></h2>
        
        <Slider {...settings}>
          <div>
                      <div className="d-flex justify-content-center">
           <img src={Img} alt=""/>
          </div >
          <div><p className='text-center'>Gemstone</p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
           <img src={Img1} alt=""/>
          </div>
          <div><p className='text-center'>Ayurvedic</p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
          <img src={Img2} alt=""/>
          </div >
          <div><p className='text-center'>Vastu</p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
           <img src={Img3} alt=""/>
          </div>
          <div><p className='text-center'>Raj Yog </p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
            <img src={Img4} alt=""/>
          </div>
          <div><p className='text-center'>Rudraksha</p></div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
           <img src={Img5} alt=""/>
          </div>
          <div><p className='text-center'>Dosh</p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
           <img src={Img6} alt=""/>
          </div>
          <div><p className='text-center'>Vastu</p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
           <img src={Img7} alt=""/>
          </div>
          <div><p className='text-center'>Prediction</p></div>
          </div>
          
            <div>
          <div className="d-flex justify-content-center">
           <img src={Img8} alt=""/>
          </div>
          <div><p className='text-center'>Mantra</p></div>
          </div>
          <div>           
          <div className="d-flex justify-content-center">
           <img src={Img9} alt=""/>
          </div>
          <div><p className='text-center'>Yantra</p></div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
           <img src={Img10} alt=""/>
           
          </div>
          <div><p className='text-center'>Rudrakash</p></div>
          </div>
         
         

          
        </Slider>
      </div>
      
    </div>
  )
}

export default Icons
