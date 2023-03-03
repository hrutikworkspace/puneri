import React from 'react'
import './spacebooking2.css'
import Header from '../header/header'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../footer/footer";
import { NavLink } from 'react-router-dom';





function Spacebooking2() {
    
    const spacebookingcarousel = {
        margin: 30,
        responsiveClass: true,
        touchDrag: true,
        mouseDrag: true,
    
        // nav: true,
        // autoplay:true,
              nav: true,
              navText:["<img id='spb2-back' src='../../images/backward.png'>","<img id='spb2-forward' src='../../images/forward.png'>"],
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
        <section className="facility-section">
          <div className="upper-wrapper">
            <Header />
            <div className='spb2-mainbody'>
            <div className='row spb2-carouselrow'>
             <div className=' col-xl-7  spb2-carimgbox'>
             <OwlCarousel
             {...spacebookingcarousel}
             className="owl-theme hp-owl"
           >
           <div className='spb2-carimg'>
           <img src='../../images/carimg.png'/>
           </div>
           <div className='spb2-carimg'>
           <img src='../../images/carimg.png'/>
           </div>
           <div className='spb2-carimg'>
           <img src='../../images/carimg.png'/>
           </div>
           <div className='spb2-carimg'>
           <img src='../../images/carimg.png'/>
           </div>
           </OwlCarousel>
             </div>
             <div className=' col-xl-5  spb-cartextbox'>
             <div className='spb2-cartexthead'>
             <span className='spb2-cth1'>Garden</span>
             <span className='spb2-cth2'><button><svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z"
                                  fill="#1C21AB"
                                />
                              </svg>View on Map</button></span>
             </div>
             <div className='spb2-details'>
            <span className='spb2-area'>Area<br></br><p>3000 Sqft</p></span>
            <span className='spb2-area'>Capacity<br></br><p>500-800 people</p></span>
            <span className='spb2-area'>Rent<br></br><p>2000/- per </p></span>
             </div>
             <div className='spb2-locd'>Location Details</div>
             <div className='spb2-locdetails'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
             <div className='spb2-suitable'>Suitable for</div>
             <div className='spb2-suitable1'>Birthday Parties, Get Together, Family, Collage Functions etc. </div>
             <div className='spb2-button'>
             <button className='spb2-btn1'>Send Inquiry</button>
             <button className='spb2-btn2'>Check Availability</button>
             </div>
             </div>

            </div>
            <div className='spb2-imgbox'>
            <div className='spb2-imghead'>Similar Locations</div>
            <div className="row spb2-imgcard">
                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/Garden-1.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Ground</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                3000 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Capacity <br />
                                500-800 people
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                2000/- per hr.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              View on Map
                            </button>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/Street.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Lawn and stage</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                3000 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Capacity <br />
                                300-500 people
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                2000/- per hr.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              View on Map
                            </button>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/Lawn.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">River side lawn</p>
                          <div className="row bottom-cardSpaceP">
                            <div className=" col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                3000 Sqft
                              </p>
                            </div>
                            <div className=" col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Capacity <br />
                                150-200 people
                              </p>
                            </div>
                            <div className=" col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                2000/- per hr.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              View on Map
                            </button>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/Grp.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Garden</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                3000 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Capacity <br />
                                80-100 people
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                2000/- per hr.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              View on Map
                            </button>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
            </div>

</div>
<Footer/>
            </div>
            </section>
            </div>
            
            </>
  )
}

export default Spacebooking2