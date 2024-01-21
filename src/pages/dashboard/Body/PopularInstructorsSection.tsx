import { Instructor } from './components/Instructor'

export const PopularInstructorsSection = () => {
    return (
        <div className="section3125 mt-50">
            <h4 className="item_title">Popular Instructors</h4>
            <a href="all_instructor.html" className="see150">
                See all
            </a>
            <div className="la5lo1">
                <div className="top_instrutors owl-theme">
                    <Instructor
                        name="John Doe"
                        avatar="images/left-imgs/img-1.jpg"
                        className="Wordpress & Plugin Tutor"
                        studentNumber="100K"
                        coursNumber="15"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Kerstin Cable"
                        avatar="images/left-imgs/img-2.jpg"
                        className="Language Learning Coach, Writer, Online Tutor"
                        studentNumber="14K"
                        coursNumber="11"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Jose Portilla"
                        avatar="images/left-imgs/img-3.jpg"
                        className="Head of Data Science, Pierian Data Inc."
                        studentNumber="1M"
                        coursNumber="25"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Farhat Amin"
                        avatar="images/left-imgs/img-5.jpg"
                        className="Cookery Coach"
                        studentNumber="1.5K"
                        coursNumber="9"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Kyle Pew"
                        avatar="images/left-imgs/img-4.jpg"
                        className="Microsoft Certified Trainer - 380,000+ Udemy Students"
                        studentNumber="300K"
                        coursNumber="18"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Jaysen Batchelor"
                        avatar="images/left-imgs/img-7.jpg"
                        className="Illustrator & Designer"
                        studentNumber="491K"
                        coursNumber="13"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Quinton Batchelor"
                        avatar="images/left-imgs/img-7.jpg"
                        className="Photographer & Instructor"
                        studentNumber="364K"
                        coursNumber="6"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                    <Instructor
                        name="Eli Natoli"
                        avatar="images/left-imgs/img-6.jpg"
                        className="Entrepreneur - Passionate Teacher"
                        studentNumber="615K"
                        coursNumber="16"
                        socialLinks={{
                            facebookUrl: '',
                            twitterUrl: '',
                            linkedinUrl: '',
                            youtubeUrl: '',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
