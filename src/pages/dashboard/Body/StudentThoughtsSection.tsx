import { StudentThought } from './components/StudentThought';

export const StudentThoughtsSection = () => {
    return (
        <div className="col-xl-12 col-lg-12">
            <div className="section3125 mt-30">
                <h4 className="item_title">What Our Student Have Today</h4>
                <div className="la5lo1">
                    <div className="owl-carousel Student_says owl-theme">
                        <StudentThought
                            name="Rock Smith"
                            thought="Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti."
                            avatar="images/left-imgs/img-4.jpg"
                        />
                        <StudentThought
                            name="Jassica William"
                            thought="Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."
                            avatar="images/left-imgs/img-1.jpg"
                        />
                        <StudentThought
                            name="Luoci Marchant"
                            thought="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci."
                            avatar="images/left-imgs/img-1.jpg"
                        />
                        <StudentThought
                            name="Poonam Sharma"
                            thought="Nulla bibendum lectus pharetra, tempus eros ac, sagittis orci. Suspendisse posuere dolor neque, at finibus mauris lobortis in. Pellentesque vitae laoreet tortor."
                            avatar="images/left-imgs/img-1.jpg"
                        />
                        <StudentThought
                            name="Davinder Singh"
                            thought="Curabitur placerat justo ac mauris condimentum ultricies. In magna tellus, eleifend et volutpat id, sagittis vitae est. Pellentesque vitae laoreet tortor."
                            avatar="images/left-imgs/img-1.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
