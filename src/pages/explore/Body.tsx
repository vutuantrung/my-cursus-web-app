import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants';

const Body = () => {
    const streamDumpData = [
        { name: 'John Doe', id: 23456, avatar: '', isLive: true },
        { name: 'Jassica', id: 3424, avatar: '', isLive: true },
        { name: 'Edututs+', id: 5742, avatar: '', isLive: true },
        { name: 'Joginder Singh', id: 12453, avatar: '', isLive: true },
        { name: 'Zoena', id: 3645, avatar: '', isLive: true },
        { name: 'Albert Dua', id: 1235, avatar: '', isLive: true },
        { name: 'Ridhima', id: 3463, avatar: '', isLive: true },
        { name: 'Amritpal', id: 63756, avatar: '', isLive: true },
        { name: 'Jimmy', id: 24572, avatar: '', isLive: true },
        { name: 'Quinton Batchelor', id: 4234, avatar: '', isLive: true },
        { name: 'Eli Natoli', id: 32452, avatar: '', isLive: true },
        { name: 'Jaysen Batchelor', id: 7456, avatar: '', isLive: true },
        { name: 'Farhat Amin', id: 432, avatar: '', isLive: true },
        { name: 'Kyle Pew', id: 23567, avatar: '', isLive: true },
        { name: 'Kerstin Cable', id: 7357, avatar: '', isLive: true },
        { name: 'Jose Portilla', id: 235, avatar: '', isLive: true },
    ];

    const courseDumpData = [
        {
            id: 123412,
            name: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
            category: 'Web Development | Python',
            price: '$10',
            thumbs: '',
            isBestSeller: true,
            points: '4.5',
            length: '25 hours',
            views: '109k',
            publishedDate: '15 days',
            author: 'John Doe',
        },
        {
            id: 2345,
            name: 'The Complete JavaScript Course 2020: Build Real Projects!',
            category: 'Development | JavaScript',
            price: '$5',
            thumbs: '',
            isBestSeller: true,
            points: '4.5',
            length: '28 hours',
            views: '5M',
            publishedDate: '15 days',
            author: 'John Doe',
        },
        {
            id: 6452,
            name: 'WordPress Development - Themes, Plugins & Gutenberg',
            category: 'Design | Wordpress',
            price: '$14',
            thumbs: '',
            isBestSeller: false,
            points: '5.0',
            length: '21 hours',
            views: '200',
            publishedDate: '4 days',
            author: 'John Doe',
        },
        {
            id: 125,
            name: 'The Complete Digital Marketing Course - 12 Courses in 1',
            category: 'Digital Marketing | Marketing',
            price: '$12',
            thumbs: '',
            isBestSeller: true,
            points: '5.0',
            length: '1 hour',
            views: '153K',
            publishedDate: '3 months',
            author: 'John Doe',
        },
        {
            id: 351,
            name: 'The Complete Node.js Developer Course (3rd Edition)',
            category: 'Development | Node.js',
            price: '$3',
            thumbs: '',
            isBestSeller: false,
            points: '',
            length: '30 hours',
            views: '20',
            publishedDate: '1 day',
            author: 'John Doe',
        },
        {
            id: 6234,
            name: 'WordPress for Beginners: Create a Website Step by Step',
            category: 'Design | Wordpress',
            price: '$18',
            thumbs: '',
            isBestSeller: true,
            points: '5.0',
            length: '5.4 hours',
            views: '109k',
            publishedDate: '15 days',
            author: 'John Doe',
        },
        {
            id: 62342,
            name: 'CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)',
            category: 'Design | CSS',
            price: '$10',
            thumbs: '',
            isBestSeller: true,
            points: '4.0',
            length: '23 hours',
            views: '196K',
            publishedDate: '1 month',
            author: 'John Doe',
        },
        {
            id: 6346,
            name: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)',
            category: 'Development | Vue JS',
            price: '$10',
            thumbs: '',
            isBestSeller: false,
            points: '',
            length: '22 hours',
            views: '11',
            publishedDate: '5 days',
            author: 'John Doe',
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
                                            <input
                                                className="prompt srch_explore"
                                                type="text"
                                                placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                                            />
                                            <i className="uil uil-search-alt icon icon2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="section3125 mb-15 mt-50">
                                <h4 className="item_title">Live Streams</h4>
                                <a href="live_streams.html" className="see150">
                                    See all
                                </a>
                                <div className="la5lo1">
                                    <div className="owl-carousel live_stream owl-theme">
                                        {streamDumpData.map((item) => {
                                            return (
                                                <div key={item.id} className="item">
                                                    <div className="stream_1">
                                                        <Link to={`/liveStreams/output/${item.id}`}>
                                                            <div className="stream_bg">
                                                                <img src={IMAGES.avatar_instructor_1} alt="" />
                                                                <h4>{item.name}</h4>
                                                                {item.isLive && (
                                                                    <p>
                                                                        live<span></span>
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="_14d25">
                                <div className="row">
                                    {courseDumpData.map((item) => {
                                        return (
                                            <div key={item.id} className="col-lg-3 col-md-4">
                                                <div className="fcrse_1 mt-30">
                                                    <Link to={`/coursDetails/${item.id}`}>
                                                        <div className="fcrse_img">
                                                            <img src={IMAGES.img_cours_sample_0} alt="" />
                                                            <div className="course-overlay">
                                                                {item.isBestSeller && (
                                                                    <div className="badge_seller">Bestseller</div>
                                                                )}
                                                                {item.points && (
                                                                    <div className="crse_reviews">
                                                                        <i className="uil uil-star"></i>
                                                                        {item.points}
                                                                    </div>
                                                                )}
                                                                <span className="play_btn1">
                                                                    <i className="uil uil-play"></i>
                                                                </span>
                                                                <div className="crse_timer">{item.length}</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="fcrse_content">
                                                        <div className="eps_dots more_dropdown">
                                                            <a href="#">
                                                                <i className="uil uil-ellipsis-v"></i>
                                                            </a>
                                                            <div className="dropdown-content">
                                                                <span>
                                                                    <i className="uil uil-share-alt"></i>Share
                                                                </span>
                                                                <span>
                                                                    <i className="uil uil-heart"></i>Save
                                                                </span>
                                                                <span>
                                                                    <i className="uil uil-ban"></i>Not Interested
                                                                </span>
                                                                <span>
                                                                    <i className="uil uil-windsock"></i>Report
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="vdtodt">
                                                            <span className="vdt14">{item.views} views</span>
                                                            <span className="vdt14">{item.publishedDate} ago</span>
                                                        </div>
                                                        <Link to={`coursDetails/${item.id}`}>
                                                            <div className="crse14s">{item.name}</div>
                                                        </Link>
                                                        <a href="#" className="crse-cate">
                                                            {item.category}
                                                        </a>
                                                        <div className="auth1lnkprce">
                                                            <p className="cr1fot">
                                                                By <a href="#">{item.author}</a>
                                                            </p>
                                                            <div className="prce142">{item.price}</div>
                                                            <button className="shrt-cart-btn" title="cart">
                                                                <i className="uil uil-shopping-cart-alt"></i>
                                                            </button>
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
