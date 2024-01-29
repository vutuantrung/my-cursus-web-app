import { useEffect } from 'react';
import AppHeader from '../commons/Header/AppHeader';
import PageLeftsideBar from '../commons/LeftSideBar/PageLeftsideBar';
import Body from './Body';

const InstructorDashboard = () => {
    useEffect(() => {
        const navText = ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"];
        const carouselOptions = {
            loop: true,
            nav: true,
            dots: false,
            navText: navText,
        };

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

        // Featured Courses home
        ($('.courses_performance') as any).owlCarousel({
            ...carouselOptions,
            items: 10,
            margin: 30,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 },
                1200: { items: 1 },
                1400: { items: 1 },
            },
        });
        // Latest News Dashboard
        ($('.edututs_news') as any).owlCarousel({
            ...carouselOptions,
            items: 10,
            margin: 30,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 },
                1200: { items: 1 },
                1400: { items: 1 },
            },
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

export default InstructorDashboard;
