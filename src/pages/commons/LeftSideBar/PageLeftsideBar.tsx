import { useEffect } from 'react';

const PageLeftsideBar = () => {
    useEffect(() => {
        const firstPath = window.location.pathname.split('/')[1];
        console.log(firstPath);
        if (firstPath.includes('instructorDashboard')) {
            document.getElementById('instructor_dashboard_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorCourses')) {
            document.getElementById('instructor_courses_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorAnalyics')) {
            document.getElementById('instructor_analyics_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('createNewCourse')) {
            document.getElementById('create_new_course_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorMessages')) {
            document.getElementById('instructor_messages_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorNotifications')) {
            document.getElementById('instructor_notifications_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorMyCertificates')) {
            document.getElementById('instructor_my_certificates_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorAllReviews')) {
            document.getElementById('instructor_all_reviews_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorEarning')) {
            document.getElementById('instructor_earning_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorPayout')) {
            document.getElementById('instructor_payout_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorStatements')) {
            document.getElementById('instructor_statements_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('instructorVerification')) {
            document.getElementById('instructor_verification_page_lsb')?.classList.add('active');
        }

        if (firstPath.includes('setting')) {
            document.getElementById('setting_page_lsb')?.classList.add('active');
        }
        if (firstPath.includes('feedback')) {
            document.getElementById('feedback_page_lsb')?.classList.add('active');
        }
    }, []);
    return (
        <nav className="vertical_nav">
            <div className="left_section menu_left" id="js-menu">
                <div className="left_section">
                    <ul>
                        <li className="menu--item">
                            <a
                                href="instructor_dashboard.html"
                                id="instructor_dashboard_page_lsb"
                                className="menu--link"
                                title="Dashboard"
                            >
                                <i className="uil uil-apps menu--icon"></i>
                                <span className="menu--label">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_courses.html"
                                id="instructor_courses_page_lsb"
                                className="menu--link"
                                title="Courses"
                            >
                                <i className="uil uil-book-alt menu--icon"></i>
                                <span className="menu--label">Courses</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_analyics.html"
                                id="instructor_analyics_page_lsb"
                                className="menu--link"
                                title="Analyics"
                            >
                                <i className="uil uil-analysis menu--icon"></i>
                                <span className="menu--label">Analyics</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="create_new_course.html"
                                id="create_new_course_page_lsb"
                                className="menu--link"
                                title="Create Course"
                            >
                                <i className="uil uil-plus-circle menu--icon"></i>
                                <span className="menu--label">Create Course</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_messages.html"
                                id="instructor_messages_page_lsb"
                                className="menu--link"
                                title="Messages"
                            >
                                <i className="uil uil-comments menu--icon"></i>
                                <span className="menu--label">Messages</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_notifications.html"
                                id="instructor_notifications_page_lsb"
                                className="menu--link"
                                title="Notifications"
                            >
                                <i className="uil uil-bell menu--icon"></i>
                                <span className="menu--label">Notifications</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_my_certificates.html"
                                id="instructor_my_certificates_page_lsb"
                                className="menu--link"
                                title="My Certificates"
                            >
                                <i className="uil uil-award menu--icon"></i>
                                <span className="menu--label">My Certificates</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_all_reviews.html"
                                id="instructor_all_reviews_page_lsb"
                                className="menu--link"
                                title="Reviews"
                            >
                                <i className="uil uil-star menu--icon"></i>
                                <span className="menu--label">Reviews</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_earning.html"
                                id="instructor_earning_page_lsb"
                                className="menu--link"
                                title="Earning"
                            >
                                <i className="uil uil-dollar-sign menu--icon"></i>
                                <span className="menu--label">Earning</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_payout.html"
                                id="instructor_payout_page_lsb"
                                className="menu--link"
                                title="Payout"
                            >
                                <i className="uil uil-wallet menu--icon"></i>
                                <span className="menu--label">Payout</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_statements.html"
                                id="instructor_statements_page_lsb"
                                className="menu--link"
                                title="Statements"
                            >
                                <i className="uil uil-file-alt menu--icon"></i>
                                <span className="menu--label">Statements</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a
                                href="instructor_verification.html"
                                id="instructor_verification_page_lsb"
                                className="menu--link"
                                title="Verification"
                            >
                                <i className="uil uil-check-circle menu--icon"></i>
                                <span className="menu--label">Verification</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="left_section pt-2">
                    <ul>
                        <li className="menu--item">
                            <a href="setting.html" id="setting_page_lsb" className="menu--link" title="Setting">
                                <i className="uil uil-cog menu--icon"></i>
                                <span className="menu--label">Setting</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="feedback.html" id="feedback_page_lsb" className="menu--link" title="Send Feedback">
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
export default PageLeftsideBar;
