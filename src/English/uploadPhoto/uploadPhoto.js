import React from "react";
import { NavLink } from "react-router-dom";
import "./uploadPhoto.css";

const UploadPhoto = () => {
  return (
    <div>
      <div className="container-fluid mainUpload">
        <div className="row">
          <div className="col-xl-12 uploadFirst">
            <span className="uploadText">Upload Photo</span>
            <span className="uploadArrow">
              <NavLink to="/English/Gallery">
                <img src="../../images/crossArr.png"></img>
              </NavLink>
            </span>
          </div>
          <div className="uploadSecond">
            <div className="col-xl-6 col-md-6">
              <div className="uploadRect">
                <p className="uploadText1">
                  Drag and Drop Photos Here
                  <br />
                  <br />
                  Or
                </p>
                <div className="uploadmainB">
                  <button className="uploadButton1">
                    Select Files to Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-2 uplaodAllI">
              <div className="upload1Img">
                <img src="../../images/Rectangle 46.png"></img>
                <p className="uploadDelete">Delete</p>
              </div>
              <div className="upload1Img">
                <img src="../../images/Rectangle 50.png"></img>
                <p className="uploadDelete">Delete</p>
              </div>
              <div className="upload1Img">
                <img src="../../images/Rectangle 48.png"></img>
                <p className="uploadDelete">Delete</p>
              </div>
              <div className="upload1Img">
                <img src="../../images/Rectangle 51.png"></img>
                <p className="uploadDelete">Delete</p>
              </div>
              <div className="upload1Img">
                <img src="../../images/Rectangle 49.png"></img>
                <p className="uploadDelete">Delete</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="uploadForm">
                <form>
                  <div class="form-group uploadTitle">
                    <label for="exampleFormControlInput1">Photo Title</label>
                    <input
                      type="email"
                      class="form-control uploadInput"
                      placeholder="Enter Email ID"
                    />
                  </div>

                  <div class="form-group uploadTitle">
                    <label for="exampleFormControlSelect1">Location</label>
                    <input
                      type="text"
                      class="form-control uploadInput"
                      placeholder="Enter Location"
                    />
                  </div>

                  <div class="form-group uploadTitle">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <input
                      type="text"
                      class="form-control uploadInput uploadDes"
                      placeholder="Add Description"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="">
            <div className="uploadCol">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <h6 className="uploadReq">Requirements</h6>
                <ol className="uploadReq1">
                  <li>
                    A maximum of five images can be uploaded at once per user.{" "}
                  </li>
                  <li>Only JPEG and PNG image formats are accepted.</li>
                  <li>The upload size limit is 15MB or less.</li>
                </ol>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <h6 className="uploadReq3">Rules</h6>
                <ol className="uploadReq2">
                  <li>
                    Your images will be made visible to the public only after
                    they have been reviewed and approved by an administrator.
                  </li>
                  <li>
                    We reserve the right to remove images after a specified
                    period of time.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" col-xl-6 uploadLastB">
              <button className=" uploadCancle1 uploadCancle">Cancel</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="/English/Uploadstatus">
                <button className="uploadAm uploadA">Agree and Upload </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
