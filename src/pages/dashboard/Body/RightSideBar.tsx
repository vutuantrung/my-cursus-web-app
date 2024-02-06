import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants';

export const RightSideBar = () => {
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="right_side">
                <div className="fcrse_2 mb-30">
                    <div className="tutor_img">
                        <Link to="/myInstructorProfile" className="tutor_name">
                            <img src={IMAGES.avatar} alt="" />
                        </Link>
                    </div>
                    <div className="tutor_content_dt">
                        <div className="tutor150">
                            <Link to="/myInstructorProfile" className="tutor_name">
                                奈汐酱Nice
                            </Link>
                            <div className="mef78" title="Verify">
                                <i className="uil uil-check-circle"></i>
                            </div>
                        </div>
                        <div className="tutor_cate">Web Developer, Designer, and Teacher</div>
                        <ul className="tutor_social_links">
                            <li>
                                <a href="#" className="fb">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tw">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="ln">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="yu">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="tut1250">
                            <span className="vdt15">615K Students</span>
                            <span className="vdt15">12 Courses</span>
                        </div>
                        <Link to="/myInstructorProfile" className="prfle12link">
                            Go To Profile
                        </Link>
                    </div>
                </div>
                <div className="fcrse_3">
                    <div className="cater_ttle">
                        <h4>Live Streaming</h4>
                    </div>
                    <div className="live_text">
                        <div className="live_icon">
                            <i className="uil uil-kayak"></i>
                        </div>
                        <div className="live-content">
                            <p>Set up your channel and stream live to your students</p>
                            <Link to="/addStream">
                                <button className="live_link">Get Started</button>
                            </Link>
                            <span className="livinfo">Info : This feature only for 'Instructors'.</span>
                        </div>
                    </div>
                </div>
                <div className="get1452">
                    <h4>Get personalized recommendations</h4>
                    <p>Answer a few questions for your top picks</p>

                    <button
                        className="Get_btn"
                        onClick={() => {
                            console.log("window.location.href = '#';");
                        }}
                    >
                        Get Started
                    </button>
                </div>
                <div className="fcrse_3">
                    <div className="cater_ttle">
                        <h4>Top Categories</h4>
                    </div>
                    <ul className="allcate15">
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-arrow"></i>Development
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-graph-bar"></i>Business
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-monitor"></i>IT and Software
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-smile"></i>Design
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-chart-line"></i>Marketing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-book-open"></i>Personal Development
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-camera"></i>Photography
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ct_item">
                                <i className="uil uil-music"></i>Music
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="strttech120">
                    <h4>Become an Instructor</h4>
                    <p>
                        Top instructors from around the world teach millions of students on Cursus. We provide the tools and
                        skills to teach what you love.
                    </p>
                    <button
                        className="Get_btn"
                        onClick={() => {
                            console.log("window.location.href = '#';");
                        }}
                    >
                        Start Teaching
                    </button>
                </div>
            </div>
        </div>
    );
};
