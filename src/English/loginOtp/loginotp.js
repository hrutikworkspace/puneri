import React from "react";
import { NavLink } from "react-router-dom";
import "./loginotp.css";
const Loginotp = () => {
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
                    <div className="lo-form-div">
                      <form>
                        <div class="form-group">
                          <label for="otp">OTP</label>
                          <input
                            class="form-control"
                            type="text"
                            name="otp"
                            id="otp"
                            placeholder="Enter otp"
                            required
                          />
                        </div>
                        <NavLink to="/">
                          <button className="loginotp-btn">Login</button>
                        </NavLink>
                        <div className="login-bottom">
                          <p>Haven't Receiverd OTP?</p>
                          <a href="">Re-send OTP</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 pad-none">
                <div className="lo-right-side-image">
                  <div className="lo-quotes-class">
                    <p>
                      The river is not just water, it's a life.<br></br>
                      <p className="sadguru">- Sadguru Jaggi Vasudev</p>
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

export default Loginotp;
