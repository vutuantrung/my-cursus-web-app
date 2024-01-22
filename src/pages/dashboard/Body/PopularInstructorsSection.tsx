import { Instructor } from './components/Instructor';
import { IMAGES } from '../../../constants';

export const PopularInstructorsSection = () => {
    return (
        <div className="section3125 mt-50">
            <h4 className="item_title">Popular Instructors</h4>
            <a href="all_instructor.html" className="see150">
                See all
            </a>
            <div className="la5lo1">
                <div className="owl-carousel top_instrutors owl-theme">
                    <Instructor
                        name="John Doe"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Wordpress & Plugin Tutor"
                        studentNumber="100K"
                        coursNumber="15"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Kerstin Cable"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Language Learning Coach, Writer, Online Tutor"
                        studentNumber="14K"
                        coursNumber="11"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Jose Portilla"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Head of Data Science, Pierian Data Inc."
                        studentNumber="1M"
                        coursNumber="25"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Farhat Amin"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Cookery Coach"
                        studentNumber="1.5K"
                        coursNumber="9"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Kyle Pew"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Microsoft Certified Trainer - 380,000+ Udemy Students"
                        studentNumber="300K"
                        coursNumber="18"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Jaysen Batchelor"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Illustrator & Designer"
                        studentNumber="491K"
                        coursNumber="13"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Quinton Batchelor"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Photographer & Instructor"
                        studentNumber="364K"
                        coursNumber="6"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                    <Instructor
                        name="Eli Natoli"
                        avatar={IMAGES.avatar_instructor_1}
                        className="Entrepreneur - Passionate Teacher"
                        studentNumber="615K"
                        coursNumber="16"
                        socialLinks={{
                            facebookUrl: '#',
                            twitterUrl: '#',
                            linkedinUrl: '#',
                            youtubeUrl: '#',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
