import { generateRandomNumber } from '../../../helpers/helpers';
import { StudentThought } from './components/StudentThought';

export const StudentThoughtsSection = () => {
    const dumpData = [
        {
            name: 'Rock Smith',
            thought:
                'Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
        },
        {
            name: 'Jassica William',
            thought:
                'Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
        },
        {
            name: 'Luoci Marchant',
            thought:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
        },
        {
            name: 'Poonam Sharma',
            thought:
                'Nulla bibendum lectus pharetra, tempus eros ac, sagittis orci. Suspendisse posuere dolor neque, at finibus mauris lobortis in. Pellentesque vitae laoreet tortor.',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
        },
        {
            name: 'Davinder Singh',
            thought:
                'Curabitur placerat justo ac mauris condimentum ultricies. In magna tellus, eleifend et volutpat id, sagittis vitae est. Pellentesque vitae laoreet tortor.',
            avatar: `./assets/images/test/avatar_instructor/${generateRandomNumber(1, 25)}.jpg`,
        },
    ];
    return (
        <div className="col-xl-12 col-lg-12">
            <div className="section3125 mt-30">
                <h4 className="item_title">What Our Student Have Today</h4>
                <div className="la5lo1">
                    <div className="owl-carousel Student_says owl-theme">
                        {dumpData.map((item) => (
                            <StudentThought {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
