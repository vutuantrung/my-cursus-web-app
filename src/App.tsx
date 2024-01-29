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

const App = () => {
    useEffect(() => {
        console.log('App useeffect');

        // ($('.ui.dropdown') as any).dropdown();

        // // === Model === //
        // ($('.ui.modal') as any).modal({ blurring: true }).modal('show');
        // // === Tab === //
        // ($('.menu .item') as any).tab();
        // // === checkbox Toggle === //
        // ($('.ui.checkbox') as any).checkbox();
        // // === Toggle === //
        // $('.enable.button').on('click', function () {
        //     ($(this).nextAll('.checkbox') as any).checkbox('enable');
        // });
    });
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="createNewCourse" element={<CreateNewCoursePage />} />
                <Route path="shoppingCart" element={<ShoppingCart />} />
                <Route path="instructorMessages" element={<InstructorMessage />} />
                <Route path="instructorNotifications" element={<InstructorNotifications />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
