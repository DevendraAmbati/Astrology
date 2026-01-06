import React, { useEffect } from "react";
import Img from "./Images/home banner (1).jpg";
import Img1 from "./Images/banner 5 (1).png";
import PopularServices from "../component/PopularServices";
import Carousels from "../component/Carousels";
import Technology from "../component/Technology";
import Img2 from "../component/Images/nameee.png";
import Img3 from "../component/Images/phn details (2).png";
import Img5 from "../component/Images/007 baner.png"
import Img4 from "../component/Images/24-1.jpg";
import Img6 from "../component/Images/bannnerrrrrr2 (1).png"
import Services from "./Services";
import Review from "../component/Review";
import PopularLocations from "../component/PopularLocations"
import Voide from "../../Voide.mp4"
import Aos from "aos";
import "aos/dist/aos.css";
import Icons from "./Icons";
function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    scrollToTop();
  });

  return (
    <>
    <div className="container-fulide">
      <div className="row">
        <div className="col-lg-4 col-md-4 ">
        <img src={Img2} alt="" width="100%"/>
        </div>
        <div className="col-lg-4 col-md-4 d-none d-md-block ">
          <img src={Img4} alt="" width="100%"/>
        </div>
        <div className="col-lg-4 col-md-4 ">
        <img src={Img3} alt="" width="100%"/>
        </div>
      
      
      </div>
    </div>
      <Carousels />

      <div className="container">
        <Icons />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <section>
            <div className="container ">
              <div className="">
                {/* <h1 className=" text-center"style={{color:'rgba(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)', fontFamily:'cursive'}}><b>ABOUT US</b></h1> */}

                <div className=" text-center ">
                  <h2 className="p-3">
                    <b className=" text-uppercase">
                      WELCOME TO SRI Shiva Shakthi JOYTHISHYA peetam{" "}
                    </b>
                  </h2>
                </div>
                <div className="row p-2">
                  <div className="col-lg-6 col-md-6 mt-5 text-center ">
                    {/* <img
                      src={Img2}
                      className="img-fluid rounded"
                      alt="Images"
                      data-aos="fade-up"
                      width="100%"
                    /> */}
                    <video src={Voide} width="100%" height="100%" loop autoPlay muted className="rounded"/>
                  </div>
                  <div className="col-lg-6 col-md-6" data-aos="fade-down">
                    <div
                      className="about-text mt-2"
                      style={{ textAlign: "justify" }}
                    >
                      <p className="mt-5 ">
                        "Welcome to SRI Shiva Shakthi JOYTHISHYA Peetam, where
                        celestial insights illuminate your path to
                        self-discovery and empowerment. Our Vedic astrologers
                        blend ancient wisdom with contemporary precision,
                        offering personalized horoscope readings that unravel
                        the mysteries of your life. Navigate challenges, seize
                        opportunities, and embark on a journey of growth with
                        our transformative guidance."
                      </p>
                      <p className="mt-5">
                        At SRI Shiva Shakthi JOYTHISHYA Peetam, we believe in
                        the profound impact of astrology on every facet of life.
                        Whether you seek clarity in relationships, career
                        decisions, or personal development, our committed team
                        is here to provide you with accurate and insightful
                        predictions. Join us on a cosmic exploration that
                        transcends time and space, guiding you toward a future
                        filled with purpose and fulfillment. Your destiny
                        awaits—discover it with SRI Shiva Shakthi JOYTHISHYA
                        Peetam.{" "}
                      </p>
                      <a
                        href="Contactus"
                        className="btn btn-warning p-3 fw-bold  "
                      >
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className=" mt-4">
        <img src={Img1} alt="" width="100%" />
      </div>
      <div className="bg-warning">
      <div className="container " >
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="mt-5"></h2>
          </div>
          <div >
            <Services />
          </div>
        </div>
      </div>
      </div>
      <div><img src={Img6} alt="" width="100%"/> </div>

      <div className="container mb-3 mt-3">
        <PopularLocations />
      </div>
      <div className="container mb-3 mt-3">
        <PopularServices />
      </div>
      

      <div className="mb-4">
        <img src={Img} alt="" width="100%" />
      </div>
      <div className="mb-4 container">
        <Technology />
      </div>
      <div className="mb-4 container">
        <Review />
      </div>
      <div><img src={Img5} alt="" width="100%"/> </div>


     
    </>
  );
}

export default Home;
