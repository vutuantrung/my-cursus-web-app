import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/styles/css/vertical-responsive-menu.min.css';
import './assets/styles/css/style.css';
import './assets/styles/css/jquery-steps.css';
import './assets/styles/css/responsive.css';
import './assets/styles/css/night-mode.css';
import './assets/styles/css/vertical-responsive-menu1.min.css';
import './assets/styles/css/instructor-dashboard.css';
import './assets/styles/css/instructor-responsive.css';

import 'semantic-ui-css/semantic.min.css';

import Dashboard from './pages/dashboard';
import CreateNewCoursePage from './pages/newCourses';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import InstructorMessage from './pages/instructorMessage';
import InstructorNotifications from './pages/notifications';

import { useEffect } from 'react';
import InstructorDashboard from './pages/instructorDashboard';
import InstructorCourses from './pages/instructorCourses';
import InstructorAnalyics from './pages/instructorAnalyics';
import InstructorCertificate from './pages/instructorCertificate';
import InstructorReviews from './pages/instructorReviews';
import InstructorEarning from './pages/instructorEarning';
import InstructorPayout from './pages/instructorPayout';
import InstructorStatements from './pages/instructorStatements';
import InstructorVerification from './pages/instructorVerification';
import Settings from './pages/settings';
import Feedback from './pages/feedback';

const App = () => {
    useEffect(() => {
        console.log('App useeffect');
    });
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="createNewCourse" element={<CreateNewCoursePage />} />
                <Route path="shoppingCart" element={<ShoppingCart />} />
                <Route path="instructorAnalyics" element={<InstructorAnalyics />} />
                <Route path="instructorMessages" element={<InstructorMessage />} />
                <Route path="instructorDashboard" element={<InstructorDashboard />} />
                <Route path="instructorCourses" element={<InstructorCourses />} />
                <Route path="instructorReviews" element={<InstructorReviews />} />
                <Route path="instructorEarning" element={<InstructorEarning />} />
                <Route path="instructorPayout" element={<InstructorPayout />} />
                <Route path="instructorVerification" element={<InstructorVerification />} />
                <Route path="instructorStatements" element={<InstructorStatements />} />
                <Route path="instructorCertificates" element={<InstructorCertificate />} />
                <Route path="instructorNotifications" element={<InstructorNotifications />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
