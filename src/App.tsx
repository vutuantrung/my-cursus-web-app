import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import CreateNewCoursePage from './pages/newCourses';

const App = () => {
    // return <CreateNewCoursePage />;
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="createNewCours" element={<CreateNewCoursePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
