import { NavLink, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Discussions from './Discussions';
import MyCourses from './MyCourses';
import PurchasedCourses from './PurchasedCourses';
import Subscriptions from './Subscriptions';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className="wrapper _bg4586">
            {/* <!-- Profile --> */}
            <div className="_216b01">
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10">
                            <div className="section3125 rpt145">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <a href="#" className="_216b22">
                                            <span>
                                                <i className="uil uil-cog"></i>
                                            </span>
                                            Setting
                                        </a>
                                        <div className="dp_dt150">
                                            <div className="img148">
                                                <img src="images/hd_dp.jpg" alt="" />
                                            </div>
                                            <div className="prfledt1">
                                                <h2>Joginder Singh</h2>
                                                <span>UI / UX Designer and Web Developer</span>
                                            </div>
                                        </div>
                                        <ul className="_ttl120">
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Enroll Students</div>
                                                    <div className="_ttl123">612K</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Courses</div>
                                                    <div className="_ttl123">8</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Reviews</div>
                                                    <div className="_ttl123">11K</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="_ttl121">
                                                    <div className="_ttl122">Subscriptions</div>
                                                    <div className="_ttl123">452K</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <Link to="/settings" className="_216b12">
                                            <span>
                                                <i className="uil uil-cog"></i>
                                            </span>
                                            Setting
                                        </Link>
                                        <div className="rgt-145">
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
                                        </div>
                                        <ul className="_bty149">
                                            <li>
                                                <Link to="/instructorDashboard">
                                                    <button className="studio-link-btn btn500">Cursus Studio</button>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/settings">
                                                    <button className="msg125 btn500">Edit</button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Nav-bar header --> */}
            <div className="_215b15">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course_tabs">
                                <nav>
                                    <div className="nav nav-tabs tab_crse" id="nav-tab" role="tablist">
                                        <NavLink to="aboutMe" className="nav-item nav-link">
                                            About
                                        </NavLink>
                                        <NavLink to="discussions" className="nav-item nav-link">
                                            Discussion
                                        </NavLink>
                                        <NavLink to="myCourses" className="nav-item nav-link">
                                            Courses
                                        </NavLink>
                                        <NavLink to="purchasedCourses" className="nav-item nav-link">
                                            Purchased
                                        </NavLink>
                                        <NavLink to="subscriptions" className="nav-item nav-link">
                                            Subscriptions
                                        </NavLink>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Nav-bar content --> */}
            <div className="_215b17">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course_tab_content">
                                <Routes>
                                    <Route path="" Component={AboutMe} />
                                    <Route path="aboutMe" Component={AboutMe} />
                                    <Route path="discussions" Component={Discussions} />
                                    <Route path="myCourses" Component={MyCourses} />
                                    <Route path="purchasedCourses" Component={PurchasedCourses} />
                                    <Route path="subscriptions" Component={Subscriptions} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Footer --> */}
            <footer className="footer mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="about_us.html">About</a>
                                <a href="our_blog.html">Blog</a>
                                <a href="career.html">Careers</a>
                                <a href="press.html">Press</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="help.html">Help</a>
                                <a href="coming_soon.html">Advertise</a>
                                <a href="coming_soon.html">Developers</a>
                                <a href="contact_us.html">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="terms_of_use.html">Copyright Policy</a>
                                <a href="terms_of_use.html">Terms</a>
                                <a href="terms_of_use.html">Privacy Policy</a>
                                <a href="sitemap.html">Sitemap</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f3">
                                <a href="#" className="btn1542">
                                    Teach on Cursus
                                </a>
                                <div className="lng_btn">
                                    <div
                                        className="ui language bottom right pointing dropdown floating"
                                        id="languages"
                                        data-content="Select Language"
                                    >
                                        <a href="#">
                                            <i className="uil uil-globe lft"></i>Language
                                            <i className="uil uil-angle-down rgt"></i>
                                        </a>
                                        <div className="menu">
                                            <div className="scrolling menu">
                                                <div className="item" data-percent="100" data-value="en" data-english="English">
                                                    <span className="description">English</span>
                                                    English
                                                </div>
                                                <div className="item" data-percent="94" data-value="da" data-english="Danish">
                                                    <span className="description">dansk</span>
                                                    Danish
                                                </div>
                                                <div className="item" data-percent="94" data-value="es" data-english="Spanish">
                                                    <span className="description">Español</span>
                                                    Spanish
                                                </div>
                                                <div className="item" data-percent="34" data-value="zh" data-english="Chinese">
                                                    <span className="description">简体中文</span>
                                                    Chinese
                                                </div>
                                                <div
                                                    className="item"
                                                    data-percent="54"
                                                    data-value="zh_TW"
                                                    data-english="Chinese (Taiwan)"
                                                >
                                                    <span className="description">中文 (臺灣)</span>
                                                    Chinese (Taiwan)
                                                </div>
                                                <div className="item" data-percent="79" data-value="fa" data-english="Persian">
                                                    <span className="description">پارسی</span>
                                                    Persian
                                                </div>
                                                <div className="item" data-percent="41" data-value="fr" data-english="French">
                                                    <span className="description">Français</span>
                                                    French
                                                </div>
                                                <div className="item" data-percent="37" data-value="el" data-english="Greek">
                                                    <span className="description">ελληνικά</span>
                                                    Greek
                                                </div>
                                                <div className="item" data-percent="37" data-value="ru" data-english="Russian">
                                                    <span className="description">Русский</span>
                                                    Russian
                                                </div>
                                                <div className="item" data-percent="36" data-value="de" data-english="German">
                                                    <span className="description">Deutsch</span>
                                                    German
                                                </div>
                                                <div className="item" data-percent="23" data-value="it" data-english="Italian">
                                                    <span className="description">Italiano</span>
                                                    Italian
                                                </div>
                                                <div className="item" data-percent="21" data-value="nl" data-english="Dutch">
                                                    <span className="description">Nederlands</span>
                                                    Dutch
                                                </div>
                                                <div
                                                    className="item"
                                                    data-percent="19"
                                                    data-value="pt_BR"
                                                    data-english="Portuguese"
                                                >
                                                    <span className="description">Português(BR)</span>
                                                    Portuguese
                                                </div>
                                                <div className="item" data-percent="17" data-value="id" data-english="Indonesian">
                                                    <span className="description">Indonesian</span>
                                                    Indonesian
                                                </div>
                                                <div className="item" data-percent="12" data-value="lt" data-english="Lithuanian">
                                                    <span className="description">Lietuvių</span>
                                                    Lithuanian
                                                </div>
                                                <div className="item" data-percent="11" data-value="tr" data-english="Turkish">
                                                    <span className="description">Türkçe</span>
                                                    Turkish
                                                </div>
                                                <div className="item" data-percent="10" data-value="kr" data-english="Korean">
                                                    <span className="description">한국어</span>
                                                    Korean
                                                </div>
                                                <div className="item" data-percent="7" data-value="ar" data-english="Arabic">
                                                    <span className="description">العربية</span>
                                                    Arabic
                                                </div>
                                                <div className="item" data-percent="6" data-value="hu" data-english="Hungarian">
                                                    <span className="description">Magyar</span>
                                                    Hungarian
                                                </div>
                                                <div className="item" data-percent="6" data-value="vi" data-english="Vietnamese">
                                                    <span className="description">tiếng Việt</span>
                                                    Vietnamese
                                                </div>
                                                <div className="item" data-percent="5" data-value="sv" data-english="Swedish">
                                                    <span className="description">svenska</span>
                                                    Swedish
                                                </div>
                                                <div className="item" data-precent="4" data-value="pl" data-english="Polish">
                                                    <span className="description">polski</span>
                                                    Polish
                                                </div>
                                                <div className="item" data-percent="6" data-value="ja" data-english="Japanese">
                                                    <span className="description">日本語</span>
                                                    Japanese
                                                </div>
                                                <div className="item" data-percent="0" data-value="ro" data-english="Romanian">
                                                    <span className="description">românește</span>
                                                    Romanian
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="footer_bottm">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="fotb_left">
                                            <li>
                                                <a href="index.html">
                                                    <div className="footer_logo">
                                                        <img src="images/logo1.svg" alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <p>
                                                    © 2020 <strong>Cursus</strong>. All Rights Reserved.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="edu_social_links">
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Body;
