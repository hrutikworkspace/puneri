import React, { useState } from "react";
import "./facility.css";
import Footer from "../footer/footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../header/header";

const Facility = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="outer-changes">
        <section className="facility-section">
          <div className="upper-wrapper">
            <Header />
            <div className="row header-pad-fac">
              <div className="col-xl-6 col-lg-6">
                <div>
                  <h5 className="future-h5">Impact of the intervention</h5>
                  <p className="future-p3">
                    River Rejuvenation Project is a comprehensive solution for
                    Mula- <br></br>Mutha river rejuvenation that includes river
                    cleaning, desilting, <br></br> developing the riverfront,
                    improving water consumption patterns <br></br> through
                    citizen awareness, upgrading the economy around the
                    riverfront, development of green spaces, and bio-diversity
                    improvement.
                  </p>
                </div>
                <div>
                  <button className="btn-lets2">Connect Us</button>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 new-class new-class2">
                <div className="">
                  <img src="../../images/Image.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="images-sec">
          <div className="container-flex">
            <div className="row">
              <div className="col-xl-12">
                <section className="section-env">
                  <div className="row btn-new-after">
                    <div className="col-xl-6">
                      <div className="">
                        <button
                          onClick={() => setShowText(!showText)}
                          className="btn-check-after"
                        >
                          {" "}
                          Clean the River and make it pollution free{" "}
                          <svg
                            className="svg-arrow2"
                            width="30"
                            height="9"
                            viewBox="0 0 30 9"
                            
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path className="blackcolor"
                              d="M29.8086 4.99174C30.0039 4.79648 30.0039 4.47989 29.8086 4.28463L26.6267 1.10265C26.4314 0.90739 26.1148 0.90739 25.9195 1.10265C25.7243 1.29791 25.7243 1.6145 25.9195 1.80976L28.748 4.63819L25.9195 7.46661C25.7243 7.66188 25.7243 7.97846 25.9195 8.17372C26.1148 8.36898 26.4314 8.36898 26.6267 8.17372L29.8086 4.99174ZM0.487305 5.13818L29.4551 5.13819L29.4551 4.13819L0.487305 4.13818L0.487305 5.13818Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => setShowText(!showText)}
                          className="btn-check-after"
                        >
                          {" "}
                          Reduce Risk of Flooding{" "}
                          <svg
                            className="svg-arrow2"
                            width="30"
                            height="9"
                            viewBox="0 0 30 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path className="blackcolor"
                              d="M29.8086 4.99174C30.0039 4.79648 30.0039 4.47989 29.8086 4.28463L26.6267 1.10265C26.4314 0.90739 26.1148 0.90739 25.9195 1.10265C25.7243 1.29791 25.7243 1.6145 25.9195 1.80976L28.748 4.63819L25.9195 7.46661C25.7243 7.66188 25.7243 7.97846 25.9195 8.17372C26.1148 8.36898 26.4314 8.36898 26.6267 8.17372L29.8086 4.99174ZM0.487305 5.13818L29.4551 5.13819L29.4551 4.13819L0.487305 4.13818L0.487305 5.13818Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => setShowText(!showText)}
                          className="btn-check-after"
                        >
                          {" "}
                          Retain Water{" "}
                          <svg
                            className="svg-arrow2"
                            width="30"
                            height="9"
                            viewBox="0 0 30 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path className="blackcolor"
                              d="M29.8086 4.99174C30.0039 4.79648 30.0039 4.47989 29.8086 4.28463L26.6267 1.10265C26.4314 0.90739 26.1148 0.90739 25.9195 1.10265C25.7243 1.29791 25.7243 1.6145 25.9195 1.80976L28.748 4.63819L25.9195 7.46661C25.7243 7.66188 25.7243 7.97846 25.9195 8.17372C26.1148 8.36898 26.4314 8.36898 26.6267 8.17372L29.8086 4.99174ZM0.487305 5.13818L29.4551 5.13819L29.4551 4.13819L0.487305 4.13818L0.487305 5.13818Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {showText && (
                      <div className="col-xl-6">
                        <ul className="ul-right">
                          <li className="li-right">
                            {" "}
                            6 new STP’s & augmentation of 5 STP’s proposed under
                            JICA & NRCD scheme
                          </li>
                          <li className="li-right">
                            Additional Treatment Capacity Planned: 364 MLD
                          </li>
                          <li className="li-right">
                            Approx. 18.5 km of Trunk lines to curb pollution
                            from existing piped outfalls
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
                <div className="ese-image">
                  <div className="ese2">
                    <input type="checkbox" id="open2" />
                    <label for="open2">
                      <img src="../../images/Environmental.png" className="content"/>
                    </label>
                    <label for="open2">
                      <img src="../../images/Social.png" className="content2" />
                    </label>
                    <label for="open2">
                      <img src="../../images/Economical.png" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intervention">
          <div className="container-fluid bottom-check">
            <div className="row">
              <div className="col-xl-12">
                <h5 className="sec-left-new">Key Interventions</h5>
                <div className="row align-items-new">
                  <div className="col-xl-6 col-lg-6">
                    <div>
                      <p className="class-inter">
                        By creating a meaningful public realm along the river
                        and promoting community activities and programmes that
                        lead to a better quality of life in the City of Pune,
                        the Municipal Corporation of Pune is committed to
                        transforming today's city, built on the motherly laps of
                        the Mula-Mutha riverbanks, into a healthy, vibrant place
                        to live and thrive.{" "}
                      </p>
                      <p className="class-inter">
                        The revitalization of the river will contribute to the
                        waterfront becoming a hub for social, cultural, and
                        recreational activities in the city, as well as propose
                        a resilient river edge to mitigate the threat of
                        flooding, making it an appealing place to live for both
                        current and future residents.{" "}
                      </p>
                      <p className="class-inter">
                        As a result, it contributes to the city's potential for
                        adding green recreational spaces, as well as providing
                        active citizen partnerships with civic and business
                        organizations, as well as a revitalized sense of
                        community.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 key-img1">
                    <div className="key-img">
                      <img src="../../images/12 1.png" />
                    </div>
                    <div className="key-img2">
                      <img src="../../images/Polygon 3.png" />
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

export default Facility;
