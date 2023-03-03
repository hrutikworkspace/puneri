import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUsMarathi from '../Marathi/aboutus/aboutusMarathi';
import FacilityMarathi from '../Marathi/facilities/facilityM';
import HomePageMarathi from '../Marathi/homePageMarathi/homePageMarathi';

function MarathiRoute() {
  return (
    <>
        <Routes>
            {/* <Route path='/MarathiRoute' element={<HomePage1/>}/> */}
            <Route path='/MarathiRoute' element={<HomePageMarathi/>}/>
            <Route path='/Marathi/AboutUsMarathi' element={<AboutUsMarathi/>}/>
            <Route path='/Marathi/FacilityMarathi' element={<FacilityMarathi/>}/>

        </Routes>
    </>
  )
}

export default MarathiRoute;