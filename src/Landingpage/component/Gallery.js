import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Img1 from "../component/Images/01 (2) (1).jpg";
import Img2 from "../component/Images/02 (2).jpg";
import Img3 from "../component/Images/03 (2).jpg";
import Img4 from "../component/Images/04 (2).jpg";
import Img5 from "../component/Images/11.jpg";
import Img6 from "../component/Images/06 (1).jpg";
import Img7 from "../component/Images/07.jpg";
import Img8 from "../component/Images/10.jpg";
import Img9 from "../component/Images/09.jpg";
import Img10 from "../component/Images/12.jpg";
import Img11 from "../component/Images/13.jpg";
const imagesArray = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
 
 
];
const ImageCard = ({ imgSrc, imgAlt }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="p-3">
        <img
          src={imgSrc}
          className="img-fluid"
          alt={imgAlt}
          style={{ width: "100%", height: "250px" }}
        />
      </div>
    </div>
  );
};
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>
                  <b
                    className=""
                    style={{
                      color:
                        "rgba(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)",
                    }}
                  >
                    GALLERY
                  </b>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-12 text-center mt-5">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {imagesArray.map((image, index) => (
                    <ImageCard key={index} imgSrc={image} imgAlt={{image}}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;