import { useEffect } from 'react';
import AppHeader from '../commons/Header/AppHeader';
import PageLeftsideBar from '../commons/LeftSideBar/PageLeftsideBar';
import Body from './Body';

const InstructorNotifications = () => {
    useEffect(() => {
        ($('.ui.dropdown') as any).dropdown();

        // === Model === //
        ($('.ui.modal') as any).modal({ blurring: true }).modal('show');
        // === Tab === //
        ($('.menu .item') as any).tab();
        // === checkbox Toggle === //
        ($('.ui.checkbox') as any).checkbox();
        // === Toggle === //
        $('.enable.button').on('click', function () {
            ($(this).nextAll('.checkbox') as any).checkbox('enable');
        });
    });
    return (
        <>
            <AppHeader />
            <PageLeftsideBar />
            <Body />
        </>
    );
};

export default InstructorNotifications;
