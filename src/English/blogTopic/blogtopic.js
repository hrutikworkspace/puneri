import React from "react";
import { NavLink } from "react-router-dom";
import "./blogtopic.css";
function Blogtopic() {
  return (
    <div className="container-fluid Btp-body">
      <div className="row">
        <div className="Btp-header">
          <span className="Btp-upload">Create Topic</span>
          <span className="Btp-cross">
            <NavLink to="/English/Forum">
              <img src="../../images/crossArr.png" />
            </NavLink>
          </span>
        </div>
        <div className="row Btp-row">
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

    <div className='Btp-editorheader'>Body Text</div>
   
    <div className='Btp-editor'>
    <div className='Btp-toolbar'>
   <span className='Btp-para'>
   <button class="btn  dropdown-toggle2" type="button" data-toggle="dropdown">Paragraph
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
   </span>
   <span className='Btp-para2'>
   <span className='Btp-bold'><a>B</a></span>
   <span className='Btp-italic'><a>I</a></span>
   <span className='Btp-underline'><a>U</a></span>
   </span>
  
  <span className='span-display'>
  <span className='Btp-minimize'>
  <a> <img src='../../images/minimize.png' /></a>
 
  </span>
  <span className='Btp-Uppertext'><a>AG</a></span>
  <span className='Btp-Midtext'><a>Ag</a></span>
  <span className='Btp-Lowertext'><a>ag</a></span>
  </span>
  
   <span className='Btp-align'>
  <a> <img src='../../images/align.png' /></a>
   </span>
   <span className='Btp-list'>
  <a> <img src='../../images/list.png' /></a>
   </span>
   <span className='Btp-images'>
  <a> <img src='../../images/Images.png' /></a>
   </span>
   <span className='Btp-link'>
  <a> <img src='../../images/Link.png' /></a>
   </span>
    
    
  
    </div>
    <textarea cols="2" rows="10" id="rules"></textarea>
    </div>

        <div className="Btp-button">
          <NavLink to="/English/Gallery">
            <button className="Btp-btn1"> Save</button>
          </NavLink>
          <button className="Btp-btn2">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Blogtopic;
