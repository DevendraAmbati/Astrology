import Carousel from 'react-bootstrap/Carousel';
import Img1 from "./Images/hbb.jpg";
import Img2 from "./Images/home bannner (1).jpg";
import './Carousel.css';

function CarouselFadeExample() {
  return (
   
    <div className='Carousel '>
    <Carousel fade>
      <Carousel.Item>
      <img  src={Img2} alt='' className='img-fluid' width="100%"/>
        <Carousel.Caption className="centered-caption">
        <div className="text-end bgimages">
          <h1></h1>
          <h2>
            <div className=" mb-3 text-white text-align-end"  data-aos="fade-right" >

 </div>
          </h2>
        </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={Img1} alt='' className='img-fluid'  width="100%" />
        <Carousel.Caption className="centered-caption">
        <div className="text-start bgimages">
          <h1></h1>
          <h2>
            <div className=" mb-3 text-white"  data-aos="fade-right">
            

 </div>
          </h2>
        </div>

        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
    
        <Carousel.Caption className="centered-caption">
        <div className="text-start bgimages">
          <h1></h1>
          <h2>
            <div className=" mb-3 text-white"  data-aos="fade-right">Hired Diesel Generator Sets From<br></br>
            <b >Canara Electrical</b> Engineers Monthly/Yearly<br></br>
Rental Contractors

 </div>
          </h2>
        </div>

        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
    


  );
}

export default CarouselFadeExample;