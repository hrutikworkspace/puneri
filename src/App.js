import logo from './logo.svg';
import './App.css';
import HomePage from './English/homepage/homepage';
import AboutUs from './English/aboutus/aboutus';
import Facility from './English/facilities/facility';
import Blog from "./English/blog/blog";
import Footer from './English/footer/footer';
import PrivateRoute from './routes/privateRoute';
import BlogD from './English/blogdetail/blogD';
import MarathiRoute from './MarathiRoute/marathiRoute';
import SignUp from './English/signup/signup';
import Slide from './English/slide/slide';
import Forum from './English/forum/forum';
import Gallery from './English/gallery/gallery';
import LogIn from './English/logIn/logIn';
import Loginotp from './English/loginOtp/loginotp';
import Survey from './English/Survey/survey';
import SurveyDetail from './English/SurveyDetail/surveyDetail';
import UploadPhoto from './English/uploadPhoto/uploadPhoto';
import ForumBlog from './English/forumblogs/forumblog';
import Blogtopic from './English/blogTopic/blogtopic';
import GoToTop from './topPage/topofpage';
import WriteBlog from './English/writeblog/writeblog';
import Uploadstatus from './English/uploadFeedback/uploadstatus';
import SpaceBooking from './English/spaceBooking/spaceBooking';
import Spacebooking2 from './English/spaceBooking2/spacebooking2';
import Dashboard from './English/userdashboard/userdashboard';
import AccountSetting from './English/accountSetting/accountSetting';

function App() {
  return (
    <>
    {/* <HomePage/> */}
    {/* <AboutUs/> */}
    {/* <Facility/> */}
    {/* <Blog/>
    <Footer/> */}
    {/* <Survey/> */}
    {/* <UploadPhoto/> */}
    {/* <ForumBlog/> */}
    {/* <Blogtopic/> */}
    {/* <SurveyDetail/> */}
    <PrivateRoute/>
    {/* <PrivateRoute/> */}
    {/* <AccountSetting/> */}
    {/* <WriteBlog/> */}
    {/* <SpaceBooking/> */}
    {/* <MarathiRoute/> */}
    {/* <SignUp/> */}
    {/* <HomePage1/> */}
    {/* <Slide/> */}
    {/* <Gallery/> */}
    {/* <Forum/> */}
    {/* <Gallery/> */}
    {/* <LogIn/> */}
    {/* <Loginotp/> */}
    {/* <GoToTop/> */}
    {/* <Spacebooking2/> */}
    {/* <Uploadstatus/> */}
    {/* <GoToTop/> */}
    {/* <Dashboard/> */}
    </>
  );
}

export default App;
