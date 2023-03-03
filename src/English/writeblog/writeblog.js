import React from "react";
import { NavLink } from "react-router-dom";
import "../../English/writeblog/writeblog.css";
function WriteBlog() {
  return (
    <div className="container-fluid Btp-body">
      <div className="row">
        <div className="Btp-header">
          <span className="Btp-upload">Write Blog</span>
          <span className="Btp-cross">
            <NavLink to='/English/Blog'>            
                <img src="../../images/crossArr.png" />
                </NavLink>

          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="row Btp-row1">
            <div className="col-xl-4 col-md-4">
              <div class="form-group">
                <label for="otp">Title</label>

                <input
                  class="form-control"
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter Topic Title"
                  required
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-3">
              <div class="form-group">
                <label>
                  Category
                  <input
                    class="form-control"
                    list="browsers"
                    name="myBrowser"
                    placeholder="Select Blog Category"
                  />
                </label>
                <datalist id="browsers">
                  <option value="Chrome" />
                  <option value="Firefox" />
                  <option value="Internet Explorer" />
                  <option value="Opera" />
                  <option value="Safari" />
                  <option value="Microsoft Edge" />
                </datalist>
              </div>
            </div>
          </div>

          <div className="Btp-editorheader">Body Text</div>

          <div className="Btp-editor1">
            <div className="Btp-toolbar">
              <span className="Btp-para">
                <button
                  class="btn  dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Paragraph
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </span>
              <span className="Btp-para2">
                <span className="Btp-bold">
                  <a>B</a>
                </span>
                <span className="Btp-italic">
                  <a>I</a>
                </span>
                <span className="Btp-underline">
                  <a>U</a>
                </span>
              </span>

              <span className="span-display">
                <span className="Btp-minimize">
                  <a>
                    {" "}
                    <img src="../../images/minimize.png" />
                  </a>
                </span>
                <span className="Btp-Uppertext">
                  <a>AG</a>
                </span>
                <span className="Btp-Midtext">
                  <a>Ag</a>
                </span>
                <span className="Btp-Lowertext">
                  <a>ag</a>
                </span>
              </span>

              <span className="Btp-align">
                <a>
                  {" "}
                  <img src="../../images/align.png" />
                </a>
              </span>
              <span className="Btp-list">
                <a>
                  {" "}
                  <img src="../../images/list.png" />
                </a>
              </span>
              <span className="Btp-images">
                <a>
                  {" "}
                  <img src="../../images/Images.png" />
                </a>
              </span>
              <span className="Btp-link">
                <a>
                  {" "}
                  <img src="../../images/Link.png" />
                </a>
              </span>
            </div>
            <div>
            <textarea cols="2" rows="10" id="rules"></textarea>
            </div>
           
          </div>

          <div className="Btp-button">
            <NavLink to="/English/Blog">
              <button className="Btp-btn1"> Save</button>
            </NavLink>
            <NavLink to="/English/Blog">

            <button className="Btp-btn2">Submit</button>
            </NavLink>

          </div>
        </div>
      </div>
      <div id="sidebar">
        <h3>Blog Templets</h3>
        <div className="row padding-class-top">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="image-blog">
                  <img src="../../images/Blog Temp 1.png" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="image-blog">
                  <img src="../../images/Blog Temp 1.png" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="image-blog">
                  <img src="../../images/Blog Temp 1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;
