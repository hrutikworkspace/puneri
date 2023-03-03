import React from "react";
import "./aboutus.css";
import Header from "../header/header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../footer/footer";
import Slide from "../slide/slide";

const AboutUs = () => {
  const transformation = {
    margin: 30,
    responsiveClass: true,
    touchDrag: false,
    mouseDrag: false,

    // nav: true,
    // autoplay:true,
    //       nav: true,
    //   navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    autoplayTimeout: 12000,
    dots: true,
    autoplay: false,
    infinite: false,
    // items:3,
    slideBy: 3,
    // smartSpeed: 1000,
    rewind: true,

    responsive: {
      0: {
        items: 1,
        touchDrag: true,
      },
      400: {
        items: 1,
        touchDrag: true,
      },
      600: {
        items: 1,
        touchDrag: true,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className="outer-changes">
        <section className="about-section">
          <div className="upper-wrapper">
            <Header/>
            <div className="row header-pad">
              <div className="col-xl-5 top-class">
                <div>
                  <p className="future-p2">
                    Revitalizing Pune's Rivers: <br></br> The Mula-Mutha River
                    <br></br>Rejuvenation Project
                  </p>
                </div>
                <div>
                  <button className="btn-lets2">Connect Us</button>
                  <button className="btn-lets">About River</button>
                </div>
              </div>
              <div className="col-xl-7 top-class new-class">
                <div className="about-first-sec">
                  <p>
                    The Mula-Mutha River Rejuvenation Project is aimed at
                    transforming the Mula, Mutha, and Mula-Mutha rivers into
                    valuable assets for the city. With urbanization, these water
                    bodies have faced increasing levels of pollution and
                    degradation.{" "}
                  </p>
                  <p>
                    <b>
                      The goal of this project is to improve the state of the
                      rivers and make them more accessible and enjoyable for the
                      people of Pune.
                    </b>
                    By revitalizing these rivers, the Pune Municipal Corporation
                    hopes to not only address environmental and health issues,
                    but also create recreational and educational opportunities
                    for the community and potentially drive economic growth.{" "}
                  </p>
                  <p>
                    The Pune Municipal Corporation looks forward to working with
                    local stakeholders to ensure the success and sustainability
                    of this important project.
                  </p>
                </div>
                <div className="about-first-img">
                  <img src="../../images/about poly.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-second-sec">
          <div className="container-flex">
            <div className="row">
              <div className="col-xl-12">
                <h5 className="sec-left3">Transformation</h5>
                <div className="slide-check">
                  <svg
                    width="92"
                    height="16"
                    viewBox="0 0 92 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.792893 7.29289C0.402367 7.68341 0.402367 8.31657 0.792892 8.7071L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6568L2.91422 7.99999L8.57107 2.34314C8.96159 1.95261 8.96159 1.31945 8.57107 0.928925C8.18054 0.538401 7.54738 0.5384 7.15685 0.928925L0.792893 7.29289ZM91.5 7L1.5 6.99999L1.5 8.99999L91.5 9L91.5 7Z"
                      fill="white"
                    />
                  </svg>

                  <p>Slide To Check</p>
                  <svg
                    width="92"
                    height="16"
                    viewBox="0 0 92 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M91.2071 8.70711C91.5976 8.31659 91.5976 7.68343 91.2071 7.2929L84.8431 0.92894C84.4526 0.538415 83.8195 0.538415 83.4289 0.928939C83.0384 1.31946 83.0384 1.95263 83.4289 2.34315L89.0858 8.00001L83.4289 13.6569C83.0384 14.0474 83.0384 14.6806 83.4289 15.0711C83.8195 15.4616 84.4526 15.4616 84.8431 15.0711L91.2071 8.70711ZM0.5 9L90.5 9.00001L90.5 7.00001L0.5 7L0.5 9Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <OwlCarousel
                      {...transformation}
                      className="owl-theme hp-owl"
                    >
                      <div className="image-frame">
                        {/* <img src="../../images/Frame 13.png" /> */}
                        <div>
                        {/* <p className="slide-para-1">Before</p> */}

                        </div>

                        <Slide/>
                      </div>
                      <div className="image-frame">
                        {/* <img src="../../images/Frame 13.png" /> */}
                        <Slide/>
                      </div>
                      <div className="image-frame">
                        {/* <img src="../../images/Frame 13.png" /> */}
                        <Slide/>
                      </div>
                    </OwlCarousel>
                    <p className="trans-name">Dandekar Pul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
