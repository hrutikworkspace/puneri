import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../English/aboutus/aboutus';
import AccountSetting from '../English/accountSetting/accountSetting';
import Blog from '../English/blog/blog';
import BlogD from '../English/blogdetail/blogD';
import Blogtopic from '../English/blogTopic/blogtopic';
import Facility from '../English/facilities/facility';
import Forum from '../English/forum/forum';
import ForumBlog from '../English/forumblogs/forumblog';
import Gallery from '../English/gallery/gallery';
import HomePage from '../English/homepage/homepage';
import LogIn from '../English/logIn/logIn';
import Loginotp from '../English/loginOtp/loginotp';
import SignUp from '../English/signup/signup';
import SpaceBooking from '../English/spaceBooking/spaceBooking';
import Spacebooking2 from '../English/spaceBooking2/spacebooking2';
import Survey from '../English/Survey/survey';
import SurveyDetail from '../English/SurveyDetail/surveyDetail';
import Uploadstatus from '../English/uploadFeedback/uploadstatus';
import UploadPhoto from '../English/uploadPhoto/uploadPhoto';
import Dashboard from '../English/userdashboard/userdashboard';
import WriteBlog from '../English/writeblog/writeblog';

function PrivateRoute() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/English/AboutUs' element={<AboutUs/>}/>
        <Route path='/English/Facility' element={<Facility/>}/>
        <Route path='/English/Blog' element={<Blog/>}/>
        <Route path='/English/BlogD' element={<BlogD/>}/>
        <Route path='/English/Gallery' element={<Gallery/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Loginotp' element={<Loginotp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/English/Forum' element={<Forum/>}/>
        <Route path='/English/SurveyDetail' element={<SurveyDetail/>}/>
        <Route path='/English/Survey' element={<Survey/>}/>
        <Route path='/English/Blogtopic' element={<Blogtopic/>}/>
        <Route path='/English/UploadPhoto' element={<UploadPhoto/>}/>
        <Route path='/English/ForumBlog' element={<ForumBlog/>}/>
        <Route path='/English/Uploadstatus' element={<Uploadstatus/>}/>
        <Route path='/English/WriteBlog' element={<WriteBlog/>}/>
        <Route path='/English/SpaceBooking' element={<SpaceBooking/>}/>
        <Route path='/English/Spacebooking2' element={<Spacebooking2/>}/>
        <Route path='/English/Dashboard' element={<Dashboard/>}/>
        <Route path='/English/AccountSetting' element={<AccountSetting/>}/>

        </Routes>    
    </>
  )
}

export default PrivateRoute;