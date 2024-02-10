import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const LeftsideBar = () => {
    return (
        <nav className="vertical_nav">
            <div className="left_section menu_left" id="js-menu">
                <div className="left_section">
                    <ul>
                        <li className="menu--item">
                            <NavLink to="dashboard">
                                <div id="instructor_dashboard_page_lsb" className="menu--link" title="Dashboard">
                                    <i className="uil uil-apps menu--icon"></i>
                                    <span className="menu--label">Dashboard</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="courses">
                                <div id="instructor_courses_page_lsb" className="menu--link" title="Courses">
                                    <i className="uil uil-book-alt menu--icon"></i>
                                    <span className="menu--label">Courses</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="analyics">
                                <div id="instructor_analyics_page_lsb" className="menu--link" title="Analyics">
                                    <i className="uil uil-analysis menu--icon"></i>
                                    <span className="menu--label">Analyics</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="createCourse">
                                <div id="create_new_course_page_lsb" className="menu--link" title="Create Course">
                                    <i className="uil uil-plus-circle menu--icon"></i>
                                    <span className="menu--label">Create Course</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="messages">
                                <div id="instructor_messages_page_lsb" className="menu--link" title="Messages">
                                    <i className="uil uil-comments menu--icon"></i>
                                    <span className="menu--label">Messages</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="notifications">
                                <div id="instructor_notifications_page_lsb" className="menu--link" title="Notifications">
                                    <i className="uil uil-bell menu--icon"></i>
                                    <span className="menu--label">Notifications</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="certificates">
                                <div id="instructor_my_certificates_page_lsb" className="menu--link" title="My Certificates">
                                    <i className="uil uil-award menu--icon"></i>
                                    <span className="menu--label">My Certificates</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="reviews">
                                <div id="instructor_all_reviews_page_lsb" className="menu--link" title="Reviews">
                                    <i className="uil uil-star menu--icon"></i>
                                    <span className="menu--label">Reviews</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="earning">
                                <div id="instructor_earning_page_lsb" className="menu--link" title="Earning">
                                    <i className="uil uil-dollar-sign menu--icon"></i>
                                    <span className="menu--label">Earning</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="payout">
                                <div id="instructor_payout_page_lsb" className="menu--link" title="Payout">
                                    <i className="uil uil-wallet menu--icon"></i>
                                    <span className="menu--label">Payout</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="statement">
                                <div id="instructor_statements_page_lsb" className="menu--link" title="Statements">
                                    <i className="uil uil-file-alt menu--icon"></i>
                                    <span className="menu--label">Statements</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu--item">
                            <NavLink to="verification">
                                <div id="instructor_verification_page_lsb" className="menu--link" title="Verification">
                                    <i className="uil uil-check-circle menu--icon"></i>
                                    <span className="menu--label">Verification</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="left_section pt-2">
                    <ul>
                        <li className="menu--item">
                            <Link to="/settings">
                                <div id="setting_page_lsb" className="menu--link" title="Setting">
                                    <i className="uil uil-cog menu--icon"></i>
                                    <span className="menu--label">Setting</span>
                                </div>
                            </Link>
                        </li>
                        <li className="menu--item">
                            <Link to="/feedback">
                                <div id="feedback_page_lsb" className="menu--link" title="Send Feedback">
                                    <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                                    <span className="menu--label">Send Feedback</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default LeftsideBar;
