import React from "react";
import { NavLink } from "react-router-dom";
import "./logIn.css";

const LogIn = () => {
  return (
    <>
      <div className="container-fluid class-sign">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="logo-head">
                      <img src="../../images/logo.png" />
                    </div>
                    <div className="form-divpm">
                      <h5 className="login-head">Login</h5>
                      <form>
                        <div class="form-grouppm">
                          <label for="Name">Mobile Number/Email Id</label>
                          <input
                            class="form-control"
                            type="text"
                            name="Name"
                            id="Name"
                            placeholder="Enter Mobile Number/Email Id"
                            required
                          />
                        </div>
                        {/* <div class="form-group">
                          <label for="email">Email Id</label>
                          <input
                            class="form-control"
                            type="email"
                            name="emial"
                            id="email"
                            placeholder="Enter Email ID"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label for="mobile">Mobile Number</label>
                          <input
                            class="form-control"
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="+91 - 000 000 0000"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label for="birth">Birth Date</label>
                          <input
                            class="form-control"
                            type="text"
                            name="birth"
                            id="birth"
                            placeholder="DD/MM/YYYY"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Gender</label>
                          <div className="gender-label">
                            <input
                              type="radio"
                              id="Male"
                              name="fav_language"
                              value="Male"
                            />
                            <label className="label-radio" for="html">
                              Male
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                              type="radio"
                              id="Female"
                              name="fav_language"
                              value="Female"
                            />
                            <label className="label-radio" for="Female">
                              Female
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                              type="radio"
                              id="Other"
                              name="fav_language"
                              value="Other"
                            />
                            <label className="label-radio" for="Other">
                              Other
                            </label>
                          </div>
                        </div> */}
                        <NavLink to="/Loginotp">
                          <button className="account-btnpm">Send OTP</button>
                        </NavLink>
                        <div className="login-bottompm">
                          <p>Already have an account?</p>
                          <NavLink to="/SignUp">SignUp</NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 pad-none">
                <div className="right-side-imagepm">
                  <div className="quotes-classpm">
                    <p>
                      When we give importance to rivers,
                      <br></br>
                      <p>we give importance to our future generations.</p>
                      <br></br>
                      <p className="gandhi">-Hon. PM. Narendra Modi</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
