import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css';

const Footer = () => 
{
    return(
<>
        <footer class="footer">
            <div class="container-flex">
                <div class="row f-flex">
                    <div class=" col-lg-3 col-md-6">
                        <img src="/images/punere-logo.png" className="footer-img"/>
                        
                    </div>
                    <div class="col-lg-4 f-inp-text col-md-6">
                        
                        {/* <div className="input-group">
                    <input
                      type="text"
                      className="form-control  f-input"
                      placeholder="Enter Email Id"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    
                    <button className="  f-btn">Subscribe</button>
                  </div> */}
                  <div class="input-group f-inp-grup ">
  <input type="text" class="form-control footr-inp" placeholder="Enter Email Id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary f-btn" type="button">Subscribe</button>
  </div>
</div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="widget3">
                            <h5>
                            Contact Us
                            </h5>
                            
                            <div className="">
                            <h4>Toll Free </h4>
                            <p className="f-no">1800 1030 222</p>
                            </div>
                            <div className="">
                            <h4>Email</h4>
                            <p className="f-no">Info@punere.com</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-2 col-md-6">
                        <div class="widget4">

                            <h5>
                            Quick Links
                            </h5>
                            <ul>
                                <li>
                                    <NavLink to="/English/AboutUs">
                                    About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/English/Facility">
                                    Facilities

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/English/Gallery">
                                    Gallery 

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/English/Blog">
                                    Blogs

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/English/Forum">
                                    Community Forum
                                    </NavLink>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </footer>
</>
    )
}

export default Footer;