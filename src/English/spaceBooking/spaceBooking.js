import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./spaceBooking.css";

const SpaceBooking = () => {
  return (
    <div>
      <div className="outer-changes">
        <section className="facility-section">
          <div className="upper-wrapper">
            <Header />
            <div className="row header-pad-blog">
              <div className="col-xl-6 top-class header-pad2">
                <div>
                  <h5 className="blog-h5">
                    Unlock new opportunities by booking a space with us
                  </h5>
                  <p className="spaceBookP">
                    Whether you're looking to attend an event, host a meeting,
                    or join a workshop, we've got you covered. Our spaces are
                    versatile and can accommodate a variety of needs. From cozy
                    meeting rooms to spacious event halls, we have something for
                    everyone.
                  </p>
                </div>
                <div>
                  <NavLink to='#'>
                  <button className="btn-lets">Explore Spaces</button></NavLink>
                </div>
              </div>
              <div className="col-xl-6 new-class">
                <div className="blog-first">
                  <img src="../../images/survey-hed-img.png" />
                </div>
              </div>
            </div>

            <div className="row header-pad header-margin">
              <div className="col-xl-12">
                <h5 className="spaceBookOpen">Open Lawn</h5>
                <div className="row">
                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="/English/Spacebooking2">
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
                    <NavLink to="/English/Spacebooking2">
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

            <div className="row header-pad header-margin-line2">
              <div className="col-xl-12">
                <h5 className="spaceBook2T">Stalls and spaces</h5>
                <div className="row">
                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
</svg>

                              View on Map
                            </button>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-3 col-xl-3">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
                          src="../../images/stall.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="spaceBookTitle">Stall B2</p>
                          <div className="row bottom-cardSpaceP">
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Area <br />
                                150 Sqft
                              </p>
                            </div>
                            <div className="col-4 col-xl-4">
                              <p className="spaceBookSubT">
                                Rent <br />
                                8000/- per mo.
                              </p>
                            </div>
                          </div>
                          <div className="spaceButtons">
                            <button className="spaceBookButt1">Book Now</button>
                            <button className="spaceBookButt2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.47852C2 2.40623 4.50117 0 7.5 0C10.5327 0 13 2.45766 13 5.47852C13 6.61762 12.6504 7.71242 11.9883 8.6448L7.9209 14.9609C7.72483 15.2663 7.27557 15.2669 7.0791 14.9609L3.0293 8.66621C2.3526 7.68958 2 6.64733 2 5.47852ZM5 5.47852C5 6.85156 6.12157 7.96875 7.5 7.96875C8.87843 7.96875 10 6.85156 10 5.47852C10 4.10547 8.87843 2.98828 7.5 2.98828C6.12157 2.98828 5 4.10547 5 5.47852ZM8.8911 15.3658L11.4088 11.4449C13.6303 11.9557 15 12.8923 15 14.0117C15 15.9528 11.1357 17 7.5 17C3.86427 17 0 15.9528 0 14.0117C0 12.8931 1.3678 11.957 3.5866 11.446L6.1084 15.3668C6.75697 16.3746 8.2394 16.3779 8.8911 15.3658Z" fill="#1C21AB"/>
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
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default SpaceBooking;
