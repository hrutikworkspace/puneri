import React from "react";
import "./blogD.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BlogD = () => {
  return (
    <>
      <div className="outer-changes">
        <section className="blogd-section">
          <div className="upper-wrapper">
            <Header />
            <div className="container header-pad">
              <div className="row">
                <div className="col-xl-12">
                  <h5 className="blogd-sec">
                    06 Hangout Spots Near Mula Mutha River Pune
                  </h5>
                  <div className="blogd-top">
                    <img src="../../images/blog-icon.png" alt="" />

                    <span>Veronica Ben</span>
                    <div className="date-blogd">
                      <span>22 Jan 2023</span>
                    </div>
                  </div>
                  <div className="blogd-btm-con pb-5">
                    <p>
                      The Mula Mutha River is surrounded by the western ghats
                      and Sahyadri mountain range in Pune. It caters to various
                      kinds of activities for all types based on their interest
                      levels. All kinds of camping, tracking, modern theme
                      parks, dams, lakes, forts, beaches, waterfalls and
                      different kinds of activities are here for you to enjoy
                      with your friends. Below is a compiled list of places out
                      in Pune with your friends.
                    </p>
                  </div>

                  <div className="row blogd-para">
                    <div className="col-md-8">
                      <div>
                        <h5>1. Osho Ashram, Pune</h5>
                        <p>
                          Highlighting the world’s biggest meditation hall, this
                          place is well- known as a meditation resort. People
                          from all parts of the world flock here in search of
                          inner peace. Spanning over 32 acres, it has a guest
                          house if you want to stay on campus, a spa, sauna, a
                          jacuzzi, gym, and a tennis court. Various meditation
                          courses such as Nadabrahma, Nataraj, Kundalini, etc.
                          are offered here for different rates.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src="../../images/osho.png" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h5>2. Rajiv Gandhi Zoological Park, Pune</h5>
                        <p>
                          Divided into three parts – snake park, zoo and animal
                          orphanage, this zoological park is a house to various
                          species of mammals, reptiles, and birds. This is an
                          amazing place to learn more about various animals as
                          it provides detailed information on all the species
                          that it is home to.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src="../../images/zoo.png" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h5>3. Raja Dinkar Kelkar Museum, Pune</h5>
                        <p>
                          With over 20,000 artefacts, this place stands tall as
                          one of the most artistic museums in the country. It is
                          a must-visit for art lovers to experience the rich
                          taste of the emperors &amp; artists who once lived in
                          the region.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src="../../images/museum.png" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h5> 4. Bund Garden, Pune</h5>
                        <p>
                          With over 20,000 artefacts, this place stands tall as
                          one of the most artistic museums in the country. It is
                          a must-visit for art lovers to experience the rich
                          taste of the emperors &amp; artists who once lived in
                          the region.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src="../../images/garden.png" alt="" />
                    </div>

                    <div className="col-md-8">
                      <div>
                        <h5> 5. Shaniwar Wada, Pune</h5>
                        <p>
                          The love story of Bajirao and Kashi began here and so
                          did the unfinished love story of Bajirao-Mastani. The
                          palace has been widely acclaimed for its ancient
                          architecture. To showcase the rich history of ancient
                          India, light and sound shows are organised here in the
                          evenings every day.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src="../../images/wada-1.png" alt="" />
                    </div>

                    <div className="col-md-8">
                      <div>
                        <h5> 6. Vetal Tekdi, Pune</h5>
                        <p>
                          With an elevation of 2600 feet above sea level, Vetal
                          Hill is the highest point in Pune. This is one of the
                          best hangout places in Pune for friends to enjoy each
                          other’s company and spend quality time capturing
                          panoramic views of the city.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src="../../images/museum.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pb-3 blogd-para">
                  <p>
                    The weather in Pune is usually rewarding for the early
                    risers. If you start your day early, there are abundant
                    places that you can explore. However, to cover all the best
                    places to visit in Pune with friends, you might need quite a
                    few days or weekends.
                  </p>
                </div>
              </div>
              <div className="lowerLine-1"></div>
              <div className="blogd-comments">
                <span>
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.36377 17.8672C0.36377 18.2317 0.659211 18.5271 1.02374 18.5271H4.98358C5.61812 18.5271 6.18356 18.2267 6.5462 17.761C8.15489 18.2692 9.82476 18.5271 11.5139 18.5271H16.8631C17.9548 18.5271 18.843 17.6389 18.843 16.5472C18.843 16.2896 18.793 16.0435 18.7031 15.8175C19.5432 15.5885 20.163 14.8191 20.163 13.9073C20.163 13.4007 19.9713 12.938 19.6572 12.5874C19.9715 12.2368 20.163 11.7741 20.163 11.2674C20.163 10.7608 19.9713 10.2981 19.6572 9.9475C19.9715 9.59689 20.163 9.13422 20.163 8.62755C20.163 7.53585 19.2747 6.64763 18.183 6.64763H14.5705C14.6218 6.52629 14.6747 6.40324 14.7287 6.27812C15.1291 5.34951 15.5431 4.38929 15.5431 3.34777C15.5431 1.52356 14.0677 0.00390625 12.2433 0.00390625C11.9288 0.00390625 11.6579 0.22596 11.5962 0.534463L11.2592 2.21963C10.8164 4.43294 10.3275 4.68353 8.50825 5.61574C8.02736 5.86202 7.46243 6.15162 6.80315 6.5275C6.49963 5.82267 5.79841 5.32769 4.98358 5.32769H1.02374C0.659211 5.32769 0.36377 5.62313 0.36377 5.98766V17.8672ZM9.10996 6.79046C10.0951 6.28568 10.8066 5.92115 11.3638 5.30397C11.9336 4.6727 12.2783 3.85409 12.5535 2.47846L12.7692 1.39947C13.5969 1.64181 14.2232 2.43601 14.2232 3.34777C14.2232 4.11671 13.864 4.94975 13.5165 5.75547C13.3905 6.04781 13.2619 6.34669 13.1475 6.64763H12.2433C11.8788 6.64763 11.5833 6.94307 11.5833 7.30761C11.5833 7.67214 11.8788 7.96758 12.2433 7.96758H18.183C18.5469 7.96758 18.843 8.26371 18.843 8.62755C18.843 8.9914 18.5469 9.28753 18.183 9.28753H16.8631C16.4986 9.28753 16.2031 9.58297 16.2031 9.9475C16.2031 10.312 16.4986 10.6075 16.8631 10.6075H18.183C18.5469 10.6075 18.843 10.9036 18.843 11.2674C18.843 11.6313 18.5469 11.9274 18.183 11.9274H16.8631C16.4986 11.9274 16.2031 12.2229 16.2031 12.5874C16.2031 12.9519 16.4986 13.2474 16.8631 13.2474H18.183C18.5469 13.2474 18.843 13.5435 18.843 13.9073C18.843 14.2712 18.5469 14.5673 18.183 14.5673H16.8631C16.4986 14.5673 16.2031 14.8627 16.2031 15.2273C16.2031 15.5918 16.4986 15.8873 16.8631 15.8873C17.2269 15.8873 17.5231 16.1834 17.5231 16.5472C17.5231 16.9111 17.2269 17.2072 16.8631 17.2072H11.5139C9.96689 17.2072 8.43744 16.9721 6.9635 16.5087V7.96191C7.81442 7.45455 8.52612 7.08968 9.10996 6.79046ZM1.68372 6.64763H4.98358C5.34742 6.64763 5.64355 6.94376 5.64355 7.30761V16.5472C5.64355 16.9111 5.34742 17.2072 4.98358 17.2072H1.68372V6.64763Z"
                      fill="#0A0A13"
                    />
                  </svg>
                  <span>1.2k</span>
                </span>

                <span>368 Comments</span>
                <span>85 Shares</span>
              </div>
              <div className="lowerLine-1"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default BlogD;
