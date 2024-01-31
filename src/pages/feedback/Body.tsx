import { IMAGES } from '../../constants';

const Body = () => {
    return (
        <div className="wrapper">
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="st_title">
                                <i className="uil uil-comment-info-alt"></i> Send Feedback
                            </h2>
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="ui search focus">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input
                                                className="prompt srch_explore"
                                                type="email"
                                                name="emailaddress"
                                                value=""
                                                id="id_email"
                                                required
                                                maxLength={64}
                                                placeholder="Email address"
                                            />
                                        </div>
                                    </div>
                                    <div className="ui search focus mt-30">
                                        <div className="ui form swdh30">
                                            <div className="field">
                                                <textarea
                                                    rows={6}
                                                    name="description"
                                                    id="id_about"
                                                    placeholder="Describe your issue or share your ideas"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group1 mt-30">
                                        <label htmlFor="file5">Add Screenshots</label>
                                        <div className="image-upload-wrap">
                                            <input
                                                className="file-upload-input"
                                                id="file5"
                                                type="file"
                                                onChange={() => 'readURL(this);'}
                                                accept="image/*"
                                            />
                                            <div className="drag-text">
                                                <i className="fas fa-cloud-upload-alt"></i>
                                                <h4>Select screenshots to upload</h4>
                                                <p>or drag and drop screenshots</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="save_btn" type="submit">
                                        Send Feedback
                                    </button>
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
                                                        <img src={IMAGES.logo1} alt="" />
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
