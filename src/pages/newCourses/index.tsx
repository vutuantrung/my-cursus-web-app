import { useEffect } from 'react';
import Body from './Body';
import Header from '../commons/Header/Header';
import LeftSideBar from '../commons/LeftSideBar/LeftSideBar';

const CreateNewCoursePage = () => {
    useEffect(() => {
        ($('.ui.dropdown') as any).dropdown();

        ($('#add-course-tab') as any).steps({
            onFinish: function () {
                alert('Wizard Completed');
            },
        });
    }, []);
    return (
        <>
            <Header />
            <LeftSideBar />
            <Body />
        </>
    );
};

export default CreateNewCoursePage;
