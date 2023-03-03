import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./gallery.css";

function Gallery() {
  return (
    <>
      <div className="outer-changes" style={{ background: "#DED7DE" }}>
        <div className="upper-wrapper">
          <Header />
          <div className="row header-pad-blog">
            <div className="col-xl-5 top-class header-pad2">
              <div>
                <p className="future-p9">
                  Ready to make an impact? <br></br> Upload a photo and join
                  <br></br>the Community
                </p>
                {/* <p className="gal-p1">
                <span>Photo Subject:</span>
                <span>Water Bodies of Pune</span>
              </p> */}
                {/* <p className="gal-p2">16-02-2023 - 16-03-2023</p> */}
              </div>
              <div className="gal-btn">
                <NavLink to="/English/UploadPhoto">
                  <button className="btn-lets2">Upload a photo </button>
                </NavLink>
                {/* <button className="btn-lets">Know About Competition</button> */}
              </div>
            </div>
            <div className="col-xl-7 top-class new-class">
              <div className="about-first-sec1">
                <img src="../../images/Gal-hed-img.png" />
              </div>
              <div className="about-first-img">
                {/* <img src="../../images/about poly.png" /> */}
              </div>
            </div>
          </div>

          <section className="gal-sec-1">
            <p className="gal-p3">
              <span>Winners of Competition</span>
              <NavLink>
                <span className="gal-p4">View Album</span>
              </NavLink>
            </p>
            <div className="container-flex">
              <div className="row">
                <div className="col-xl-12">
                  <div className="row g-overlay">
                    <div className="col-md-6 middle">
                      <img
                        src="../../images/market.png"
                        className="gallery-images"
                      />
                    </div>
                    <div className="col-md-6 paddingAlldiv">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-6">
                              <img
                                src="../../images/ganesh.png"
                                className="gallery-images"
                              />
                            </div>
                            <div className="col-6">
                              <div className="row">
                                <div className="col-xl-12">
                                  <img
                                    src="../../images/road.png"
                                    className="gallery-images"
                                  />
                                </div>
                                <div className="col-xl-12">
                                  <img
                                    src="../../images/dhol.png"
                                    className="gallery-images gal-dhol"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gal-sec-2">
            <div className="container-flex">
              <p className="gal-p3">
                <span>Vintage Pune </span>
                <NavLink>
                  <span className="gal-p4">View Album</span>
                </NavLink>
              </p> 
              <div className="row">
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-xl-4">
                      <img
                        src="../../images/riverV.png"
                        className="gallery-images gallery-imagesDown"
                      />
                    </div>
                    <div className="col-xl-3">
                      <img
                        src="../../images/nala.png"
                        className="gallery-images gallery-imagesDown"
                      />
                    </div>
                    <div className="col-xl-5">
                      <img
                        src="../../images/temple.png"
                        className="gallery-images gallery-imagesDown1"
                      />
                    </div>

                    <div className="col-xl-4">
                      <img
                        src="../../images/river2.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                    <div className="col-xl-4">
                      <img
                        src="../../images/temple2.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                    <div className="col-xl-2">
                      <img
                        src="../../images/bridge.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                    <div className="col-xl-2">
                      <img
                        src="../../images/cows.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="gal-sec-1">
            <p className="gal-p3">
              <span>Photos By Citizens</span>
              <NavLink>
                <span className="gal-p4">View Album</span>
              </NavLink>
            </p>
            <div className="container-flex">
              <div className="row">
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src="../../images/market.png"
                        className="gallery-images"
                      />
                    </div>
                    <div className="col-md-6 paddingAlldiv">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-6">
                              <img
                                src="../../images/ganesh.png"
                                className="gallery-images"
                              />
                            </div>
                            <div className="col-6">
                              <div className="row">
                                <div className="col-xl-12">
                                  <img
                                    src="../../images/road.png"
                                    className="gallery-images"
                                  />
                                </div>
                                <div className="col-xl-12">
                                  <img
                                    src="../../images/dhol.png"
                                    className="gallery-images gal-dhol"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gal-sec-2">
            <div className="container-flex">
              <p className="gal-p3">
                <span>Photos by PMC</span>
                <NavLink>
                  <span className="gal-p4">View Album</span>
                </NavLink>
              </p>
              <div className="row">
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-xl-4">
                      <img
                        src="../../images/riverV.png"
                        className="gallery-images gallery-imagesDown"
                      />
                    </div>
                    <div className="col-xl-3">
                      <img
                        src="../../images/nala.png"
                        className="gallery-images gallery-imagesDown"
                      />
                    </div>
                    <div className="col-xl-5">
                      <img
                        src="../../images/temple.png"
                        className="gallery-images gallery-imagesDown1"
                      />
                    </div>

                    <div className="col-xl-4">
                      <img
                        src="../../images/river2.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                    <div className="col-xl-4">
                      <img
                        src="../../images/temple2.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                    <div className="col-xl-2">
                      <img
                        src="../../images/bridge.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                    <div className="col-xl-2">
                      <img
                        src="../../images/cows.png"
                        className="gallery-images gal-pt"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
