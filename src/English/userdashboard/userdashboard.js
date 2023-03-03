import React, { useState } from "react";
import "../../English/userdashboard/userdashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid Btp-body">
                <div className="row">
                    <div className="Btp-header">
                        <span className="Btp-upload">User Dashboard</span>
                        <span className="Btp-cross">
                            <NavLink to="/English/Forum">
                                <img src="../../images/crossArr.png" />
                            </NavLink>
                        </span>
                    </div>
                    <div class="warpper-dash">
                        <input class="radio" id="one" name="group" type="radio" checked />
                        <input class="radio" id="two" name="group" type="radio" />
                        <input class="radio" id="three" name="group" type="radio" />

                        <div class="tabs">
                            <label class="tab" id="one-tab" for="one">Blogs</label>
                            <label class="tab" id="two-tab" for="two">Images</label>
                            <label class="tab" id="three-tab" for="three">Forum Topics</label>
                        </div>

                        <div class="panels">
                            <div id="one-panel">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="card-dashboard">
                                                    <h3>25</h3>
                                                    <p>Approved Requests</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="card-dashboard card-orange">
                                                    <h3>05</h3>
                                                    <p>Pending Requests</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="card-dashboard card-blue">
                                                    <h3>02</h3>
                                                    <p>Saved as Draft</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="card-dashboard card-red">
                                                    <h3>04</h3>
                                                    <p>Declined Request</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div class="wrapper-table">
                                                    <div class="table">

                                                        <div class="row header blue row-check">
                                                            <div class="cell">
                                                                Name
                                                            </div>
                                                            <div class="cell">
                                                                Date Posted
                                                            </div>
                                                            <div class="cell">
                                                                Status
                                                            </div>
                                                            <div class="cell">
                                                                Actions
                                                            </div>
                                                        </div>

                                                        <div class="row row-check">
                                                            <div class="cell" data-title="Username">
                                                                <a>06 Hangout Spots Near Mula Mutha River Pune</a>
                                                            </div>
                                                            <div class="cell" data-title="Email">
                                                                <span>22 Jan 2023</span>
                                                            </div>
                                                            <div class="cell" data-title="Password">
                                                                <button className="approve-btn">Approved</button>
                                                            </div>
                                                            <div class="cell" data-title="Active">
                                                                <div class="menu-nav">
                                                                    <div class="dropdown-container" tabindex="-1">
                                                                        <div class="three-dots"></div>
                                                                        <div class="dropdown">
                                                                            <a className="a-tag" href="#"><div className="div-class">dropdown 1</div></a>
                                                                            <a className="a-tag" href="#"><div className="div-class">dropdown 1</div></a>

                                                                            <a className="a-tag" href="#"><div className="div-class">dropdown 1</div></a>

                                                                         
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row row-check">
                                                            <div class="cell" data-title="Username">
                                                                <a>06 Hangout Spots Near Mula Mutha River Pune</a>
                                                            </div>
                                                            <div class="cell" data-title="Email">
                                                                <span>22 Jan 2023</span>
                                                            </div>
                                                            <div class="cell" data-title="Password">
                                                                <button className="pending-btn">Pending</button>
                                                            </div>
                                                            <div class="cell" data-title="Active">
                                                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="17.5" cy="8" r="2.5" fill="#0A0A13" />
                                                                    <circle cx="17.5" cy="17" r="2.5" fill="#0A0A13" />
                                                                    <circle cx="17.5" cy="26" r="2.5" fill="#0A0A13" />
                                                                    <rect x="0.5" y="1" width="34" height="32" rx="4.5" stroke="black" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="row row-check">
                                                            <div class="cell" data-title="Username">
                                                                <a>06 Hangout Spots Near Mula Mutha River Pune</a>
                                                            </div>
                                                            <div class="cell" data-title="Email">
                                                                <span>22 Jan 2023</span>
                                                            </div>
                                                            <div class="cell" data-title="Password">
                                                                <button className="denied-btn">Denied</button>
                                                            </div>
                                                            <div class="cell" data-title="Active">
                                                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="17.5" cy="8" r="2.5" fill="#0A0A13" />
                                                                    <circle cx="17.5" cy="17" r="2.5" fill="#0A0A13" />
                                                                    <circle cx="17.5" cy="26" r="2.5" fill="#0A0A13" />
                                                                    <rect x="0.5" y="1" width="34" height="32" rx="4.5" stroke="black" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="row row-check">
                                                            <div class="cell" data-title="Username">
                                                                <a>06 Hangout Spots Near Mula Mutha River Pune</a>
                                                            </div>
                                                            <div class="cell" data-title="Email">
                                                                <span>22 Jan 2023</span>
                                                            </div>
                                                            <div class="cell" data-title="Password">
                                                                <button className="draft-btn">Draft</button>
                                                            </div>
                                                            <div class="cell" data-title="Active">
                                                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="17.5" cy="8" r="2.5" fill="#0A0A13" />
                                                                    <circle cx="17.5" cy="17" r="2.5" fill="#0A0A13" />
                                                                    <circle cx="17.5" cy="26" r="2.5" fill="#0A0A13" />
                                                                    <rect x="0.5" y="1" width="34" height="32" rx="4.5" stroke="black" />
                                                                </svg>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel" id="two-panel">
                                <div class="panel-title">Title2</div>
                                <p>Content2</p>
                            </div>
                            <div class="panel" id="three-panel">
                                <div class="panel-title">Title3</div>
                                <p>Content3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;