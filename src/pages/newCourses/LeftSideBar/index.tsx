const LeftSideBar = () => {
    return (
        <nav className="vertical_nav">
            <div className="left_section menu_left" id="js-menu">
                <div className="left_section">
                    <ul>
                        <li className="menu--item">
                            <a href="instructor_dashboard.html" className="menu--link" title="Dashboard">
                                <i className="uil uil-apps menu--icon"></i>
                                <span className="menu--label">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_courses.html" className="menu--link" title="Courses">
                                <i className="uil uil-book-alt menu--icon"></i>
                                <span className="menu--label">Courses</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_analyics.html" className="menu--link" title="Analyics">
                                <i className="uil uil-analysis menu--icon"></i>
                                <span className="menu--label">Analyics</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="create_new_course.html" className="menu--link active" title="Create Course">
                                <i className="uil uil-plus-circle menu--icon"></i>
                                <span className="menu--label">Create Course</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_messages.html" className="menu--link" title="Messages">
                                <i className="uil uil-comments menu--icon"></i>
                                <span className="menu--label">Messages</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_notifications.html" className="menu--link" title="Notifications">
                                <i className="uil uil-bell menu--icon"></i>
                                <span className="menu--label">Notifications</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_my_certificates.html" className="menu--link" title="My Certificates">
                                <i className="uil uil-award menu--icon"></i>
                                <span className="menu--label">My Certificates</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_all_reviews.html" className="menu--link" title="Reviews">
                                <i className="uil uil-star menu--icon"></i>
                                <span className="menu--label">Reviews</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_earning.html" className="menu--link" title="Earning">
                                <i className="uil uil-dollar-sign menu--icon"></i>
                                <span className="menu--label">Earning</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_payout.html" className="menu--link" title="Payout">
                                <i className="uil uil-wallet menu--icon"></i>
                                <span className="menu--label">Payout</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_statements.html" className="menu--link" title="Statements">
                                <i className="uil uil-file-alt menu--icon"></i>
                                <span className="menu--label">Statements</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="instructor_verification.html" className="menu--link" title="Verification">
                                <i className="uil uil-check-circle menu--icon"></i>
                                <span className="menu--label">Verification</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="left_section pt-2">
                    <ul>
                        <li className="menu--item">
                            <a href="setting.html" className="menu--link" title="Setting">
                                <i className="uil uil-cog menu--icon"></i>
                                <span className="menu--label">Setting</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="feedback.html" className="menu--link" title="Send Feedback">
                                <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                                <span className="menu--label">Send Feedback</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default LeftSideBar;
