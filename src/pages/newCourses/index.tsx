import { useEffect } from 'react';
import Body from './Body';
import AppHeader from '../commons/Header/AppHeader';
import PageLeftsideBar from '../commons/LeftSideBar/PageLeftsideBar';

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
            <AppHeader />
            <PageLeftsideBar />
            <Body />
        </>
    );
};

export default CreateNewCoursePage;
