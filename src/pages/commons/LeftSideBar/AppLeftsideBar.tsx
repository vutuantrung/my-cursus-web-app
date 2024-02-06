import { Link } from 'react-router-dom';
import { CATEGORIES, IMAGES } from '../../../constants';

const AppLeftsideBar = () => {
    return (
        <nav className="vertical_nav">
            <div className="left_section menu_left" id="js-menu">
                <div className="left_section">
                    <ul>
                        <li className="menu--item">
                            <Link to="/" className="menu--link active" title="Home">
                                <i className="uil uil-home-alt menu--icon"></i>
                                <span className="menu--label">Home</span>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to="/liveStreams">
                                <div className="menu--link" title="Live Streams">
                                    <i className="uil uil-kayak menu--icon"></i>
                                    <span className="menu--label">Live Streams</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to="/explore">
                                <div className="menu--link" title="Explore">
                                    <i className="uil uil-search menu--icon"></i>
                                    <span className="menu--label">Explore</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item menu--item__has_sub_menu">
                            <label className="menu--link" title="Categories">
                                <i className="uil uil-layers menu--icon"></i>
                                <span className="menu--label">Categories</span>
                            </label>
                            <ul className="sub_menu">
                                {CATEGORIES.map((item) => {
                                    return (
                                        <li key={item.name} className="sub_menu--item">
                                            <a href={item.link} className="sub_menu--link">
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                        <li className="menu--item  menu--item__has_sub_menu">
                            <label className="menu--link" title="Tests">
                                <i className="uil uil-clipboard-alt menu--icon"></i>
                                <span className="menu--label">Tests</span>
                            </label>
                            <ul className="sub_menu">
                                <li className="sub_menu--item">
                                    <Link to="/certificateCenter">
                                        <div className="sub_menu--link">Certification Center</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/certificateFillForm">
                                        <div className="sub_menu--link">Certification Fill Form</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/certificateTestView">
                                        <div className="sub_menu--link">Test View</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/certificateTestResult">
                                        <div className="sub_menu--link">Test Result</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <a
                                        href="http://www.gambolthemes.net/html-items/edututs+/Instructor_Dashboard/my_certificates.html"
                                        className="sub_menu--link"
                                    >
                                        My Certification
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu--item">
                            <Link to="/savedCourses">
                                <div className="menu--link" title="Saved Courses">
                                    <i className="uil uil-heart-alt menu--icon"></i>
                                    <span className="menu--label">Saved Courses</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item  menu--item__has_sub_menu">
                            <label className="menu--link" title="Pages">
                                <i className="uil uil-file menu--icon"></i>
                                <span className="menu--label">Pages</span>
                            </label>
                            <ul className="sub_menu">
                                <li className="sub_menu--item">
                                    <Link to="/about">
                                        <div className="sub_menu--link">About</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/signIn">
                                        <div className="sub_menu--link">Sign In</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/signUp">
                                        <div className="sub_menu--link">Sign Up</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/signUpSteps">
                                        <div className="sub_menu--link">Sign Up Steps</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/paidMembership">
                                        <div className="sub_menu--link">Paid Membership</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/coursDetails/12345">
                                        <div className="sub_menu--link">Course Detail View</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/checkoutMembership">
                                        <div className="sub_menu--link">Checkout</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/invoice">
                                        <div className="sub_menu--link">Invoice</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/career">
                                        <div className="sub_menu--link">Career</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/applyJob/1111">
                                        <div className="sub_menu--link">Job Apply</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/ourBlog">
                                        <div className="sub_menu--link">Our Blog</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/blogSingleView">
                                        <div className="sub_menu--link">Blog Detail View</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/companyDetails">
                                        <div className="sub_menu--link">Company Details</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/press">
                                        <div className="sub_menu--link">Press</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/liveStreams/output/12345">
                                        <div className="sub_menu--link">Live Stream View</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/addStream">
                                        <div className="sub_menu--link">Add live Stream</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/searchResult">
                                        <div className="sub_menu--link">Search Result</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/thankyou">
                                        <div className="sub_menu--link">Thank You</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/commingSoon">
                                        <div className="sub_menu--link">Coming Soon</div>
                                    </Link>
                                </li>
                                <li className="sub_menu--item">
                                    <Link to="/error404">
                                        <div className="sub_menu--link">Error 404</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="left_section">
                    <h6 className="left_title">SUBSCRIPTIONS</h6>
                    <ul>
                        <li className="menu--item">
                            <Link to={`/instructorProfile/${12345}`} className="menu--link user_img">
                                <img src={IMAGES.avatar_instructor_0} alt="" />
                                Rock Smith
                                <div className="alrt_dot"></div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to={`/instructorProfile/${54321}`} className="menu--link user_img">
                                <img src={IMAGES.avatar_instructor_1} alt="" />
                                Jassica William
                                <div className="alrt_dot"></div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to={`/instructorProfile/${54321}`} className="menu--link user_img">
                                <img src={IMAGES.avatar_instructor_1} alt="" />
                                Sukhwinder Singh
                                <div className="alrt_dot"></div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to={`/instructorProfile/${54321}`} className="menu--link user_img">
                                <img src={IMAGES.avatar_instructor_1} alt="" />
                                Neha Smith
                                <div className="alrt_dot"></div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to={`/instructorProfile/${54321}`} className="menu--link user_img">
                                <img src={IMAGES.avatar_instructor_1} alt="" />
                                Saloni Prabhakar
                                <div className="alrt_dot"></div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to={`/allInstructor`} className="menu--link" title="Browse Instructors">
                                <i className="uil uil-plus-circle menu--icon"></i>
                                <span className="menu--label">Browse Instructors</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="left_section pt-2">
                    <ul>
                        <li className="menu--item">
                            <Link to="/settings">
                                <div className="menu--link" title="Setting">
                                    <i className="uil uil-cog menu--icon"></i>
                                    <span className="menu--label">Setting</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to="/help">
                                <div className="menu--link" title="Help">
                                    <i className="uil uil-question-circle menu--icon"></i>
                                    <span className="menu--label">Help</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to="/reportHistory">
                                <div className="menu--link" title="Report History">
                                    <i className="uil uil-windsock menu--icon"></i>
                                    <span className="menu--label">Report History</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to="/feedback">
                                <div className="menu--link" title="Send Feedback">
                                    <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                                    <span className="menu--label">Send Feedback</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="left_footer">
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/press">Press</Link>
                        </li>
                        <li>
                            <Link to="/contactUs">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/commingSoon">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/commingSoon">Developers</Link>
                        </li>
                        <li>
                            <Link to="/termsOfUse">Copyright</Link>
                        </li>
                        <li>
                            <Link to="/termsOfUse">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/termsOfUse">Terms</Link>
                        </li>
                    </ul>
                    <div className="left_footer_content">
                        <p>
                            © 2020 <strong>Cursus</strong>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AppLeftsideBar;
