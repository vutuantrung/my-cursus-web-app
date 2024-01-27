import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/vendor/unicons-2.0.1/css/unicons.css';
import './assets/styles/css/style.css';
import './assets/styles/css/vertical-responsive-menu.min.css';

import Dashboard from './pages/dashboard';
import CreateNewCoursePage from './pages/newCourses';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import InstructorMessage from './pages/instructorMessage';

const App = () => {
    // return <CreateNewCoursePage />;
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="createNewCourse" element={<CreateNewCoursePage />} />
                <Route path="shoppingCart" element={<ShoppingCart />} />
                <Route path="instructorMessages" element={<InstructorMessage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
