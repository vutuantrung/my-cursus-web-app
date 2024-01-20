import { LiveStreamSection } from './LiveStreamSection'
import { FeatureCoursesSection } from './FeatureCoursesSection'
import { NewestCoursesSection } from './NewestCoursesSection'
import { GuildsSection } from './GuildsSection'
import { PopularInstructorsSection } from './PopularInstructorsSection'
import { RightSideBar } from './RightSideBar'
import { StudentThoughts } from './StudentThoughts'

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

                        <StudentThoughts />
                    </div>
                </div>
            </div>
        </div>
    )
}
