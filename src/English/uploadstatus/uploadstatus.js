import React from 'react'
import "./uploadstatus.css"

function Uploadstatus() {
  return (
    <div className='container-fluid Ups-body' >
      <div className='row'>
      <div className='Ups-header'>
      <span className='Ups-upload'>Upload Photo</span>
      <span className='Ups-cross'>
      <img src='../../images/crossArr.png'/>
      </span>
      </div>
      <div className='Ups-upimg'>
      <img src='../../images/UploadImage.png'/>
      </div>
      <div className='Ups-text'>
      <p>Thanks for uploading your photos.<br></br>
      They will be reviewed by an admin shortly and<br></br>
       made public once approved.</p>
      </div>
      <div className='Ups-button'>
      <button className='btn-1'> Back to Gallery</button>
      <button className='btn-2'> Check Status</button>
      </div>
      </div>
    </div>
  )
}

export default Uploadstatus