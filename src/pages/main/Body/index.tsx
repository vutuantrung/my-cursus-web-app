import { LiveStreamSection } from './LiveStreamSection';
import { FeatureCoursesSection } from './FeatureCoursesSection';
import { NewestCoursesSection } from './NewestCoursesSection';
import { GuildsSection } from './GuildsSection';
import { PopularInstructorsSection } from './PopularInstructorsSection';
import { RightSideBar } from './RightSideBar';
import { StudentThoughtsSection } from './StudentThoughtsSection';
import { useEffect } from 'react';
import AppFooter from '../../commons/Footer/AppFooter';

export const Body = () => {
    useEffect(() => {
        const carouselOptions = {
            loop: true,
            nav: true,
            dots: false,
            navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
        };
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
    }, []);
    return (
        <>
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <LiveStreamSection />
                            <FeatureCoursesSection />
                            <NewestCoursesSection />
                            <GuildsSection />
                            <PopularInstructorsSection />
                        </div>

                        <RightSideBar />

                        <StudentThoughtsSection />
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    );
};
