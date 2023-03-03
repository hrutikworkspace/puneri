import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../header/header.css";

const Header = () => {
  const [url, setUrl] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [toggle, setToggle] = useState(false);
  const Collapse = () => {
    if (!toggle) {
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }
  };
  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src="../../images/logo.png" />
          </NavLink>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <div class="btn-group btn-color">
              <button
                type="button"
                class="btn dropdown-toggle btn-text-col"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_105_43)">
                    <path
                      d="M14.8959 12.4799C15.6144 11.2428 15.993 9.87 15.993 8.49646C15.993 4.09314 12.3993 0.5 7.99646 0.5C3.59314 0.5 0 4.09375 0 8.49646C0 12.8999 3.59375 16.493 7.99646 16.493C9.43799 16.493 10.8661 16.0813 12.1405 15.3004L16 16.4896L14.8959 12.4799ZM12.0013 14.277C10.7832 15.0677 9.53381 15.5559 7.99646 15.5559C4.10388 15.5559 0.937134 12.3892 0.937134 8.49646C0.937134 4.60388 4.10388 1.43713 7.99646 1.43713C11.8892 1.43713 15.0559 4.60388 15.0559 8.49646C15.0559 9.97559 14.5956 11.1824 13.8854 12.3397L14.6429 15.0909L12.0013 14.277Z"
                      fill="white"
                    />
                    <path
                      d="M8.0376 3.34363C8.02393 3.34314 8.01025 3.34253 7.99646 3.34253C7.9917 3.34253 7.98694 3.34277 7.98218 3.3429C7.97229 3.34277 7.96252 3.34253 7.95264 3.34253C5.11072 3.34253 2.79858 5.65454 2.79858 8.49646C2.79858 11.3384 5.11072 13.6505 7.95264 13.6505C7.96252 13.6505 7.97229 13.6503 7.98218 13.6501C7.98694 13.6503 7.9917 13.6505 7.99646 13.6505C8.01025 13.6505 8.02393 13.6499 8.0376 13.6494C10.8405 13.6039 13.1066 11.3101 13.1066 8.49646C13.1066 5.68298 10.8405 3.38916 8.0376 3.34363ZM11.7294 6.62231H10.1902C10.0916 6.02844 9.94543 5.48108 9.75684 5.0094C9.69922 4.86536 9.63794 4.73022 9.57361 4.60376C10.5114 4.99573 11.2783 5.71704 11.7294 6.62231ZM12.1696 8.49646C12.1696 8.81848 12.1331 9.13208 12.0645 9.43359H10.3031C10.3269 9.12756 10.3392 8.81421 10.3392 8.49646C10.3392 8.17883 10.3269 7.86548 10.3031 7.55945H12.0645C12.1331 7.86096 12.1696 8.17456 12.1696 8.49646ZM8.01294 12.7126C8.00427 12.7128 7.99573 12.7129 7.98718 12.713C7.70984 12.7037 7.36523 12.2831 7.10632 11.6356C6.95789 11.2646 6.83948 10.8304 6.75366 10.3645H9.23938C9.15356 10.8304 9.03516 11.2646 8.88672 11.6356C8.62988 12.2777 8.28894 12.6967 8.01294 12.7126ZM6.63 9.43359C6.60437 9.12939 6.59082 8.81592 6.59082 8.49646C6.59082 8.17712 6.60437 7.86365 6.63 7.55945H9.36304C9.38867 7.86365 9.4021 8.17712 9.4021 8.49646C9.4021 8.81592 9.38867 9.12939 9.36304 9.43359H6.63ZM3.73572 8.49646C3.73572 8.17456 3.77209 7.85461 3.84082 7.55322H5.69006C5.66626 7.85925 5.65381 8.17883 5.65381 8.49646C5.65381 8.81421 5.66626 9.12756 5.69006 9.43359H3.84082C3.77209 9.13208 3.73572 8.81848 3.73572 8.49646ZM7.98718 4.28003C7.99573 4.28015 8.00427 4.28027 8.01294 4.2804C8.28894 4.29639 8.62988 4.71533 8.88672 5.35742C9.03516 5.72839 9.15356 6.15637 9.23938 6.62231H6.75366C6.83948 6.15637 6.95789 5.72839 7.10632 5.35742C7.36523 4.70996 7.70984 4.28931 7.98718 4.28003ZM6.44226 4.55945C6.36951 4.69849 6.30066 4.84839 6.23621 5.0094C6.04761 5.48108 5.90161 6.02844 5.80286 6.62231H4.1759C4.64453 5.68176 5.45422 4.93982 6.44226 4.55945ZM4.17578 10.3707H5.80286C5.90149 10.9646 6.04761 11.512 6.23621 11.9836C6.30066 12.1447 6.36951 12.2946 6.44226 12.4336C5.45422 12.0532 4.64453 11.3114 4.17578 10.3707ZM9.57361 12.3893C9.63794 12.2628 9.69922 12.1277 9.75684 11.9836C9.94543 11.512 10.0914 10.9584 10.1902 10.3645H11.7294C11.2783 11.2698 10.5114 11.9973 9.57361 12.3893Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_105_43">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                English
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Marathi
                  </a>
                </li>
              </ul>
            </div> */}

            {/* <div class="collapse navbar-collapse img-pro" id="navbar-list-4">
    <ul class="navbar-nav">
        <li class="nav-item ">
        <a class="nav-link dropdown-toggle img-profile-padding notification-icon" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="../../images/blog-icon.png" width="40" height="40" class="rounded-circle"/>
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50254 5.6559L2.01317 1.16673C1.88985 1.04312 1.72498 0.975121 1.54917 0.975121C1.37327 0.975121 1.20849 1.04312 1.08498 1.16673L0.691805 1.5601C0.568098 1.68351 0.5 1.84849 0.5 2.02429C0.5 2.2001 0.568098 2.36488 0.691805 2.48839L6.03678 7.83346C6.16068 7.95746 6.32624 8.02536 6.50224 8.02488C6.67902 8.02536 6.84439 7.95756 6.96839 7.83346L12.3082 2.49337C12.4319 2.36985 12.5 2.20507 12.5 2.02917C12.5 1.85337 12.4319 1.68858 12.3082 1.56498L11.915 1.17171C11.6591 0.915804 11.2425 0.915804 10.9867 1.17171L6.50254 5.6559Z" fill="#0A0A13"/>
</svg>
        </a>
        <div class="dropdown-menu header-drop-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Account Setting</a>
          <a class="dropdown-item" href="#">Dashboard</a>
          <a class="dropdown-item" href="#" style={{color:"red"}}>Log Out</a>
        </div>
      </li>   
    </ul>
  </div> */}
            <li class="nav-item dropdown hedmarker">
              <a
                class="nav-link dropdown-toggle notification-icon pro-icon"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../images/blog-icon.png"
                  width="40"
                  height="40"
                  class="rounded-circle"
                />
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.50254 5.6559L2.01317 1.16673C1.88985 1.04312 1.72498 0.975121 1.54917 0.975121C1.37327 0.975121 1.20849 1.04312 1.08498 1.16673L0.691805 1.5601C0.568098 1.68351 0.5 1.84849 0.5 2.02429C0.5 2.2001 0.568098 2.36488 0.691805 2.48839L6.03678 7.83346C6.16068 7.95746 6.32624 8.02536 6.50224 8.02488C6.67902 8.02536 6.84439 7.95756 6.96839 7.83346L12.3082 2.49337C12.4319 2.36985 12.5 2.20507 12.5 2.02917C12.5 1.85337 12.4319 1.68858 12.3082 1.56498L11.915 1.17171C11.6591 0.915804 11.2425 0.915804 10.9867 1.17171L6.50254 5.6559Z"
                    fill="#0A0A13"
                  />
                </svg>
              </a>
              <ul class="dropdown-menu pro-icon-font">
                <li>
                  <NavLink to="/English/Admin123" class="dropdown-item ">
                    Account Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/English/Admin123" class="dropdown-item ">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/English/Admin123"
                    class="dropdown-item "
                    style={{ color: "red" }}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
            <div class="dropdown1">
              <button
                class="btn btn-language dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <svg
                  className="svg-btn"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_273_232)">
                    <path
                      d="M14.8959 12.4799C15.6144 11.2428 15.993 9.87 15.993 8.49646C15.993 4.09314 12.3993 0.5 7.99646 0.5C3.59314 0.5 0 4.09375 0 8.49646C0 12.8999 3.59375 16.493 7.99646 16.493C9.43799 16.493 10.8661 16.0813 12.1405 15.3004L16 16.4896L14.8959 12.4799ZM12.0013 14.277C10.7832 15.0677 9.53381 15.5559 7.99646 15.5559C4.10388 15.5559 0.937134 12.3892 0.937134 8.49646C0.937134 4.60388 4.10388 1.43713 7.99646 1.43713C11.8892 1.43713 15.0559 4.60388 15.0559 8.49646C15.0559 9.97559 14.5956 11.1824 13.8854 12.3397L14.6429 15.0909L12.0013 14.277Z"
                      fill="white"
                    />
                    <path
                      d="M8.03784 3.34363C8.02417 3.34314 8.0105 3.34253 7.9967 3.34253C7.99194 3.34253 7.98718 3.34277 7.98242 3.3429C7.97253 3.34277 7.96277 3.34253 7.95288 3.34253C5.11096 3.34253 2.79883 5.65454 2.79883 8.49646C2.79883 11.3384 5.11096 13.6505 7.95288 13.6505C7.96277 13.6505 7.97253 13.6503 7.98242 13.6501C7.98718 13.6503 7.99194 13.6505 7.9967 13.6505C8.0105 13.6505 8.02417 13.6499 8.03784 13.6494C10.8407 13.6039 13.1068 11.3101 13.1068 8.49646C13.1068 5.68298 10.8407 3.38916 8.03784 3.34363ZM11.7296 6.62231H10.1904C10.0918 6.02844 9.94568 5.48108 9.75708 5.0094C9.69946 4.86536 9.63818 4.73022 9.57385 4.60376C10.5116 4.99573 11.2786 5.71704 11.7296 6.62231ZM12.1698 8.49646C12.1698 8.81848 12.1333 9.13208 12.0647 9.43359H10.3033C10.3271 9.12756 10.3395 8.81421 10.3395 8.49646C10.3395 8.17883 10.3271 7.86548 10.3033 7.55945H12.0647C12.1333 7.86096 12.1698 8.17456 12.1698 8.49646ZM8.01318 12.7126C8.00452 12.7128 7.99597 12.7129 7.98743 12.713C7.71008 12.7037 7.36548 12.2831 7.10657 11.6356C6.95813 11.2646 6.83972 10.8304 6.75391 10.3645H9.23962C9.15381 10.8304 9.0354 11.2646 8.88696 11.6356C8.63013 12.2777 8.28918 12.6967 8.01318 12.7126ZM6.63025 9.43359C6.60461 9.12939 6.59106 8.81592 6.59106 8.49646C6.59106 8.17712 6.60461 7.86365 6.63025 7.55945H9.36328C9.38892 7.86365 9.40234 8.17712 9.40234 8.49646C9.40234 8.81592 9.38892 9.12939 9.36328 9.43359H6.63025ZM3.73596 8.49646C3.73596 8.17456 3.77234 7.85461 3.84106 7.55322H5.69031C5.6665 7.85925 5.65405 8.17883 5.65405 8.49646C5.65405 8.81421 5.6665 9.12756 5.69031 9.43359H3.84106C3.77234 9.13208 3.73596 8.81848 3.73596 8.49646ZM7.98743 4.28003C7.99597 4.28015 8.00452 4.28027 8.01318 4.2804C8.28918 4.29639 8.63013 4.71533 8.88696 5.35742C9.0354 5.72839 9.15381 6.15637 9.23962 6.62231H6.75391C6.83972 6.15637 6.95813 5.72839 7.10657 5.35742C7.36548 4.70996 7.71008 4.28931 7.98743 4.28003ZM6.4425 4.55945C6.36975 4.69849 6.3009 4.84839 6.23645 5.0094C6.04785 5.48108 5.90186 6.02844 5.8031 6.62231H4.17615C4.64478 5.68176 5.45447 4.93982 6.4425 4.55945ZM4.17603 10.3707H5.8031C5.90173 10.9646 6.04785 11.512 6.23645 11.9836C6.3009 12.1447 6.36975 12.2946 6.4425 12.4336C5.45447 12.0532 4.64478 11.3114 4.17603 10.3707ZM9.57385 12.3893C9.63818 12.2628 9.69946 12.1277 9.75708 11.9836C9.94568 11.512 10.0917 10.9584 10.1904 10.3645H11.7296C11.2786 11.2698 10.5116 11.9973 9.57385 12.3893Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_273_232">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Language
              </button>
              <ul class="dropdown-menu">
                <li>
                  <NavLink to="#">English</NavLink>
                </li>
                <li>
                  <NavLink to="/MarathiRoute">Marathi</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <input type="checkbox" className="check" />
            <label for="check" className="checkbtn" onClick={Collapse}>
              <i class="fa fa-bars navbar-toggle" aria-hidden="true"></i>
              <nav className="nav1">
                <div
                  className="navlinks active-class"
                  style={{ left: toggle ? "0" : "-100%" }}
                >
                  <ul className="ul-all">
                    <li>
                      <NavLink to="/English/AboutUs">About us</NavLink>
                    </li>
                    <li>
                      <NavLink className="about" to="/English/Facility">
                        Facilites
                      </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle hed-font"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Engagement
                        <svg
                          width="13"
                          height="9"
                          viewBox="0 0 13 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.50254 5.6559L2.01317 1.16673C1.88985 1.04312 1.72498 0.975121 1.54917 0.975121C1.37327 0.975121 1.20849 1.04312 1.08498 1.16673L0.691805 1.5601C0.568098 1.68351 0.5 1.84849 0.5 2.02429C0.5 2.2001 0.568098 2.36488 0.691805 2.48839L6.03678 7.83346C6.16068 7.95746 6.32624 8.02536 6.50224 8.02488C6.67902 8.02536 6.84439 7.95756 6.96839 7.83346L12.3082 2.49337C12.4319 2.36985 12.5 2.20507 12.5 2.02917C12.5 1.85337 12.4319 1.68858 12.3082 1.56498L11.915 1.17171C11.6591 0.915804 11.2425 0.915804 10.9867 1.17171L6.50254 5.6559Z"
                            fill="#0A0A13"
                          />
                        </svg>
                      </a>
                      <ul class="dropdown-menu d-pad ul-hide">
                        <li>
                          <NavLink
                            to="/English/Gallery"
                            class="dropdown-item "
                            href="#"
                          >
                            Gallery
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/English/Blog"
                            class="dropdown-item d-pad"
                            href="#"
                          >
                            Blogs
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/English/Forum"
                            class="dropdown-item d-pad"
                            href="#"
                          >
                            Community forum
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/English/Survey"
                            class="dropdown-item d-pad"
                            href="#"
                          >
                            Survey
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink className="about" to="/English/SpaceBooking">
                        Space Booking
                      </NavLink>
                    </li>
                    {/* <li>
                    <NavLink className="about" to="/English/Gallery">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink to="/English/Blog" className={(url === "/English/BlogD" ? " active" : "") }>Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/English/Forum" className={(url === "/English/ForumBlog" ? " active" : "") }>Community Forum</NavLink>
                  </li> */}
                    {/* <img src="../../images/blog-icon.png" width="40" height="40" class="rounded-circle"/> */}

                    {/* <div class="collapse navbar-collapse img-pro" id="navbar-list-4">
    <ul class="navbar-nav">
        <li class="nav-item mt-3">
        <a class="nav-link dropdown-toggle img-profile-padding hed-font" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_954_1588)">
<path d="M26.7238 21.6413C24.8338 20.0438 23.75 17.7088 23.75 15.235V11.75C23.75 7.35125 20.4825 3.71 16.25 3.1V1.75C16.25 1.05875 15.69 0.5 15 0.5C14.31 0.5 13.75 1.05875 13.75 1.75V3.1C9.51625 3.71 6.25 7.35125 6.25 11.75V15.235C6.25 17.7088 5.16625 20.0438 3.265 21.6513C2.77875 22.0675 2.5 22.6725 2.5 23.3125C2.5 24.5188 3.48125 25.5 4.6875 25.5H25.3125C26.5188 25.5 27.5 24.5188 27.5 23.3125C27.5 22.6725 27.2213 22.0675 26.7238 21.6413Z" fill="#0A0A13"/>
<path d="M15.0002 30.5C17.264 30.5 19.1577 28.8863 19.5927 26.75H10.4077C10.8427 28.8863 12.7365 30.5 15.0002 30.5Z" fill="#0A0A13"/>
<circle cx="21.6668" cy="9.66667" r="5.83333" fill="#AB1C1C"/>
<path d="M21.1987 11.5633C21.1853 11.5767 21.182 11.59 21.1887 11.6033C21.1953 11.6167 21.2087 11.6233 21.2287 11.6233H23.9387C23.972 11.6233 23.9987 11.6367 24.0187 11.6633C24.0453 11.6833 24.0587 11.71 24.0587 11.7433V12.7133C24.0587 12.7467 24.0453 12.7767 24.0187 12.8033C23.9987 12.8233 23.972 12.8333 23.9387 12.8333H19.4387C19.4053 12.8333 19.3753 12.8233 19.3487 12.8033C19.3287 12.7767 19.3187 12.7467 19.3187 12.7133V11.7933C19.3187 11.7333 19.3387 11.6833 19.3787 11.6433C19.7053 11.3233 20.0387 10.9767 20.3787 10.6033C20.7187 10.2233 20.932 9.98667 21.0187 9.89333C21.2053 9.67333 21.3953 9.46333 21.5887 9.26333C22.1953 8.59 22.4987 8.09 22.4987 7.76333C22.4987 7.53 22.4153 7.34 22.2487 7.19333C22.082 7.04 21.8653 6.96333 21.5987 6.96333C21.332 6.96333 21.1153 7.04 20.9487 7.19333C20.782 7.34 20.6987 7.53667 20.6987 7.78333V8.03333C20.6987 8.06667 20.6853 8.09667 20.6587 8.12333C20.6387 8.14333 20.612 8.15333 20.5787 8.15333H19.3987C19.3653 8.15333 19.3353 8.14333 19.3087 8.12333C19.2887 8.09667 19.2787 8.06667 19.2787 8.03333V7.56333C19.2987 7.20333 19.412 6.88667 19.6187 6.61333C19.8253 6.33333 20.0987 6.12 20.4387 5.97333C20.7853 5.82667 21.172 5.75333 21.5987 5.75333C22.072 5.75333 22.482 5.84333 22.8287 6.02333C23.182 6.19667 23.452 6.43333 23.6387 6.73333C23.832 7.03333 23.9287 7.36667 23.9287 7.73333C23.9287 8.01333 23.8587 8.3 23.7187 8.59333C23.5787 8.88667 23.3687 9.20333 23.0887 9.54333C22.882 9.80333 22.6587 10.06 22.4187 10.3133C22.1787 10.5667 21.822 10.9333 21.3487 11.4133L21.1987 11.5633Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_954_1588">
<rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

        </a>
        <div class="dropdown-menu header-drop-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Account Setting</a>
          <a class="dropdown-item" href="#">Dashboard</a>
          <a class="dropdown-item" href="#" style={{color:"red"}}>Log Out</a>
        </div>
      </li>   
    </ul>
  </div> */}
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle notification-icon"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_954_1588)">
                            <path
                              d="M26.7238 21.6413C24.8338 20.0438 23.75 17.7088 23.75 15.235V11.75C23.75 7.35125 20.4825 3.71 16.25 3.1V1.75C16.25 1.05875 15.69 0.5 15 0.5C14.31 0.5 13.75 1.05875 13.75 1.75V3.1C9.51625 3.71 6.25 7.35125 6.25 11.75V15.235C6.25 17.7088 5.16625 20.0438 3.265 21.6513C2.77875 22.0675 2.5 22.6725 2.5 23.3125C2.5 24.5188 3.48125 25.5 4.6875 25.5H25.3125C26.5188 25.5 27.5 24.5188 27.5 23.3125C27.5 22.6725 27.2213 22.0675 26.7238 21.6413Z"
                              fill="#0A0A13"
                            />
                            <path
                              d="M15.0002 30.5C17.264 30.5 19.1577 28.8863 19.5927 26.75H10.4077C10.8427 28.8863 12.7365 30.5 15.0002 30.5Z"
                              fill="#0A0A13"
                            />
                            <circle
                              cx="21.6668"
                              cy="9.66667"
                              r="5.83333"
                              fill="#AB1C1C"
                            />
                            <path
                              d="M21.1987 11.5633C21.1853 11.5767 21.182 11.59 21.1887 11.6033C21.1953 11.6167 21.2087 11.6233 21.2287 11.6233H23.9387C23.972 11.6233 23.9987 11.6367 24.0187 11.6633C24.0453 11.6833 24.0587 11.71 24.0587 11.7433V12.7133C24.0587 12.7467 24.0453 12.7767 24.0187 12.8033C23.9987 12.8233 23.972 12.8333 23.9387 12.8333H19.4387C19.4053 12.8333 19.3753 12.8233 19.3487 12.8033C19.3287 12.7767 19.3187 12.7467 19.3187 12.7133V11.7933C19.3187 11.7333 19.3387 11.6833 19.3787 11.6433C19.7053 11.3233 20.0387 10.9767 20.3787 10.6033C20.7187 10.2233 20.932 9.98667 21.0187 9.89333C21.2053 9.67333 21.3953 9.46333 21.5887 9.26333C22.1953 8.59 22.4987 8.09 22.4987 7.76333C22.4987 7.53 22.4153 7.34 22.2487 7.19333C22.082 7.04 21.8653 6.96333 21.5987 6.96333C21.332 6.96333 21.1153 7.04 20.9487 7.19333C20.782 7.34 20.6987 7.53667 20.6987 7.78333V8.03333C20.6987 8.06667 20.6853 8.09667 20.6587 8.12333C20.6387 8.14333 20.612 8.15333 20.5787 8.15333H19.3987C19.3653 8.15333 19.3353 8.14333 19.3087 8.12333C19.2887 8.09667 19.2787 8.06667 19.2787 8.03333V7.56333C19.2987 7.20333 19.412 6.88667 19.6187 6.61333C19.8253 6.33333 20.0987 6.12 20.4387 5.97333C20.7853 5.82667 21.172 5.75333 21.5987 5.75333C22.072 5.75333 22.482 5.84333 22.8287 6.02333C23.182 6.19667 23.452 6.43333 23.6387 6.73333C23.832 7.03333 23.9287 7.36667 23.9287 7.73333C23.9287 8.01333 23.8587 8.3 23.7187 8.59333C23.5787 8.88667 23.3687 9.20333 23.0887 9.54333C22.882 9.80333 22.6587 10.06 22.4187 10.3133C22.1787 10.5667 21.822 10.9333 21.3487 11.4133L21.1987 11.5633Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_954_1588">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <ul class="dropdown-menu d-pad bell-side-pad ">
                        <li>
                          <NavLink
                            to="/English/Admin123"
                            class="dropdown-item d-pad"
                            style={{ backgroundColor: "#DCF1FF" }}
                          >
                            Admin Approve your Post
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/English/Admin123"
                            class="dropdown-item d-pad"
                            style={{ background: "#DCF1FF" }}
                          >
                            Admin Declined Photo upload
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/English/Admin123"
                            class="dropdown-item d-pad"
                            href="#"
                          >
                            Community forum
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/English/Survey"
                            class="dropdown-item d-pad"
                            href="#"
                          >
                            Survey
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="loginbtn-header">
                    {/* <button className="btn-don">Donations</button> */}
                    <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle notification-icon pro-icon"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../images/blog-icon.png"
                  width="40"
                  height="40"
                  class="rounded-circle"
                />
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.50254 5.6559L2.01317 1.16673C1.88985 1.04312 1.72498 0.975121 1.54917 0.975121C1.37327 0.975121 1.20849 1.04312 1.08498 1.16673L0.691805 1.5601C0.568098 1.68351 0.5 1.84849 0.5 2.02429C0.5 2.2001 0.568098 2.36488 0.691805 2.48839L6.03678 7.83346C6.16068 7.95746 6.32624 8.02536 6.50224 8.02488C6.67902 8.02536 6.84439 7.95756 6.96839 7.83346L12.3082 2.49337C12.4319 2.36985 12.5 2.20507 12.5 2.02917C12.5 1.85337 12.4319 1.68858 12.3082 1.56498L11.915 1.17171C11.6591 0.915804 11.2425 0.915804 10.9867 1.17171L6.50254 5.6559Z"
                    fill="#0A0A13"
                  />
                </svg>
              </a>
              <ul class="dropdown-menu pro-icon-font">
                <li>
                  <NavLink to="/English/Admin123" class="dropdown-item ">
                    Account Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/English/Admin123" class="dropdown-item ">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/English/Admin123"
                    class="dropdown-item "
                    style={{ color: "red" }}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
                    <NavLink to="/SignUp">
                      <button className="btn-login">Login/Sign up</button>
                    </NavLink>
                  </div>
                </div>
              </nav>
            </label>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;