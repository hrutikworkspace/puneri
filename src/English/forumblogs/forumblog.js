import React from "react";
import "../../English/forumblogs/forumblog.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ForumBlog = () => {
  return (
    <>
      <div className="outer-changes">
        <section className="facility-section">
          <div className="upper-wrapper">
            <Header />
            <div className="row header-pad">
              <div className="col-xl-9">
                <div className="left-side-details">
                  <div className="left-side-info">
                    <div className="blogd-top2">
                      <img src="../../images/blog-icon.png" alt="" />
                      <div>
                        <span>Veronica Ben</span>
                        <div className="date-check">22 Jan 2023</div>
                      </div>
                    </div>
                    <div>
                      <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M12.0599 0L1.99376 0C1.17394 0 0.454102 0.699726 0.454102 1.52797L0.454102 16.9774C0.454102 17.2547 0.528474 17.4858 0.648338 17.6643C0.791683 17.8777 1.02249 18 1.26999 17.9999C1.50399 17.9999 1.75313 17.8919 1.9832 17.688L6.4868 13.7207C6.62589 13.5975 6.82569 13.5269 7.03343 13.5269C7.24108 13.5269 7.44047 13.5975 7.57997 13.7211L12.0685 17.6874C12.2994 17.8919 12.5314 18 12.765 18C13.16 18 13.545 17.6839 13.545 16.9775L13.545 1.52797C13.545 0.699726 12.8797 0 12.0599 0Z"
                          fill="#0A0A13"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="headings2">
                    <h4>
                      How can we protect our rivers from <br></br>
                      pollution caused by human activities?
                    </h4>
                    <p>
                      Hello everyone, I'm currently working on a project about
                      pollution caused by human activities <br></br> and I'm
                      looking for suggestions on how to address this issue. What
                      are some practical solutions <br></br> or actions that we
                      can take to prevent or reduce pollution caused by human
                      activities? I would <br></br> appreciate any insights or
                      ideas you may have. Thank you in advance for your input!
                    </p>
                  </div>
                  <div className="top-a-class">
                    <span>Category</span>
                    <a href="" className="margin-span">
                      Water Conservation{" "}
                    </a>
                  </div>
                  <div className="blogd-comments">
                    <span>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_702_1990)">
                          <path
                            d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z"
                            fill="url(#paint0_linear_702_1990)"
                          />
                          <path
                            d="M10.9158 5.04888L11.1904 3.51969C11.3356 2.71119 10.8384 1.92596 10.0455 1.71148L9.80909 1.64751C9.57371 1.58386 9.32539 1.68968 9.20832 1.90359L6.42208 6.99411C6.32951 7.16326 6.15196 7.2685 5.95911 7.2685H4.39399C4.1025 7.2685 3.86621 7.50479 3.86621 7.79628V13.773C3.86621 14.02 4.03747 14.234 4.27846 14.288L8.55916 15.2484C8.59711 15.2569 8.63584 15.2612 8.67469 15.2612H13.5309C14.3383 15.2612 15.0164 14.6536 15.1047 13.8511L15.8118 7.42652C15.915 6.48913 15.181 5.66997 14.2379 5.66997H11.4353C11.1065 5.66997 10.8577 5.37251 10.9158 5.04888Z"
                            fill="url(#paint1_linear_702_1990)"
                          />
                          <path
                            d="M4.74984 14.7777H3.69428C3.40279 14.7777 3.1665 14.5414 3.1665 14.2499V6.86103C3.1665 6.56954 3.40279 6.33325 3.69428 6.33325H4.74984C5.04133 6.33325 5.27762 6.56954 5.27762 6.86103V14.2499C5.27762 14.5414 5.04133 14.7777 4.74984 14.7777Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_702_1990"
                            x1="2.7825"
                            y1="16.2175"
                            x2="16.2175"
                            y2="2.7825"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#5558FF" />
                            <stop offset="1" stop-color="#00C0FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_702_1990"
                            x1="5.0697"
                            y1="15.1951"
                            x2="14.7444"
                            y2="5.5205"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#ADDCFF" />
                            <stop offset="1" stop-color="#EAF6FF" />
                          </linearGradient>
                          <clipPath id="clip0_702_1990">
                            <rect width="19" height="19" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>1.2k</span>
                    </span>
                    <span className="span-comment">368 Comments</span>
                    <span>85 Shares</span>
                  </div>
                  <div className="lowerLine-1"></div>
                  <div className="blogd-comments2">
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_702_1996)">
                          <path
                            d="M17.4579 3.87451H16.1663C15.8094 3.87451 15.5205 4.16335 15.5205 4.52033C15.5205 4.87727 15.8093 5.16615 16.1663 5.16615H17.4579C17.8149 5.16615 18.1037 4.87731 18.1037 4.52033C18.1037 4.16335 17.8149 3.87451 17.4579 3.87451Z"
                            fill="black"
                          />
                          <path
                            d="M10.932 1.64824L10.2863 0.356641C10.1255 0.037513 9.73884 -0.0904907 9.41971 0.0678059C9.10058 0.227349 8.97129 0.615227 9.13087 0.934355L9.77669 2.22595C9.93602 2.54379 10.322 2.67437 10.6432 2.51479C10.9623 2.35524 11.0916 1.96737 10.932 1.64824Z"
                            fill="black"
                          />
                          <path
                            d="M15.1637 0.0677982C14.8458 -0.0904984 14.4568 0.0375482 14.2972 0.356634L13.6514 1.64823C13.4918 1.96736 13.6211 2.35519 13.9402 2.51478C14.2624 2.67479 14.6479 2.54271 14.8067 2.22594L15.4526 0.934347C15.6121 0.615219 15.4828 0.227341 15.1637 0.0677982Z"
                            fill="black"
                          />
                          <path
                            d="M8.41691 3.87451H7.12531C6.76837 3.87451 6.47949 4.16335 6.47949 4.52033C6.47949 4.87727 6.76833 5.16615 7.12531 5.16615H8.41691C8.77385 5.16615 9.06273 4.87731 9.06273 4.52033C9.06273 4.16335 8.77385 3.87451 8.41691 3.87451Z"
                            fill="black"
                          />
                          <path
                            d="M4.54155 10.3755H1.95832C1.60168 10.3755 1.3125 10.6646 1.3125 11.0213V21.3541C1.3125 21.7107 1.60164 21.9999 1.95832 21.9999H4.54151C4.89815 21.9999 5.18733 21.7108 5.18733 21.3541V11.0213C5.18733 10.6646 4.89824 10.3755 4.54155 10.3755Z"
                            fill="black"
                          />
                          <path
                            d="M20.6742 12.0874C20.5603 11.0856 19.6245 10.3755 18.6163 10.3755H13.5814C14.0093 9.60933 14.2389 7.44229 14.2288 6.55705C14.2119 5.09173 12.9984 3.91748 11.533 3.91748H11.0001C10.6432 3.91748 10.3543 4.20632 10.3543 4.5633C10.3543 6.05668 9.77283 8.75219 8.67614 9.84892C7.93798 10.5871 7.30694 10.8546 6.47949 11.2681V20.9583C7.74634 21.3805 9.35483 21.9999 11.8065 21.9999H16.031C17.423 21.9999 18.5071 20.7108 17.9677 19.3486C18.7895 19.1248 19.3955 18.3711 19.3955 17.4793C19.3955 17.2277 19.3469 16.9868 19.2593 16.7654C20.6441 16.3881 21.1539 14.6782 20.1927 13.6045C20.5458 13.21 20.7405 12.6704 20.6742 12.0874Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_702_1996">
                            <rect width="22" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Like</span>
                    </span>
                    <span>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.8 1.1001L16.2 1.1001C17.1756 1.1001 18 1.9245 18 2.9001V12.8001C18 13.7757 17.1756 14.6001 16.2 14.6001H7.6326L4.722 17.802C4.6638 17.8656 4.5828 17.9001 4.5 17.9001C4.4637 17.9001 4.4271 17.8935 4.3917 17.88C4.2762 17.8353 4.2 17.724 4.2 17.6001V14.6001H1.8C0.8244 14.6001 0 13.7757 0 12.8001L0 2.9001C0 1.9245 0.8244 1.1001 1.8 1.1001Z"
                          fill="#0A0A13"
                        />
                      </svg>

                      <span>Comment</span>
                    </span>
                    <span>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_702_2055)">
                          <path
                            d="M9.5332 4.76783C4.25256 5.04282 0.00585937 9.42586 0.00585937 14.7734L0.00585937 18.5L1.33916 15.3961C2.91606 12.2428 6.04472 10.2266 9.5332 10.0413V14.3064L17.9935 7.39063L9.5332 0.5V4.76783Z"
                            fill="#0A0A13"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_702_2055">
                            <rect
                              width="18"
                              height="18"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Share</span>
                    </span>
                  </div>
                  <div className="lowerLine-1"></div>
                  <div className="commentStart">
                    <img src="../../images/Ellipse 8.png"></img>&nbsp;&nbsp;
                    <div className="comment1P">
                      <div className="comment1">
                        {" "}
                        <h6 className="Forumname1">Paul Rodd</h6>
                        <span className="commentTime">
                          8h &nbsp;
                          <FiberManualRecordIcon className="dotIcon" />
                          <FiberManualRecordIcon className="dotIcon" />
                          <FiberManualRecordIcon className="dotIcon" />
                        </span>
                      </div>
                      <div>
                        <p className="comment1fourm">
                          Conserving water can help in reducing the amount of
                          wastewater that <br />
                          goes into rivers.
                        </p>
                      </div>
                      <div className="commentLike">
                        <span className="commentLikeT">
                          Like &nbsp;
                          <img src="../../images/Like&N.png"></img>
                        </span>
                        <span className="commentReplay">Reply 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="commentStart commentStart2">
                    <img src="../../images/Ellipse 9.png"></img>&nbsp;&nbsp;
                    <div className="comment1P">
                      <div className="comment1">
                        {" "}
                        <h6 className="Forumname1">Veronica Ben</h6>
                        <span className="commentTime">
                          8h &nbsp;
                          <FiberManualRecordIcon className="dotIcon" />
                          <FiberManualRecordIcon className="dotIcon" />
                          <FiberManualRecordIcon className="dotIcon" />
                        </span>
                      </div>
                      <div>
                        <p className="comment1fourm">Thank you</p>
                      </div>
                      <div className="commentLike">
                        <span className="commentLikeT">
                          Like &nbsp;
                          <img src="../../images/Like&N.png"></img>
                        </span>
                        <span className="commentReplay">Reply 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="commentStart">
                    <img src="../../images/Ellipse 10.png"></img>&nbsp;&nbsp;
                    <div className="comment1P">
                      <div className="comment1">
                        {" "}
                        <h6 className="Forumname1">Jennifer Lawrence</h6>
                        <span className="commentTime">
                          8h &nbsp;
                          <FiberManualRecordIcon className="dotIcon" />
                          <FiberManualRecordIcon className="dotIcon" />
                          <FiberManualRecordIcon className="dotIcon" />
                        </span>
                      </div>
                      <div>
                        <p className="comment1fourm">
                          Joining community-based groups, participating in
                          clean-up events, and volunteering <br /> for river
                          stewardship programs can help in keeping rivers clean.
                        </p>
                      </div>
                      <div className="commentLike">
                        <span className="commentLikeT">
                          Like &nbsp;
                          <img src="../../images/Like&N.png"></img>
                        </span>
                        <span className="commentReplay">Reply 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="commentLoadM">
                   <NavLink to="#"> <p className="commentLoad">Load More Comments</p> </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 relatedTopics">
                <h5 className="trending2">Related Topics</h5>
                <div className="right-side-details">
                  <div className="row">
                    <div className="col-xl-12">
                      <div class="card-forum">
                        <div className="container-fluid">
                          <div className="top-a-class">
                            <a href="">Water Conservation </a>
                          </div>
                          <div className="headings">
                            <h4>
                              How can we protect our rivers from <br></br>
                              pollution caused by human activities?
                            </h4>
                            <p>
                              Human activities such as industrialization,
                              agriculture, and urbanization have a significant
                              impact on the health of rivers. Let’s discuss the
                              ideas that we can reduce pollution created by
                              society{" "}
                            </p>
                          </div>
                          <div className="DisViw">
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>35 Discussing</p>
                            </div>
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>1558 Views</p>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-contain">
                          <div className="blogd-top2">
                            <img src="../../images/blog-icon.png" alt="" />

                            <span>Veronica Ben</span>
                          </div>
                          <div>
                            <span>22 Jan 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div class="card-forum">
                        <div className="container-fluid">
                          <div className="top-a-class">
                            <a href="">Water Conservation </a>
                          </div>
                          <div className="headings">
                            <h4>
                              How can we protect our rivers from <br></br>
                              pollution caused by human activities?
                            </h4>
                            <p>
                              Human activities such as industrialization,
                              agriculture, and urbanization have a significant
                              impact on the health of rivers. Let’s discuss the
                              ideas that we can reduce pollution created by
                              society{" "}
                            </p>
                          </div>
                          <div className="DisViw">
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>35 Discussing</p>
                            </div>
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>1558 Views</p>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-contain">
                          <div className="blogd-top2">
                            <img src="../../images/blog-icon.png" alt="" />

                            <span>Veronica Ben</span>
                          </div>
                          <div>
                            <span>22 Jan 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div class="card-forum">
                        <div className="container-fluid">
                          <div className="top-a-class">
                            <a href="">Water Conservation </a>
                          </div>
                          <div className="headings">
                            <h4>
                              How can we protect our rivers from <br></br>
                              pollution caused by human activities?
                            </h4>
                            <p>
                              Human activities such as industrialization,
                              agriculture, and urbanization have a significant
                              impact on the health of rivers. Let’s discuss the
                              ideas that we can reduce pollution created by
                              society{" "}
                            </p>
                          </div>
                          <div className="DisViw">
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.13672 5.71552V4.69598C7.13672 3.72673 7.92527 2.93817 8.89453 2.93817H13.9043V1.00458C13.9043 0.616242 13.5895 0.301453 13.2012 0.301453H4.79883C4.41049 0.301453 4.0957 0.616242 4.0957 1.00458V5.71552H7.13672Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M8.89453 12.0436C7.92527 12.0436 7.13672 11.2551 7.13672 10.2858V6.7702H0.703125C0.314789 6.7702 0 7.08499 0 7.47333V13.0632C0 13.4515 0.314789 13.7663 0.703125 13.7663H2.56641V15.3463C2.56641 15.5546 2.7373 15.6985 2.91941 15.6985C2.99095 15.6985 3.06418 15.6763 3.12954 15.6271L5.59902 13.7663H9.10547C9.4938 13.7663 9.80859 13.4515 9.80859 13.0631V12.0436H8.89453V12.0436Z"
                                  fill="#1C21AB"
                                />
                                <path
                                  d="M17.2969 3.99286H8.89453C8.5062 3.99286 8.19141 4.30765 8.19141 4.69598V10.2858C8.19141 10.6742 8.5062 10.989 8.89453 10.989H12.401L14.8705 12.8498C14.9358 12.899 15.009 12.9212 15.0806 12.9212C15.2627 12.9212 15.4336 12.7773 15.4336 12.569V10.989H17.2969C17.6852 10.989 18 10.6742 18 10.2859V4.69602C18 4.30765 17.6852 3.99286 17.2969 3.99286Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>35 Discussing</p>
                            </div>
                            <div className="disc-1">
                              <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 0.635193C5.56091 0.635193 2.44216 2.51675 0.140841 5.5729C-0.0469469 5.82329 -0.0469469 6.17309 0.140841 6.42347C2.44216 9.48331 5.56091 11.3649 9 11.3649C12.4391 11.3649 15.5578 9.48331 17.8592 6.42715C18.0469 6.17677 18.0469 5.82697 17.8592 5.57659C15.5578 2.51675 12.4391 0.635193 9 0.635193ZM9.2467 9.77787C6.96379 9.92148 5.07855 8.03992 5.22215 5.75333C5.33998 3.86809 6.86806 2.34001 8.7533 2.22218C11.0362 2.07858 12.9214 3.96014 12.7778 6.24673C12.6563 8.12829 11.1283 9.65636 9.2467 9.77787ZM9.13256 8.03255C7.90273 8.10988 6.88647 7.0973 6.96747 5.86747C7.03007 4.85121 7.85486 4.0301 8.87113 3.96382C10.101 3.8865 11.1172 4.89908 11.0362 6.1289C10.9699 7.14885 10.1451 7.96996 9.13256 8.03255Z"
                                  fill="#1C21AB"
                                />
                              </svg>
                              <p>1558 Views</p>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-contain">
                          <div className="blogd-top2">
                            <img src="../../images/blog-icon.png" alt="" />

                            <span>Veronica Ben</span>
                          </div>
                          <div>
                            <span>22 Jan 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ForumBlog;
