import React from "react";
import "./blog.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="outer-changes">
        <section className="facility-section">
          <div className="upper-wrapper">
            <Header />
            <div className="row header-pad-blog">
              <div className="col-xl-6 top-class header-pad2">
                <div>
                  <h5 className="blog-h5">
                    Let’s Spread Positivity,<br></br> Knowledge, and Experience
                  </h5>
                  <p className="blog-p">
                    River Rejuvenation Project is a comprehensive solution for
                    Mula- <br></br>Mutha river rejuvenation that includes river
                    cleaning, desilting, <br></br> developing the riverfront
                  </p>
                </div>
                <div>
                  <NavLink to='/English/WriteBlog'>
                  <button className="btn-lets2">Write a Blog</button>
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-6 new-class">
                <div className="blog-first">
                  <img src="../../images/Image (2).png" />
                </div>
              </div>
            </div>
            <div className="row header-pad header-margin">
              <div className="col-xl-12">
                <h5 className="latestblog">Latest Blogs</h5>
                <div className="row">
                  <div className="col-xl-3">
                    <NavLink to="/English/BlogD">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3">
                    <a href="">
                      <div class="card-blogs">
                        <img src="../../images/Rectangle 27.png" />
                        <div class="container-fluid">
                          <p className="others">
                            06 Hangout Spots Near <br></br> Mula Mutha River
                            Pune
                          </p>
                          <div className="bottom-card">
                            <span>By: Shashikant Patil</span>
                            <p>20 Jan 2023</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="botd-sec">
            <div className="row">
              <div className="col-xl-12">
                <div className="row blog-sec-new">
                  <div className="col-xl-4">
                    <div className="botm">
                      <p>
                        Blog of the Month by <br></br> Riya Chouhan
                      </p>
                      <h5>What is Muthai River Walk?</h5>
                      <a href="">Read Now</a>
                      <svg
                        width="54"
                        height="15"
                        viewBox="0 0 54 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M52.9854 8.28963C53.3759 7.8991 53.3759 7.26594 52.9854 6.87541L46.6215 0.511452C46.2309 0.120927 45.5978 0.120927 45.2073 0.511452C44.8167 0.901976 44.8167 1.53514 45.2073 1.92567L50.8641 7.58252L45.2073 13.2394C44.8167 13.6299 44.8167 14.2631 45.2073 14.6536C45.5978 15.0441 46.2309 15.0441 46.6215 14.6536L52.9854 8.28963ZM0.598145 8.58252H52.2783V6.58252H0.598145V8.58252Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div class="asd">
                      <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor new-changes">
                          {/* <i class="fa fa-thumbs-o-up"></i> */}
                          <svg
                            width="40"
                            height="41"
                            viewBox="0 0 40 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_289_588)">
                              <path
                                d="M2.42188 39.2003C2.42188 39.8476 2.94647 40.3722 3.59375 40.3722H10.625C11.7517 40.3722 12.7557 39.8387 13.3997 39.0117C16.2561 39.9141 19.2212 40.3722 22.2205 40.3722H31.7188C33.6572 40.3722 35.2344 38.795 35.2344 36.8566C35.2344 36.3991 35.1456 35.9621 34.986 35.5608C36.4777 35.1543 37.5781 33.788 37.5781 32.1691C37.5781 31.2694 37.2379 30.4479 36.68 29.8253C37.2382 29.2028 37.5781 28.3812 37.5781 27.4816C37.5781 26.5819 37.2379 25.7604 36.68 25.1378C37.2382 24.5153 37.5781 23.6937 37.5781 22.7941C37.5781 20.8556 36.001 19.2784 34.0625 19.2784H27.648C27.739 19.063 27.8329 18.8445 27.9288 18.6223C28.6398 16.9734 29.375 15.2684 29.375 13.4191C29.375 10.1799 26.7551 7.48157 23.5156 7.48157C22.9572 7.48157 22.4762 7.87585 22.3666 8.42365L21.7682 11.4159C20.9821 15.3459 20.1138 15.7909 16.8835 17.4462C16.0297 17.8835 15.0266 18.3977 13.8559 19.0651C13.317 17.8136 12.0718 16.9347 10.625 16.9347H3.59375C2.94647 16.9347 2.42188 17.4593 2.42188 18.1066V39.2003ZM17.952 19.532C19.7012 18.6357 20.9647 17.9885 21.954 16.8926C22.9657 15.7717 23.5779 14.3181 24.0665 11.8755L24.4495 9.95959C25.9192 10.3899 27.0312 11.8001 27.0312 13.4191C27.0312 14.7844 26.3934 16.2636 25.7764 17.6943C25.5527 18.2134 25.3244 18.7441 25.1212 19.2784H23.5156C22.8683 19.2784 22.3438 19.803 22.3438 20.4503C22.3438 21.0976 22.8683 21.6222 23.5156 21.6222H34.0625C34.7086 21.6222 35.2344 22.148 35.2344 22.7941C35.2344 23.4401 34.7086 23.9659 34.0625 23.9659H31.7188C31.0715 23.9659 30.5469 24.4905 30.5469 25.1378C30.5469 25.7851 31.0715 26.3097 31.7188 26.3097H34.0625C34.7086 26.3097 35.2344 26.8355 35.2344 27.4816C35.2344 28.1276 34.7086 28.6534 34.0625 28.6534H31.7188C31.0715 28.6534 30.5469 29.178 30.5469 29.8253C30.5469 30.4726 31.0715 30.9972 31.7188 30.9972H34.0625C34.7086 30.9972 35.2344 31.523 35.2344 32.1691C35.2344 32.8151 34.7086 33.3409 34.0625 33.3409H31.7188C31.0715 33.3409 30.5469 33.8655 30.5469 34.5128C30.5469 35.1601 31.0715 35.6847 31.7188 35.6847C32.3648 35.6847 32.8906 36.2105 32.8906 36.8566C32.8906 37.5026 32.3648 38.0284 31.7188 38.0284H22.2205C19.4736 38.0284 16.7578 37.611 14.1406 36.7882V21.6121C15.6516 20.7112 16.9153 20.0634 17.952 19.532ZM4.76562 19.2784H10.625C11.2711 19.2784 11.7969 19.8043 11.7969 20.4503V36.8566C11.7969 37.5026 11.2711 38.0284 10.625 38.0284H4.76562V19.2784Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M9.45312 34.5128C9.45312 35.1601 8.92853 35.6847 8.28125 35.6847C7.63397 35.6847 7.10938 35.1601 7.10938 34.5128C7.10938 33.8655 7.63397 33.3409 8.28125 33.3409C8.92853 33.3409 9.45312 33.8655 9.45312 34.5128Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M23.5156 1.54407V3.96594C23.5156 4.61322 24.0402 5.13782 24.6875 5.13782C25.3348 5.13782 25.8594 4.61322 25.8594 3.96594V1.54407C25.8594 0.89679 25.3348 0.372192 24.6875 0.372192C24.0402 0.372192 23.5156 0.89679 23.5156 1.54407Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M30.8904 3.48042L29.233 5.13783C28.7752 5.5956 28.7752 6.33748 29.233 6.79524C29.6907 7.2527 30.4326 7.2527 30.8904 6.79524L32.5475 5.13783C33.0052 4.68007 33.0052 3.93819 32.5475 3.48042C32.0897 3.02296 31.3478 3.02296 30.8904 3.48042Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M16.8277 3.48042C16.3699 3.93819 16.3699 4.68007 16.8277 5.13783L18.4848 6.79524C18.9426 7.2527 19.6844 7.2527 20.1422 6.79524C20.5997 6.33748 20.5997 5.5956 20.1422 5.13783L18.4848 3.48042C18.0273 3.02296 17.2852 3.02296 16.8277 3.48042Z"
                                fill="#8000FF"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_289_588">
                                <rect
                                  width="40"
                                  height="40"
                                  fill="white"
                                  transform="translate(0 0.372192)"
                                />
                              </clipPath>
                            </defs>
                          </svg>

                          <div className="likes ps-3">
                            1.2k <br></br> Likes
                          </div>
                        </div>
                        <div class="like p-2 cursor new-changes">
                          {/* <i class="fa fa-commenting-o"/> */}
                          <svg
                            width="40"
                            height="41"
                            viewBox="0 0 40 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M33.5749 3.06763H6.38603C3.54332 3.06763 1.23047 5.38002 1.23047 8.22319V24.8622C1.23047 27.699 3.53325 30.0077 6.36772 30.0178V37.5684L17.2188 30.0178H33.5749C36.4176 30.0178 38.7305 27.7049 38.7305 24.8622V8.22319C38.7305 5.38002 36.4176 3.06763 33.5749 3.06763ZM36.5332 24.8622C36.5332 26.4932 35.2061 27.8205 33.5749 27.8205H16.5294L8.56499 33.3627V27.8205H6.38603C4.75479 27.8205 3.42773 26.4932 3.42773 24.8622V8.22319C3.42773 6.59172 4.75479 5.26489 6.38603 5.26489H33.5749C35.2061 5.26489 36.5332 6.59172 36.5332 8.22319V24.8622Z"
                              fill="#8000FF"
                            />
                            <path
                              d="M11.2671 10.8315H28.6937V13.0288H11.2671V10.8315Z"
                              fill="#8000FF"
                            />
                            <path
                              d="M11.2671 15.519H28.6937V17.7163H11.2671V15.519Z"
                              fill="#8000FF"
                            />
                            <path
                              d="M11.2671 20.2065H28.6937V22.4038H11.2671V20.2065Z"
                              fill="#8000FF"
                            />
                          </svg>

                          <div className="likes ps-3">
                            368 <br></br> Comments
                          </div>
                        </div>
                        <div class="like p-2 cursor new-changes">
                          {/* <i class="fa fa-share"></i> */}
                          <svg
                            width="40"
                            height="41"
                            viewBox="0 0 40 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 40.3722L2.97793 33.5138C6.46609 26.5697 13.4734 21.995 21.1829 21.5713V31.0365L40 15.6811L21.1829 0.372192V9.85623C9.41977 10.4699 0 20.2607 0 32.1593V40.3722ZM2.49341 29.7258C3.70414 19.8655 12.1713 12.1684 22.3554 12.1684H23.5279V5.3012L36.2898 15.6838L23.5279 26.098V19.1965H22.3554C14.3665 19.1965 6.9241 23.2296 2.49341 29.7258Z"
                              fill="#8000FF"
                            />
                          </svg>

                          <div className="likes ps-3">
                            85 <br></br> Shares
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <div className="">
                      <img src="../../images/girl-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="botd-sec1">
            <div className="">
              <div className="">
                <div className=" blog-sec-new">
                  <div className="">
                    <div className="botm">
                      <p>
                        Blog of the Month by <br></br> Riya Chouhan
                      </p>
                      <h5>What is Muthai River Walk?</h5>
                      <a href="">Read Now</a>
                      <svg
                        width="54"
                        height="15"
                        viewBox="0 0 54 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M52.9854 8.28963C53.3759 7.8991 53.3759 7.26594 52.9854 6.87541L46.6215 0.511452C46.2309 0.120927 45.5978 0.120927 45.2073 0.511452C44.8167 0.901976 44.8167 1.53514 45.2073 1.92567L50.8641 7.58252L45.2073 13.2394C44.8167 13.6299 44.8167 14.2631 45.2073 14.6536C45.5978 15.0441 46.2309 15.0441 46.6215 14.6536L52.9854 8.28963ZM0.598145 8.58252H52.2783V6.58252H0.598145V8.58252Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <div class="asd">
                      <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor new-changes">
                          {/* <i class="fa fa-thumbs-o-up"></i> */}
                          <svg
                            width="40"
                            height="41"
                            viewBox="0 0 40 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_289_588)">
                              <path
                                d="M2.42188 39.2003C2.42188 39.8476 2.94647 40.3722 3.59375 40.3722H10.625C11.7517 40.3722 12.7557 39.8387 13.3997 39.0117C16.2561 39.9141 19.2212 40.3722 22.2205 40.3722H31.7188C33.6572 40.3722 35.2344 38.795 35.2344 36.8566C35.2344 36.3991 35.1456 35.9621 34.986 35.5608C36.4777 35.1543 37.5781 33.788 37.5781 32.1691C37.5781 31.2694 37.2379 30.4479 36.68 29.8253C37.2382 29.2028 37.5781 28.3812 37.5781 27.4816C37.5781 26.5819 37.2379 25.7604 36.68 25.1378C37.2382 24.5153 37.5781 23.6937 37.5781 22.7941C37.5781 20.8556 36.001 19.2784 34.0625 19.2784H27.648C27.739 19.063 27.8329 18.8445 27.9288 18.6223C28.6398 16.9734 29.375 15.2684 29.375 13.4191C29.375 10.1799 26.7551 7.48157 23.5156 7.48157C22.9572 7.48157 22.4762 7.87585 22.3666 8.42365L21.7682 11.4159C20.9821 15.3459 20.1138 15.7909 16.8835 17.4462C16.0297 17.8835 15.0266 18.3977 13.8559 19.0651C13.317 17.8136 12.0718 16.9347 10.625 16.9347H3.59375C2.94647 16.9347 2.42188 17.4593 2.42188 18.1066V39.2003ZM17.952 19.532C19.7012 18.6357 20.9647 17.9885 21.954 16.8926C22.9657 15.7717 23.5779 14.3181 24.0665 11.8755L24.4495 9.95959C25.9192 10.3899 27.0312 11.8001 27.0312 13.4191C27.0312 14.7844 26.3934 16.2636 25.7764 17.6943C25.5527 18.2134 25.3244 18.7441 25.1212 19.2784H23.5156C22.8683 19.2784 22.3438 19.803 22.3438 20.4503C22.3438 21.0976 22.8683 21.6222 23.5156 21.6222H34.0625C34.7086 21.6222 35.2344 22.148 35.2344 22.7941C35.2344 23.4401 34.7086 23.9659 34.0625 23.9659H31.7188C31.0715 23.9659 30.5469 24.4905 30.5469 25.1378C30.5469 25.7851 31.0715 26.3097 31.7188 26.3097H34.0625C34.7086 26.3097 35.2344 26.8355 35.2344 27.4816C35.2344 28.1276 34.7086 28.6534 34.0625 28.6534H31.7188C31.0715 28.6534 30.5469 29.178 30.5469 29.8253C30.5469 30.4726 31.0715 30.9972 31.7188 30.9972H34.0625C34.7086 30.9972 35.2344 31.523 35.2344 32.1691C35.2344 32.8151 34.7086 33.3409 34.0625 33.3409H31.7188C31.0715 33.3409 30.5469 33.8655 30.5469 34.5128C30.5469 35.1601 31.0715 35.6847 31.7188 35.6847C32.3648 35.6847 32.8906 36.2105 32.8906 36.8566C32.8906 37.5026 32.3648 38.0284 31.7188 38.0284H22.2205C19.4736 38.0284 16.7578 37.611 14.1406 36.7882V21.6121C15.6516 20.7112 16.9153 20.0634 17.952 19.532ZM4.76562 19.2784H10.625C11.2711 19.2784 11.7969 19.8043 11.7969 20.4503V36.8566C11.7969 37.5026 11.2711 38.0284 10.625 38.0284H4.76562V19.2784Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M9.45312 34.5128C9.45312 35.1601 8.92853 35.6847 8.28125 35.6847C7.63397 35.6847 7.10938 35.1601 7.10938 34.5128C7.10938 33.8655 7.63397 33.3409 8.28125 33.3409C8.92853 33.3409 9.45312 33.8655 9.45312 34.5128Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M23.5156 1.54407V3.96594C23.5156 4.61322 24.0402 5.13782 24.6875 5.13782C25.3348 5.13782 25.8594 4.61322 25.8594 3.96594V1.54407C25.8594 0.89679 25.3348 0.372192 24.6875 0.372192C24.0402 0.372192 23.5156 0.89679 23.5156 1.54407Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M30.8904 3.48042L29.233 5.13783C28.7752 5.5956 28.7752 6.33748 29.233 6.79524C29.6907 7.2527 30.4326 7.2527 30.8904 6.79524L32.5475 5.13783C33.0052 4.68007 33.0052 3.93819 32.5475 3.48042C32.0897 3.02296 31.3478 3.02296 30.8904 3.48042Z"
                                fill="#8000FF"
                              />
                              <path
                                d="M16.8277 3.48042C16.3699 3.93819 16.3699 4.68007 16.8277 5.13783L18.4848 6.79524C18.9426 7.2527 19.6844 7.2527 20.1422 6.79524C20.5997 6.33748 20.5997 5.5956 20.1422 5.13783L18.4848 3.48042C18.0273 3.02296 17.2852 3.02296 16.8277 3.48042Z"
                                fill="#8000FF"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_289_588">
                                <rect
                                  width="40"
                                  height="40"
                                  fill="white"
                                  transform="translate(0 0.372192)"
                                />
                              </clipPath>
                            </defs>
                          </svg>

                          <div className="likes ps-3">
                            1.2k <br></br> Likes
                          </div>
                        </div>
                        <div class="like p-2 cursor new-changes">
                          {/* <i class="fa fa-commenting-o"/> */}
                          <svg
                            width="40"
                            height="41"
                            viewBox="0 0 40 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M33.5749 3.06763H6.38603C3.54332 3.06763 1.23047 5.38002 1.23047 8.22319V24.8622C1.23047 27.699 3.53325 30.0077 6.36772 30.0178V37.5684L17.2188 30.0178H33.5749C36.4176 30.0178 38.7305 27.7049 38.7305 24.8622V8.22319C38.7305 5.38002 36.4176 3.06763 33.5749 3.06763ZM36.5332 24.8622C36.5332 26.4932 35.2061 27.8205 33.5749 27.8205H16.5294L8.56499 33.3627V27.8205H6.38603C4.75479 27.8205 3.42773 26.4932 3.42773 24.8622V8.22319C3.42773 6.59172 4.75479 5.26489 6.38603 5.26489H33.5749C35.2061 5.26489 36.5332 6.59172 36.5332 8.22319V24.8622Z"
                              fill="#8000FF"
                            />
                            <path
                              d="M11.2671 10.8315H28.6937V13.0288H11.2671V10.8315Z"
                              fill="#8000FF"
                            />
                            <path
                              d="M11.2671 15.519H28.6937V17.7163H11.2671V15.519Z"
                              fill="#8000FF"
                            />
                            <path
                              d="M11.2671 20.2065H28.6937V22.4038H11.2671V20.2065Z"
                              fill="#8000FF"
                            />
                          </svg>

                          <div className="likes ps-3">
                            368 <br></br> Comments
                          </div>
                        </div>
                        <div class="like p-2 cursor new-changes">
                          {/* <i class="fa fa-share"></i> */}
                          <svg
                            width="40"
                            height="41"
                            viewBox="0 0 40 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 40.3722L2.97793 33.5138C6.46609 26.5697 13.4734 21.995 21.1829 21.5713V31.0365L40 15.6811L21.1829 0.372192V9.85623C9.41977 10.4699 0 20.2607 0 32.1593V40.3722ZM2.49341 29.7258C3.70414 19.8655 12.1713 12.1684 22.3554 12.1684H23.5279V5.3012L36.2898 15.6838L23.5279 26.098V19.1965H22.3554C14.3665 19.1965 6.9241 23.2296 2.49341 29.7258Z"
                              fill="#8000FF"
                            />
                          </svg>

                          <div className="likes ps-3">
                            85 <br></br> Shares
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img src="../../images/girl-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row header-pad">
            <div className="col-xl-12">
              <h5 className="latestblog">Blogs By Citizens</h5>
              <div className="row">
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a href="">
                    <div class="card-blogs">
                      <img src="../../images/Rectangle 27.png" />
                      <div class="container-fluid">
                        <p className="others">
                          06 Hangout Spots Near <br></br> Mula Mutha River Pune
                        </p>
                        <div className="bottom-card">
                          <span>By: Shashikant Patil</span>
                          <p>20 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <NavLink to='/English/WriteBlog'>
              <button className="blog-footer">Write a blog</button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
