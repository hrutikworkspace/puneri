import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/footer";
import "./surveyDetail.css";

function SurveyDetail() {
  return (
    <>
      <div className="surveyDetails">
        <div>
          <img src="../../images/surveyD.png" className="surveyD-img" />
        </div>
        <div className="">
          <div className="surveyD-pad">
            <p className="surveyD-1">Municipal corporation performance </p>
            <p className="surveyD-2">
              Welcome to our survey page! We appreciate you taking the time to
              share your valuable feedback with us. Your <br></br>input will
              help us improve our products and services to better meet your
              needs.
            </p>
            <p className="surveyD-2">
              Before we begin, please take a moment to read through the
              following information:
            </p>

            <ol className="surveyD-3">
              <li>
                Your participation in this survey is completely voluntary.
              </li>
              <li>
                All responses are confidential and will be used for research
                purposes only.
              </li>
              <li>
                The survey should take approximately [X] minutes to complete.
              </li>
              <li>
                Please answer each question to the best of your ability, based
                on your personal experiences and opinions.
              </li>
              <li>
                If you encounter any technical difficulties while taking the
                survey, please contact us for assistance.
              </li>
            </ol>

            <div className="row">
              <div className="col-md-2">
                <span className="SD-span1">30 Mar 23</span>
                <br></br>
                <span className="SD-span2">End date</span>
              </div>
              <div className="col-md-2">
                <span className="SD-span1">10</span>
                <br></br>
                <span className="SD-span2">Questions</span>
              </div>
              <div className="col-md-2">
                <span className="SD-span1">2 Min</span> <br></br>
                <span className="SD-span2">Aprox time</span>
              </div>
            </div>
            <div className="surveyD-btn">
<NavLink to='/English/Survey'>

              <button className="surveyD-btn1">Back to Survey List</button></NavLink>
<NavLink to='/English/Blogtopic'>
              <button className="surveyD-btn2">Start Survey</button></NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SurveyDetail;
