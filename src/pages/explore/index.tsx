import { useEffect } from 'react';
import AppHeader from '../commons/Header/AppHeader';
import AppLeftsideBar from '../commons/LeftSideBar/AppLeftsideBar';
import Body from './Body';

const Explore = () => {
    useEffect(() => {
        const navText = ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"];
        const carouselOptions = {
            loop: true,
            nav: true,
            dots: false,
            navText: navText,
        };

        ($('.ui .dropdown') as any).dropdown();
        // === Model === //
        ($('.ui .modal') as any).modal({ blurring: true }).modal('show');
        // === Tab === //
        ($('.menu .item') as any).tab();
        // === checkbox Toggle === //
        ($('.ui .checkbox') as any).checkbox();
        // === Toggle === //
        $('.enable .button').on('click', function () {
            ($(this).nextAll('.checkbox') as any).checkbox('enable');
        });

        // Home Live Stream
        ($('.live_stream') as any).owlCarousel({
            ...carouselOptions,
            items: 10,
            margin: 10,
            responsive: {
                0: { items: 2 },
                600: { items: 3 },
                1000: { items: 3 },
                1200: { items: 5 },
                1400: { items: 6 },
            },
        });
        // Featured Courses home
        ($('.featured_courses') as any).owlCarousel({
            ...carouselOptions,
            items: 10,
            margin: 20,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 1 },
                1200: { items: 2 },
                1400: { items: 3 },
            },
        });
        // Featured Courses home
        ($('.top_instrutors') as any).owlCarousel({
            ...carouselOptions,
            items: 10,
            margin: 20,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 1 },
                1200: { items: 2 },
                1400: { items: 3 },
            },
        });
        // Student Says
        ($('.Student_says') as any).owlCarousel({
            ...carouselOptions,
            items: 10,
            margin: 30,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 2 },
                1200: { items: 3 },
                1400: { items: 3 },
            },
        });
        // features Careers
        ($('.feature_careers') as any).owlCarousel({
            ...carouselOptions,
            items: 4,
            margin: 20,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 },
                1200: { items: 1 },
                1400: { items: 1 },
            },
        });
        /*Floating Code for Iframe Start*/
        if (
            $(
                'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]'
            ).length > 0
        ) {
            /*Wrap (all code inside div) all vedio code inside div*/
            $('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap(
                "<div class='iframe-parent-class'></div>"
            );
            /*main code of each (particular) vedio*/
            $('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function (index) {
                /*Floating js Start*/
                const windows = $(window);
                const iframeWrap = $(this).parent();
                const iframe = $(this);
                const iframeHeight = iframe.outerHeight();
                windows.on('scroll', function () {
                    const windowScrollTop = windows.scrollTop();
                    const iframeBottom = iframeHeight! + iframeWrap.offset()!.top;

                    if (windowScrollTop! > iframeBottom) {
                        iframeWrap.height(iframeHeight!);
                        iframe.addClass('stuck');
                        $('.scrolldown').css({ display: 'none' });
                    } else {
                        iframeWrap.height('auto');
                        iframe.removeClass('stuck');
                    }
                });
                /*Floating js End*/
            });
        }
    }, []);

    return (
        <>
            <AppHeader />
            <AppLeftsideBar />
            <Body />
        </>
    );
};

export default Explore;
