import { Route, Routes } from 'react-router-dom';
import LeftsideBar from './LeftsideBar';
import AppHeader from '../commons/Header/AppHeader';

import InstructorDashboard from './dashboard/InstructorDashboard';
import InstructorCourses from './courses/InstructorCourses';
import InstructorCreateCourse from './createCourse/InstructorCreateCourse';
import InstructorMessages from './messages/InstructorMessages';
import InstructorNotifications from './notifications/InstructorNotifications';
import InstructorCertificates from './certificates/InstructorCertificates';
import InstructorReviews from './reviews/InstructorReviews';
import InstructorEarning from './earning/InstructorEarning';
import InstructorPayout from './payout/InstructorPayout';
import InstructorStatement from './statement/InstructorStatement';
import InstructorVerification from './verification/InstructorVerification';
import InstructorAnalyics from './analyics/InstructorAnalyics';

const Instructor = () => {
    return (
        <>
            <AppHeader />
            <LeftsideBar />
            <div className="wrapper page-footer-padding">
                <Routes>
                    <Route path="dashboard" Component={InstructorDashboard} />
                    <Route path="courses" Component={InstructorCourses} />
                    <Route path="analyics" Component={InstructorAnalyics} />
                    <Route path="createCourse" Component={InstructorCreateCourse} />
                    <Route path="messages" Component={InstructorMessages} />
                    <Route path="notifications" Component={InstructorNotifications} />
                    <Route path="certificates" Component={InstructorCertificates} />
                    <Route path="reviews" Component={InstructorReviews} />
                    <Route path="earning" Component={InstructorEarning} />
                    <Route path="payout" Component={InstructorPayout} />
                    <Route path="statement" Component={InstructorStatement} />
                    <Route path="verification" Component={InstructorVerification} />
                </Routes>
            </div>
        </>
    );
};

export default Instructor;
