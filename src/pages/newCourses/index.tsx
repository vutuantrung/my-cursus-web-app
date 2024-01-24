import { useEffect } from 'react';
import Body from './Body';
import Header from './Header';
import LeftSideBar from './LeftSideBar';

import '../../assets/js/night-mode.js';

const CreateNewCoursePage = () => {
    useEffect(() => {
        ($('#add-course-tab') as any).steps({
            onFinish: function () {
                alert('Wizard Completed');
            },
        });
    }, []);
    return (
        <div>
            <Header />
            <LeftSideBar />
            <Body />
        </div>
    );
};

export default CreateNewCoursePage;
