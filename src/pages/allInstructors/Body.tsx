import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants';

const Body = () => {
    const dumpData = [
        {
            id: 12351,
            name: 'John Doe',
            category: 'Wordpress & Plugin Tutor',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#', yt: '#' },
            studentNumber: '100K',
            coursNumber: 15,
        },
        {
            id: 7658,
            name: 'Kerstin Cable',
            category: 'Language Learning Coach, Writer, Online Tutor',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#', yt: '#' },
            studentNumber: '14K',
            coursNumber: 12,
        },
        {
            id: 5767,
            name: 'Jose Portilla',
            category: 'Head of Data Science, Pierian Data Inc.',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#', yt: '#' },
            studentNumber: '1M',
            coursNumber: 51,
        },
        {
            id: 2222,
            name: 'Kyle Pew',
            category: 'Microsoft Certified Trainer - 380,000+ Udemy Students',
            avatar: '',
            socialUrls: { fb: '#', tw: '#' },
            studentNumber: '1M',
            coursNumber: 42,
        },
        {
            id: 1269,
            name: 'Jaysen Batchelor',
            category: 'Illustrator & Designer',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#', yt: '#' },
            studentNumber: '305K',
            coursNumber: 25,
        },
        {
            id: 987,
            name: 'Quinton Batchelor',
            category: 'Photographer & Instructor',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#', yt: '#' },
            studentNumber: '419K',
            coursNumber: 12,
        },
        {
            id: 131,
            name: 'Eli Natoli',
            category: 'Entrepreneur - Passionate Teacher',
            avatar: '',
            socialUrls: { tw: '#', lk: '#', yt: '#' },
            studentNumber: '123K',
            coursNumber: 13,
        },
        {
            id: 2356,
            name: 'Sunny William',
            category: 'Entrepreneur - Passionate Teacher',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#', yt: '#' },
            studentNumber: '2K',
            coursNumber: 8,
        },
        {
            id: 3267,
            name: 'Neha Smith',
            category: 'English Teacher',
            avatar: '',
            socialUrls: { fb: '#', lk: '#', yt: '#' },
            studentNumber: '953K',
            coursNumber: 35,
        },
        {
            id: 236,
            name: 'Sukhwinder Singh',
            category: 'Web Development',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', yt: '#' },
            studentNumber: '12K',
            coursNumber: 21,
        },
        {
            id: 363,
            name: 'Saloni Prabhakar',
            category: 'Photographer',
            avatar: '',
            socialUrls: { fb: '#', tw: '#', lk: '#' },
            studentNumber: '1K',
            coursNumber: 7,
        },
    ];
    return (
        <div className="wrapper">
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-8">
                            <div className="section3125">
                                <div className="explore_search">
                                    <div className="ui search focus">
                                        <div className="ui left icon input swdh11">
                                            <input className="prompt srch_explore" type="text" placeholder="Search Tutors..." />
                                            <i className="uil uil-search-alt icon icon2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="_14d25">
                                <div className="row">
                                    {dumpData.map((item) => {
                                        return (
                                            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                                                <div className="fcrse_1 mt-30">
                                                    <div className="tutor_img">
                                                        <Link to={`/instructorProfile/${item.id}`}>
                                                            <img src={IMAGES.avatar} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="tutor_content_dt">
                                                        <div className="tutor150">
                                                            <Link to={`/instructorProfile/${item.id}`}>
                                                                <div className="tutor_name">{item.name}</div>
                                                            </Link>
                                                            <div className="mef78" title="Verify">
                                                                <i className="uil uil-check-circle"></i>
                                                            </div>
                                                        </div>
                                                        <div className="tutor_cate">{item.category}</div>
                                                        <ul className="tutor_social_links">
                                                            {item.socialUrls.fb && (
                                                                <li>
                                                                    <a href={item.socialUrls.fb} className="fb">
                                                                        <i className="fab fa-facebook-f"></i>
                                                                    </a>
                                                                </li>
                                                            )}
                                                            {item.socialUrls.tw && (
                                                                <li>
                                                                    <a href={item.socialUrls.tw} className="tw">
                                                                        <i className="fab fa-twitter"></i>
                                                                    </a>
                                                                </li>
                                                            )}
                                                            {item.socialUrls.lk && (
                                                                <li>
                                                                    <a href={item.socialUrls.lk} className="ln">
                                                                        <i className="fab fa-linkedin-in"></i>
                                                                    </a>
                                                                </li>
                                                            )}
                                                            {item.socialUrls.yt && (
                                                                <li>
                                                                    <a href={item.socialUrls.yt} className="yu">
                                                                        <i className="fab fa-youtube"></i>
                                                                    </a>
                                                                </li>
                                                            )}
                                                        </ul>
                                                        <div className="tut1250">
                                                            <span className="vdt15">{item.studentNumber} Students</span>
                                                            <span className="vdt15">{item.coursNumber} Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <div className="col-md-12">
                                        <div className="main-loader mt-50">
                                            <div className="spinner">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="about_us.html">About</a>
                                <a href="our_blog.html">Blog</a>
                                <a href="career.html">Careers</a>
                                <a href="press.html">Press</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="help.html">Help</a>
                                <a href="coming_soon.html">Advertise</a>
                                <a href="coming_soon.html">Developers</a>
                                <a href="contact_us.html">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="terms_of_use.html">Copyright Policy</a>
                                <a href="terms_of_use.html">Terms</a>
                                <a href="terms_of_use.html">Privacy Policy</a>
                                <a href="sitemap.html">Sitemap</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f3">
                                <a href="#" className="btn1542">
                                    Teach on Cursus
                                </a>
                                <div className="lng_btn">
                                    <div
                                        className="ui language bottom right pointing dropdown floating"
                                        id="languages"
                                        data-content="Select Language"
                                    >
                                        <a href="#">
                                            <i className="uil uil-globe lft"></i>Language
                                            <i className="uil uil-angle-down rgt"></i>
                                        </a>
                                        <div className="menu">
                                            <div className="scrolling menu">
                                                <div className="item" data-percent="100" data-value="en" data-english="English">
                                                    <span className="description">English</span>
                                                    English
                                                </div>
                                                <div className="item" data-percent="94" data-value="da" data-english="Danish">
                                                    <span className="description">dansk</span>
                                                    Danish
                                                </div>
                                                <div className="item" data-percent="94" data-value="es" data-english="Spanish">
                                                    <span className="description">Español</span>
                                                    Spanish
                                                </div>
                                                <div className="item" data-percent="34" data-value="zh" data-english="Chinese">
                                                    <span className="description">简体中文</span>
                                                    Chinese
                                                </div>
                                                <div
                                                    className="item"
                                                    data-percent="54"
                                                    data-value="zh_TW"
                                                    data-english="Chinese (Taiwan)"
                                                >
                                                    <span className="description">中文 (臺灣)</span>
                                                    Chinese (Taiwan)
                                                </div>
                                                <div className="item" data-percent="79" data-value="fa" data-english="Persian">
                                                    <span className="description">پارسی</span>
                                                    Persian
                                                </div>
                                                <div className="item" data-percent="41" data-value="fr" data-english="French">
                                                    <span className="description">Français</span>
                                                    French
                                                </div>
                                                <div className="item" data-percent="37" data-value="el" data-english="Greek">
                                                    <span className="description">ελληνικά</span>
                                                    Greek
                                                </div>
                                                <div className="item" data-percent="37" data-value="ru" data-english="Russian">
                                                    <span className="description">Русский</span>
                                                    Russian
                                                </div>
                                                <div className="item" data-percent="36" data-value="de" data-english="German">
                                                    <span className="description">Deutsch</span>
                                                    German
                                                </div>
                                                <div className="item" data-percent="23" data-value="it" data-english="Italian">
                                                    <span className="description">Italiano</span>
                                                    Italian
                                                </div>
                                                <div className="item" data-percent="21" data-value="nl" data-english="Dutch">
                                                    <span className="description">Nederlands</span>
                                                    Dutch
                                                </div>
                                                <div
                                                    className="item"
                                                    data-percent="19"
                                                    data-value="pt_BR"
                                                    data-english="Portuguese"
                                                >
                                                    <span className="description">Português(BR)</span>
                                                    Portuguese
                                                </div>
                                                <div className="item" data-percent="17" data-value="id" data-english="Indonesian">
                                                    <span className="description">Indonesian</span>
                                                    Indonesian
                                                </div>
                                                <div className="item" data-percent="12" data-value="lt" data-english="Lithuanian">
                                                    <span className="description">Lietuvių</span>
                                                    Lithuanian
                                                </div>
                                                <div className="item" data-percent="11" data-value="tr" data-english="Turkish">
                                                    <span className="description">Türkçe</span>
                                                    Turkish
                                                </div>
                                                <div className="item" data-percent="10" data-value="kr" data-english="Korean">
                                                    <span className="description">한국어</span>
                                                    Korean
                                                </div>
                                                <div className="item" data-percent="7" data-value="ar" data-english="Arabic">
                                                    <span className="description">العربية</span>
                                                    Arabic
                                                </div>
                                                <div className="item" data-percent="6" data-value="hu" data-english="Hungarian">
                                                    <span className="description">Magyar</span>
                                                    Hungarian
                                                </div>
                                                <div className="item" data-percent="6" data-value="vi" data-english="Vietnamese">
                                                    <span className="description">tiếng Việt</span>
                                                    Vietnamese
                                                </div>
                                                <div className="item" data-percent="5" data-value="sv" data-english="Swedish">
                                                    <span className="description">svenska</span>
                                                    Swedish
                                                </div>
                                                <div className="item" data-precent="4" data-value="pl" data-english="Polish">
                                                    <span className="description">polski</span>
                                                    Polish
                                                </div>
                                                <div className="item" data-percent="6" data-value="ja" data-english="Japanese">
                                                    <span className="description">日本語</span>
                                                    Japanese
                                                </div>
                                                <div className="item" data-percent="0" data-value="ro" data-english="Romanian">
                                                    <span className="description">românește</span>
                                                    Romanian
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="footer_bottm">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="fotb_left">
                                            <li>
                                                <a href="index.html">
                                                    <div className="footer_logo">
                                                        <img src="images/logo1.svg" alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <p>
                                                    © 2020 <strong>Cursus</strong>. All Rights Reserved.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="edu_social_links">
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Body;
