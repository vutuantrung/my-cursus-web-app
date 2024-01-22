import { CoursItem } from './components/CoursItem';
import { IMAGES } from '../../../constants';

export const FeatureCoursesSection = () => {
    return (
        <div className="section3125 mt-50">
            <h4 className="item_title">Featured Courses</h4>
            <a href="all_featured_courses" className="see150">
                See all
            </a>
            <div className="la5lo1">
                <div className="owl-carousel featured_courses owl-theme">
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="Complete Python Bootcamp: Go from zero to hero in Python 3"
                        coursTag="Web Development | Python"
                        coursAuthor="John Doe"
                        coursPrice="$10"
                        coursPoint={4.5}
                        coursLength="25 hours"
                        coursViews="5M"
                        coursCreatedDate="15 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="The Complete JavaScript Course 2020: Build Real Projects!"
                        coursTag="Development | JavaScript"
                        coursAuthor="Jassica William"
                        coursPrice="$5"
                        coursPoint={4.5}
                        coursLength="28 hours"
                        coursViews="109k"
                        coursCreatedDate="15 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="Beginning C++ Programming - From Beginner to Beyond"
                        coursTag="Development | C++"
                        coursAuthor="Joginder Singh"
                        coursPrice="$13"
                        coursPoint={4.5}
                        coursLength="12 hours"
                        coursViews="1M"
                        coursCreatedDate="18 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="The Complete Digital Marketing Course - 12 Courses in 1"
                        coursTag="Digital Marketing | Marketing"
                        coursAuthor="Poonam Verma"
                        coursPrice="$12"
                        coursPoint={5}
                        coursLength="16 hours"
                        coursViews="153k"
                        coursCreatedDate="18 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="Microsoft Excel - Excel from Beginner to Advanced"
                        coursTag="Office Productivity | Excel"
                        coursAuthor="Rock William"
                        coursPrice="$6"
                        coursPoint={4.5}
                        coursLength="1.5 hours"
                        coursViews="53k"
                        coursCreatedDate="14 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="Angular 8 - The Complete Guide (2020 Edition)"
                        coursTag="Development | Angular"
                        coursAuthor="John Doe"
                        coursPrice="$6"
                        coursPoint={5}
                        coursLength="15 hours"
                        coursViews="253k"
                        coursCreatedDate="10 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="WordPress for Beginners: Create a Website Step by Step"
                        coursTag="Design | Wordpress"
                        coursAuthor="Sabnam SIngh"
                        coursPrice="$18"
                        coursPoint={5}
                        coursLength="5.4 hours"
                        coursViews="109k"
                        coursCreatedDate="15 days"
                    />
                    <CoursItem
                        isFeaturedCours
                        coursTheme={IMAGES.img_cours_sample_1}
                        coursName="CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)"
                        coursTag="Design | CSS"
                        coursAuthor="Jashanpreet Singh"
                        coursPrice="$10"
                        coursPoint={4}
                        coursLength="23 hours"
                        coursViews="196k"
                        coursCreatedDate="1 month"
                    />
                </div>
            </div>
        </div>
    );
};
