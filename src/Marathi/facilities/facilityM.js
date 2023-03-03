import React from "react";
import './facility.css';
// import Footer from "../English/footer/footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Header from "../header/header";
import MarathiHeader from "../Marathi-header/header";
import Footer from "../../English/footer/footer";



const FacilityMarathi = () => {
    return (
        <>
        <div className="outer-changes">
            <section className="facility-section">
                <div className="upper-wrapper">
                    <MarathiHeader />
                    <div className="row header-pad-fac facility-first-sec">
                        <div className="col-xl-6 col-lg-6">
                            <div>
                                <h5 className="future-h5">Impact of the intervention</h5>
                                <p className="future-p3">
                                River Rejuvenation Project is a comprehensive solution for Mula- <br></br>Mutha river
                                 rejuvenation that includes river cleaning, desilting, <br></br> developing the riverfront, 
                                 improving water consumption patterns <br></br> through citizen awareness,
                                 upgrading the economy around the riverfront, development of green spaces, and bio-diversity improvement.
                                </p>
                            </div>
                            <div>
                                <button className="btn-lets2">Connect Us</button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 new-class">
                            <div className="">
                                <img src="../../images/Image.png"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-flex">
                    <div className="row">
                        <div className="col-xl-12">
                           <div className="ese-image">
                           
                             <input id="open" type="checkbox" className="open"/>
                             <div className="row">
                               <div className="col-xl-6">
                                {/* <div>
                                <button> Clean the River and make it pollution free</button>
                                <button> Clean the River and make it pollution free</button>
                                <button> Clean the River and make it pollution free</button>
                                </div> */}
                                </div>
                            </div>
                             <img src="../../images/Environmental.png" className="content"/>
                             <img src="../../images/Social.png" className="content2"/>
                             <img src="../../images/Economical.png" />
                           </div>
                        </div>
                            
                    </div>
                    
                </div>
            </section>
            <section className="intervention">
                <div className="container-fluid bottom-check">
                    <div className="row">
                     <div className="col-xl-12">
                     <h5 className="sec-left-new">Key Interventions</h5>
                        <div className="row align-items-new">
                            <div className="col-xl-6 col-lg-6">
                                <div>
                                    <p className="class-inter">By creating a meaningful public realm along the river and promoting community activities and programmes that lead to a better quality of life in the City of Pune, the Municipal Corporation of Pune is committed to transforming today's city, 
                                        built on the motherly laps of the Mula-Mutha riverbanks, into a healthy, vibrant place to live and thrive. </p>
                                    <p className="class-inter">The revitalization of the river will contribute to the waterfront becoming a hub for social, cultural, and recreational activities in the city, as well as propose a resilient river edge to mitigate the threat of flooding,
                                         making it an appealing place to live for both current and future residents. </p>
                                    <p className="class-inter">As a result, it contributes to the city's potential for adding green recreational spaces, as well as providing active citizen partnerships with civic and business organizations, 
                                        as well as a revitalized sense of community.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 key-img1">

                            <div className="key-img">
                                <img src="../../images/12 1.png"/>
                            </div>
                            <div className="key-img2">
                            <img src="../../images/Polygon 3.png"/>
                            </div>
                            </div>
                           
                        </div>
                     </div>
                    </div>
                    </div>
            </section>
        </div>
        <Footer/>
        </>
        )
        }

export default FacilityMarathi;