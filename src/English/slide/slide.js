import React from "react";
import ImageSlider from "react-image-comparison-slider";
import "./slide.css";

function Slide() {
  return (
    <>
      {/* <div className="App1">
       <div style={{ margin: "3" }}></div>
       <div>
         <div class="image-slider">
           <div>
             <img src="../../images/museum.png" alt="GFG_Image" />
           </div>
           <img src="../../images/wada-1.png" alt="GFG_Image" />
         </div>
       </div>
     </div> */}
      <div
        style={{
          width: "100%",
          height: "50vh",
          
        }} className='slider-img'
      >

        <ImageSlider className="img1"
          image1="../../images/Frame 11.png"
          image2="../../images/frame 11 (2).png"
          sliderColor="white"
          customHandle="."
        />
      </div>
      
    </>
  );
}

export default Slide;

// Source code of react-image-comparison-slider:
// https://github.com/OnurErtugral/react-image-comparison-slider
