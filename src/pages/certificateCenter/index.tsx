import { useEffect } from 'react';
import PageHeader from '../commons/Header/PageHeader';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants';

const CertificateCenter = () => {
    useEffect(() => {
        ($('.ui .dropdown') as any).dropdown();
        // === Model === //
        ($('.ui .modal') as any).modal({ blurring: true }).modal('show');
        // === Tab === //
        ($('.menu .item') as any).tab();
        // === checkbox Toggle === //
        ($('.ui .checkbox') as any).checkbox();
        // === Toggle === //
        $('.enable .button').on('click', function () {
            ($(this).nextAll('.checkbox') as any).checkbox('enable');
        });
    }, []);
    return (
        <>
            <PageHeader />
            <div className="wrapper _bg4586 _new89">
                <div className="_215certibg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cert_banner_text">
                                    <h1>Certification Center</h1>
                                    <p>For Students and Instructors</p>
                                    <ul className="certi_icons">
                                        <li>
                                            <a href="#" className="edttslogo">
                                                <img src={IMAGES.logo1} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <div className="edttsplus">
                                                <img src={IMAGES.plus} alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="edttslogo1">
                                                <img src={IMAGES.certicon} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                    <Link to="/certificateStartForm">
                                        <button className="certi-btn">Start Certification</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_215xd5">
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title889">
                                        <h2>Find Certificate</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="ui search focus mt-30">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input
                                                className="prompt srch_explore"
                                                type="text"
                                                name="cerificate[number]"
                                                value=""
                                                id="id_cerificate[number]"
                                                required
                                                maxLength={10}
                                                placeholder="# Number"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="ui search focus mt-30">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input
                                                className="prompt srch_explore"
                                                type="text"
                                                name="fullname"
                                                value=""
                                                id="id_fullname"
                                                required
                                                maxLength={64}
                                                placeholder="Full Name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="ui hj145 dropdown cntry152 prompt srch_explore mt-30">
                                        <option value="">Select Category</option>
                                        <option value="1">Development</option>
                                        <option value="2">Finance & Accounting</option>
                                        <option value="3">Design</option>
                                        <option value="4">Marketing</option>
                                        <option value="5">Teaching & Academics</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <button className="login-btn" type="submit">
                                        Find Certificate
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="_215td5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title589">
                                    <h2>Our Certification</h2>
                                    <p>We prepared tests for the most popular categories and get cerificate</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="catey-tabs">
                                    <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="pills-development-tab"
                                                data-toggle="pill"
                                                href="#pills-development"
                                                role="tab"
                                                aria-controls="pills-development"
                                                aria-selected="true"
                                            >
                                                Development
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="pills-accounting-tab"
                                                data-toggle="pill"
                                                href="#pills-accounting"
                                                role="tab"
                                                aria-controls="pills-accounting"
                                                aria-selected="false"
                                            >
                                                Finance & Accounting
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="pills-design-tab"
                                                data-toggle="pill"
                                                href="#pills-design"
                                                role="tab"
                                                aria-controls="pills-design"
                                                aria-selected="false"
                                            >
                                                Design
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="pills-marketing-tab"
                                                data-toggle="pill"
                                                href="#pills-marketing"
                                                role="tab"
                                                aria-controls="pills-marketing"
                                                aria-selected="false"
                                            >
                                                Marketing
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="pills-teaching-tab"
                                                data-toggle="pill"
                                                href="#pills-teaching"
                                                role="tab"
                                                aria-controls="pills-teaching"
                                                aria-selected="false"
                                            >
                                                Teaching & Academics
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-development"
                                            role="tabpanel"
                                            aria-labelledby="pills-development-tab"
                                        >
                                            <div className="certicates">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            WordPress
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            HTML CSS
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            MotoCMS 3
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Joomla
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            OpenCart
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Joomla Pro
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            WordPress Pro
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            WordPress Elementor
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            WordPress Elementor Pro
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            PrestaShop
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-accounting"
                                            role="tabpanel"
                                            aria-labelledby="pills-accounting-tab"
                                        >
                                            <div className="certicates">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Accounting
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Finance Fundamentals
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Bookkeeping
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Political Science
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Finance
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Cryptocurrency
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-design"
                                            role="tabpanel"
                                            aria-labelledby="pills-design-tab"
                                        >
                                            <div className="certicates">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Adobe Photoshop
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Adobe Illustrator
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Adobe After Effects
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Adobe InDesign
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Unity
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Drawing
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Game Development Fundamentals
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            3D Modeling
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Motion Graphics
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            2D Animation
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            T-Shirt Design
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-marketing"
                                            role="tabpanel"
                                            aria-labelledby="pills-marketing-tab"
                                        >
                                            <div className="certicates">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Google Ads (Adwords)
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Google Ads (AdWords) Certification
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Social Marketing
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Email Marketing
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Business Strategy
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            SEO
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            PPC Advertising
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Blogging
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-teaching"
                                            role="tabpanel"
                                            aria-labelledby="pills-teaching-tab"
                                        >
                                            <div className="certicates">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Math
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Humanities
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Engineering
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Science
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Social Science
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            English Language
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            German Language
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Sign Language
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            IELTS
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            French Language
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            Spanish Language
                                                        </a>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <a href="#" className="certilink__152">
                                                            English Grammar
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_485td5">
                    <div className="container">
                        <div className="row justify-content-lg-center justify-content-md-center">
                            <div className="col-lg-12">
                                <div className="titleceti89">
                                    <h2>Who Can Get Benefit From This?</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6">
                                <div className="who_get">
                                    <div className="who_img">
                                        <img src="images/cerificate_center/student.svg" alt="" />
                                    </div>
                                    <h4>Students</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6">
                                <div className="who_get">
                                    <div className="who_img">
                                        <img src="images/cerificate_center/instructor.svg" alt="" />
                                    </div>
                                    <h4>Instructor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_215td5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-12">
                                <div className="title589">
                                    <h2>What Will You Get?</h2>
                                    <p>Cursus company, which confirms your skills and knowledge of Certification</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="knowledge_dts">
                                    <p>
                                        Morbi eget elit eget turpis varius mollis eget vel massa. Donec porttitor, sapien eget
                                        commodo vulputate, erat felis aliquam dolor, non condimentum libero dolor vel ipsum. Sed
                                        porttitor nisi eget nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat
                                        neque luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas eget mollis nisl.
                                        Cras porta dapibus est, quis malesuada ex iaculis at. Vestibulum egestas tortor in urna
                                        tempor, in fermentum lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in
                                        nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem aliquet
                                        sodales non in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus luctus
                                        elementum tortor, ac aliquet dolor vehicula et. Nulla vehicula pharetra lacus ornare
                                        gravida. Vivamus mollis ullamcorper dui quis gravida. Aenean pulvinar pulvinar arcu a
                                        suscipit.
                                    </p>
                                    <button className="knowledge_btn" onClick={() => "window.location.href = '#';"}>
                                        Knowledge Base
                                    </button>
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
                                                    <div
                                                        className="item"
                                                        data-percent="100"
                                                        data-value="en"
                                                        data-english="English"
                                                    >
                                                        <span className="description">English</span>
                                                        English
                                                    </div>
                                                    <div className="item" data-percent="94" data-value="da" data-english="Danish">
                                                        <span className="description">dansk</span>
                                                        Danish
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="94"
                                                        data-value="es"
                                                        data-english="Spanish"
                                                    >
                                                        <span className="description">Español</span>
                                                        Spanish
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="34"
                                                        data-value="zh"
                                                        data-english="Chinese"
                                                    >
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
                                                    <div
                                                        className="item"
                                                        data-percent="79"
                                                        data-value="fa"
                                                        data-english="Persian"
                                                    >
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
                                                    <div
                                                        className="item"
                                                        data-percent="37"
                                                        data-value="ru"
                                                        data-english="Russian"
                                                    >
                                                        <span className="description">Русский</span>
                                                        Russian
                                                    </div>
                                                    <div className="item" data-percent="36" data-value="de" data-english="German">
                                                        <span className="description">Deutsch</span>
                                                        German
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="23"
                                                        data-value="it"
                                                        data-english="Italian"
                                                    >
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
                                                    <div
                                                        className="item"
                                                        data-percent="17"
                                                        data-value="id"
                                                        data-english="Indonesian"
                                                    >
                                                        <span className="description">Indonesian</span>
                                                        Indonesian
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="12"
                                                        data-value="lt"
                                                        data-english="Lithuanian"
                                                    >
                                                        <span className="description">Lietuvių</span>
                                                        Lithuanian
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="11"
                                                        data-value="tr"
                                                        data-english="Turkish"
                                                    >
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
                                                    <div
                                                        className="item"
                                                        data-percent="6"
                                                        data-value="hu"
                                                        data-english="Hungarian"
                                                    >
                                                        <span className="description">Magyar</span>
                                                        Hungarian
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="6"
                                                        data-value="vi"
                                                        data-english="Vietnamese"
                                                    >
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
                                                    <div
                                                        className="item"
                                                        data-percent="6"
                                                        data-value="ja"
                                                        data-english="Japanese"
                                                    >
                                                        <span className="description">日本語</span>
                                                        Japanese
                                                    </div>
                                                    <div
                                                        className="item"
                                                        data-percent="0"
                                                        data-value="ro"
                                                        data-english="Romanian"
                                                    >
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
        </>
    );
};

export default CertificateCenter;
