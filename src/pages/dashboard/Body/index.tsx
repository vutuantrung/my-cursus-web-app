import { LiveStreamSection } from './LiveStreamSection';
import { FeatureCoursesSection } from './FeatureCoursesSection';
import { NewestCoursesSection } from './NewestCoursesSection';
import { GuildsSection } from './GuildsSection';
import { PopularInstructorsSection } from './PopularInstructorsSection';
import { RightSideBar } from './RightSideBar';
import { StudentThoughtsSection } from './StudentThoughtsSection';
import AppFooter from '../../commons/Footer/AppFooter';

export const Body = () => {
    return (
        <div className="wrapper">
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
        </div>
    );
};
