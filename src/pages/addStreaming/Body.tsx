const Body = () => {
    return (
        <div className="wrapper">
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="section3125 stream_tabs">
                                <ul className="nav nav-tabs slive_tabs justify-content-center" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="add-streaming-tab"
                                            data-toggle="tab"
                                            href="#add-straming"
                                            role="tab"
                                            aria-controls="add-straming"
                                            aria-selected="true"
                                        >
                                            Add Streaming
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="setting-tab"
                                            data-toggle="tab"
                                            href="#setting"
                                            role="tab"
                                            aria-controls="setting"
                                            aria-selected="false"
                                        >
                                            Setting
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="add-straming" role="tabpanel">
                                        <div className="add_stream_content">
                                            <h4 className="strm_title">Connect your live stream to the Live API</h4>
                                            <div className="sf475">
                                                Use live-streaming software or a hardware encoder. <a href="#">Learn More</a>
                                            </div>
                                            <div className="stm_key">
                                                Preview your broadcast with a stream key or paired encoder.
                                            </div>
                                            <div className="live_form">
                                                <div className="group-form">
                                                    <label>Server URL*</label>
                                                    <input
                                                        className="_dlor1"
                                                        type="text"
                                                        data-testid="server_url"
                                                        placeholder="Stream URL"
                                                        disabled
                                                        value="rtmps://live-api-s.edututs+.com:443/rtmp/"
                                                    />
                                                    <button className="_6tf7s" type="submit" value="1">
                                                        Copy
                                                    </button>
                                                </div>
                                                <div className="group-form">
                                                    <label>Persistent stream key*</label>
                                                    <input
                                                        className="_dlor1"
                                                        type="text"
                                                        data-testid="server_url"
                                                        placeholder="Stream URL"
                                                        disabled
                                                        value="592030151361629?s_bl=1&s_ps=1&s_sw=065&s_vt=api-s&a=AbzB7xYk7XdnKpBf"
                                                    />
                                                    <button className="_6tf7s" type="submit" value="1">
                                                        Copy
                                                    </button>
                                                </div>
                                                <button className="_145d1">
                                                    <i className="uil uil-video"></i>Go Live
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="setting" role="tabpanel">
                                        <div className="add_stream_content">
                                            <h4 className="strm_title1">Live Streaming Setting</h4>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss1" checked />
                                                <label>Publish this as a continuous live video</label>
                                            </div>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss2" />
                                                <label>Allow embedding </label>
                                            </div>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss3" />
                                                <label>Unpublish after live video ends</label>
                                            </div>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss4" checked />
                                                <label>Allow viewers to rewind</label>
                                            </div>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss5" checked />
                                                <label>End broadcast when stream ends</label>
                                            </div>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss6" />
                                                <label>Publish as a test broadcast</label>
                                            </div>
                                            <div className="ui toggle checkbox _1457s2">
                                                <input type="checkbox" name="stream_ss7" />
                                                <label>Turn off live commentary</label>
                                            </div>
                                            <button className="_145d1">Save changes &amp; Go Live</button>
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
