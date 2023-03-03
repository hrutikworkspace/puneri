import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./survey.css";

function Survey() {
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
                    Your Voice Matters:<br></br> Help Improve Pune's Livability
                    by Taking Our Survey
                  </h5>
                </div>
                <div>
                  <NavLink to='/English/Blogtopic'>
                  <button className="btn-lets2">Take Latest Survey</button>
                  </NavLink>
                  <NavLink to='#'>

                  <button className="btn-lets">Explore Open Surveys</button>
                  </NavLink>

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
                <h5 className="latestblog1">Recently Launched </h5>
                <div className="row">
                  <div className="col-xl-4 col-md-4">
                    <NavLink to="/English/SurveyDetail">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/s-1.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="others">
                            Municipal corporation performance
                          </p>
                          <div className="bottom-card">
                            <span>End date 31-03-2023 </span>
                            <span className="pb-4">Approx. Time 2 Min</span>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  <div className="col-xl-4 col-md-4">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/s-2.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="others">
                            Municipal corporation performance
                          </p>
                          <div className="bottom-card ">
                            <span>End date 31-03-2023 </span>
                            <span className="pb-4">Approx. Time 2 Min</span>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  <div className="col-xl-4"></div>
                </div>
              </div>
            </div>

            <div className="row header-pad header-margin-line2">
              <div className="col-xl-12">
                <h5 className="latestblog1">Ending in 2 Dyas </h5>
                <div className="row">
                  <div className="col-xl-4 col-md-4">
                    <NavLink to="#">
                      <div class="card-blogs sur">
                        <img
                          src="../../images/s-1.png"
                          className="survey-img-card"
                        />
                        <div class="container-fluid">
                          <p className="others">
                            Municipal corporation performance
                          </p>
                          <div className="bottom-card">
                            <span>End date 31-03-2023 </span>
                            <span className="pb-4">Approx. Time 2 Min</span>
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
      <Footer />
    </>
  );
}

export default Survey;
