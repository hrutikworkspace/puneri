import React from "react";
import "../../English/forum/forum.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
const Forum = () => {
  return (
    <>
      <div className="outer-changes">
        <section className="facility-section">
          <div className="upper-wrapper">
            <Header />
            <div className="row header-pad-blog">
              <div className="col-xl-6 top-class header-pad2">
                <div>
                  <p className="future-p2">
                    Your opinion matters!<br></br>
                    Join the community and post<br></br>
                    on our forum.
                  </p>
                </div>
                <div>
                  <NavLink to="/English/Blogtopic">
                    <button className="btn-lets2">Start New Topic</button>
                  </NavLink>
                  <NavLink to="#">
                  <button className="btn-lets">Explore Topics</button>
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-6 top-class new-class">
                <div className="facility-first-sec">
                  <img src="../../images/Image (3).png" />
                </div>
              </div>
            </div>
            <div className="row header-pad header-margin">
              <div className="col-xl-12">
                <h5 className="trending">Trending Topics</h5>
                <div className="row">
                  <div className="col-xl-4">
                    <NavLink to="/English/ForumBlog">
                      <div class="card-forum">
                        <div className="container-fluid">
                          <div className="top-a-class">
                            <a href="">Water Conservation </a>
                          </div>
                          <div className="headings">
                            <h4>
                              How can we protect our rivers from <br></br>
                              pollution caused by human activities?
                            </h4>
                            <p>
                              Human activities such as industrialization,
                              agriculture, and urbanization <br></br> have a
                              significant impact on the health of rivers. Let’s
                              discuss the ideas <br></br> that we can reduce
                              pollution created by society{" "}
                            </p>
                          </div>
                          <div className="DisViw">
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>35 Discussing</p>
                            </div>
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>1558 Views</p>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-contain">
                          <div className="blogd-top2">
                            <img src="../../images/blog-icon.png" alt="" />

                            <span>Veronica Ben</span>
                          </div>
                          <div>
                            <span>22 Jan 2023</span>
                          </div>
                        </div>
                      </div>{" "}
                    </NavLink>
                  </div>
                  <div className="col-xl-4">
                    
                    <div class="card-forum">
                      <div className="container-fluid">
                        <div className="top-a-class">
                          <a href="">Water Conservation </a>
                        </div>
                        <div className="headings">
                          <h4>
                            How can we protect our rivers from <br></br>
                            pollution caused by human activities?
                          </h4>
                          <p>
                            Human activities such as industrialization,
                            agriculture, and urbanization <br></br> have a
                            significant impact on the health of rivers. Let’s
                            discuss the ideas <br></br> that we can reduce
                            pollution created by society{" "}
                          </p>
                        </div>
                        <div className="DisViw">
                          <div className="disc-1">
                            <svg
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                                fill="#1C21AB"
                              />
                              <path
                                d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                                fill="#1C21AB"
                              />
                              <path
                                d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                                fill="#1C21AB"
                              />
                            </svg>
                            <p>35 Discussing</p>
                          </div>
                          <div className="disc-1">
                            <svg
                              width="18"
                              height="12"
                              viewBox="0 0 18 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                                fill="#1C21AB"
                              />
                            </svg>
                            <p>1558 Views</p>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-contain">
                        <div className="blogd-top2">
                          <img src="../../images/blog-icon.png" alt="" />

                          <span>Veronica Ben</span>
                        </div>
                        <div>
                          <span>22 Jan 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div class="card-forum">
                      <div className="container-fluid">
                        <div className="top-a-class">
                          <a href="">Water Conservation </a>
                        </div>
                        <div className="headings">
                          <h4>
                            How can we protect our rivers from <br></br>
                            pollution caused by human activities?
                          </h4>
                          <p>
                            Human activities such as industrialization,
                            agriculture, and urbanization <br></br> have a
                            significant impact on the health of rivers. Let’s
                            discuss the ideas <br></br> that we can reduce
                            pollution created by society{" "}
                          </p>
                        </div>
                        <div className="DisViw">
                          <div className="disc-1">
                            <svg
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                                fill="#1C21AB"
                              />
                              <path
                                d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                                fill="#1C21AB"
                              />
                              <path
                                d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                                fill="#1C21AB"
                              />
                            </svg>
                            <p>35 Discussing</p>
                          </div>
                          <div className="disc-1">
                            <svg
                              width="18"
                              height="12"
                              viewBox="0 0 18 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                                fill="#1C21AB"
                              />
                            </svg>
                            <p>1558 Views</p>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-contain">
                        <div className="blogd-top2">
                          <img src="../../images/blog-icon.png" alt="" />

                          <span>Veronica Ben</span>
                        </div>
                        <div>
                          <span>22 Jan 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section-topics">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="topics-sel">
                    <h5>Select Topic for Discussion</h5>
                  </div>
                  <div className="all-a-tags">
                    <div className="a-tag-divide1">
                      <button href="">All Topics</button>

                      <button href="">People Awareness</button>
                      <button href="">Health</button>
                      <button href="">Politics</button>
                      <button href="">Discussion</button>
                      <button href="">Opinion</button>
                      <button href="">Corporation Updates</button>
                    </div>
                    <div className="a-tag-divide2">
                      <button href="">Water Conservation</button>
                      <button href="">Eco-system </button>
                      <button href="">Eco-system </button>
                      <button href="">River Conservation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row header-pad">
            <div className="col-xl-12">
              <h5 className="trending">River Conservation</h5>
              <div className="row">
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div class="card-forum">
                    <div className="container-fluid">
                      <div className="top-a-class">
                        <a href="">Water Conservation </a>
                      </div>
                      <div className="headings">
                        <h4>
                          How can we protect our rivers from <br></br>
                          pollution caused by human activities?
                        </h4>
                        <p>
                          Human activities such as industrialization,
                          agriculture, and urbanization <br></br> have a
                          significant impact on the health of rivers. Let’s
                          discuss the ideas <br></br> that we can reduce
                          pollution created by society{" "}
                        </p>
                      </div>
                      <div className="DisViw">
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                              fill="#1C21AB"
                            />
                            <path
                              d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>35 Discussing</p>
                        </div>
                        <div className="disc-1">
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                              fill="#1C21AB"
                            />
                          </svg>
                          <p>1558 Views</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-contain">
                      <div className="blogd-top2">
                        <img src="../../images/blog-icon.png" alt="" />

                        <span>Veronica Ben</span>
                      </div>
                      <div>
                        <span>22 Jan 2023</span>
                      </div>
                    </div>
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

export default Forum;
