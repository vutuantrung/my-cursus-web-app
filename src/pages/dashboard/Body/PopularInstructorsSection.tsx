import { Instructor } from './components/Instructor';
import { generateRandomNumber } from '../../../helpers/helpers';

export const PopularInstructorsSection = () => {
    const dumpData = [
        {
            name: 'John Doe',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Wordpress & Plugin Tutor',
            studentNumber: '100K',
            coursNumber: '15',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Kerstin Cable',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Language Learning Coach, Writer, Online Tutor',
            studentNumber: '14K',
            coursNumber: '11',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Jose Portilla',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Head of Data Science, Pierian Data Inc.',
            studentNumber: '1M',
            coursNumber: '25',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Farhat Amin',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Cookery Coach',
            studentNumber: '1.5K',
            coursNumber: '9',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Kyle Pew',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            studentNumber: '300K',
            coursNumber: '18',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Jaysen Batchelor',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Illustrator & Designer',
            studentNumber: '491K',
            coursNumber: '13',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Quinton Batchelor',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Photographer & Instructor',
            studentNumber: '364K',
            coursNumber: '6',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
        {
            name: 'Eli Natoli',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
            className: 'Entrepreneur - Passionate Teacher',
            studentNumber: '615K',
            coursNumber: '16',
            socialLinks: {
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
                youtubeUrl: '#',
            },
        },
    ];
    return (
        <div className="section3125 mt-50">
            <h4 className="item_title">Popular Instructors</h4>
            <a href="all_instructor.html" className="see150">
                See all
            </a>
            <div className="la5lo1">
                <div className="owl-carousel top_instrutors owl-theme">
                    {dumpData.map((instructor) => {
                        return <Instructor {...instructor} />;
                    })}
                </div>
            </div>
        </div>
    );
};
