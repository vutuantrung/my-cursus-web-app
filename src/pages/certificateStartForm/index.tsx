import { useEffect } from 'react';
import { IMAGES } from '../../constants';
import PageHeader from '../commons/Header/PageHeader';
import { Link } from 'react-router-dom';

const CertificateStartForm = () => {
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
                <div className="_215b15">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title125">
                                    <div className="titleleft">
                                        <div className="ttl121">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li className="breadcrumb-item">
                                                        <Link to="/certificateCenter">Certification Center</Link>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">
                                                        Certification Fill Form
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="titleright">
                                        <a href="certification_center.html" className="blog_link">
                                            <i className="uil uil-angle-double-left"></i>Back to Certification Center
                                        </a>
                                    </div>
                                </div>
                                <div className="title126">
                                    <h2>Certification Fill Form</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq1256">
                    <div className="container">
                        <div className="row justify-content-lg-center justify-content-md-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="certi_form">
                                    <div className="sign_form">
                                        <h2>Fill in before you start:</h2>
                                        <form>
                                            <div className="ui search focus mt-40">
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
                                            <div className="ui search focus mt-15">
                                                <div className="ui left icon input swdh11 swdh19">
                                                    <input
                                                        className="prompt srch_explore"
                                                        type="email"
                                                        name="emailaddress"
                                                        value=""
                                                        id="id_email"
                                                        required
                                                        maxLength={64}
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="ui search focus mt-15">
                                                <div className="ui left icon input swdh11 swdh19">
                                                    <input
                                                        className="prompt srch_explore"
                                                        type="text"
                                                        name="phonenumber"
                                                        value=""
                                                        id="id_phonenumber"
                                                        required
                                                        maxLength={10}
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="category_cop">
                                                <h4>Select Category</h4>
                                                <div className="panel-groupaccordion" id="accordiontest">
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" id="headingOne">
                                                            <div className="panel-title10">
                                                                <a
                                                                    className="collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#collapseOne"
                                                                    href="#"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseOne"
                                                                >
                                                                    Development
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="collapseOne"
                                                            className="panel-collapse collapse"
                                                            aria-labelledby="headingOne"
                                                            data-parent="#accordiontest"
                                                        >
                                                            <div className="panel-body">
                                                                <div className="ui form">
                                                                    <div className="grouped fields">
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>WordPress</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>HTML CSS</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Full Time</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>MotoCMS 3</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Joomla</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Full Time</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>OpenCart</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Joomla Pro</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>WordPress Pro</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>WordPress Elementor</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>WordPress Elementor Pro</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>PrestaShop</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" id="headingTwo">
                                                            <div className="panel-title10">
                                                                <a
                                                                    className="collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#collapseTwo"
                                                                    href="#"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseTwo"
                                                                >
                                                                    Finance & Accounting
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="collapseTwo"
                                                            className="panel-collapse collapse"
                                                            aria-labelledby="headingTwo"
                                                            data-parent="#accordiontest"
                                                        >
                                                            <div className="panel-body">
                                                                <div className="ui form">
                                                                    <div className="grouped fields">
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Accounting</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Finance Fundamentals</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Bookkeeping</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Political Science</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Finance</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Cryptocurrency</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" id="headingThree">
                                                            <div className="panel-title10">
                                                                <a
                                                                    className="collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#collapseThree"
                                                                    href="#"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseThree"
                                                                >
                                                                    Design
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="collapseThree"
                                                            className="panel-collapse collapse"
                                                            aria-labelledby="headingThree"
                                                            data-parent="#accordiontest"
                                                        >
                                                            <div className="panel-body">
                                                                <div className="ui form">
                                                                    <div className="grouped fields">
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Adobe Photoshop</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Adobe Illustrator</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Adobe After Effects</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Adobe InDesign</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Unity</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Drawing</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Game Development Fundamentals</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>3D Modeling</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Motion Graphics</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>2D Animation</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>T-Shirt Design</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" id="headingfour">
                                                            <div className="panel-title10">
                                                                <a
                                                                    className="collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#collapsefour"
                                                                    href="#"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapsefour"
                                                                >
                                                                    Marketing
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="collapsefour"
                                                            className="panel-collapse collapse"
                                                            aria-labelledby="headingfour"
                                                            data-parent="#accordiontest"
                                                        >
                                                            <div className="panel-body">
                                                                <div className="ui form">
                                                                    <div className="grouped fields">
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Google Ads (Adwords)</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Google Ads (AdWords) Certification</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Social Marketing</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Email Marketing</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Business Strategy</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>SEO</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>PPC Advertising</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Blogging</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" id="headingfive">
                                                            <div className="panel-title10">
                                                                <a
                                                                    className="collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#collapsefive"
                                                                    href="#"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapsefive"
                                                                >
                                                                    Teaching & Academics
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="collapsefive"
                                                            className="panel-collapse collapse"
                                                            aria-labelledby="headingfive"
                                                            data-parent="#accordiontest"
                                                        >
                                                            <div className="panel-body">
                                                                <div className="ui form">
                                                                    <div className="grouped fields">
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Math</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Humanities</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Engineering</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Science</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Social Science</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>English Language</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field fltr-radio">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>German Language</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Sign Language</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>French Language</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>Spanish Language</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>English Grammar</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="field">
                                                                            <div className="ui radio checkbox">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="example2"
                                                                                    tabIndex={0}
                                                                                    className="hidden"
                                                                                />
                                                                                <label>IELTS</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="testtrm145">
                                                By signing up, you agree to our <a href="#">Privacy Policy</a> and{' '}
                                                <a href="#">Terms and Conditions</a>.
                                            </p>
                                            <button className="login-btn" type="submit">
                                                Lets Go
                                            </button>
                                        </form>
                                        <p className="questrm145">
                                            Please be ready to answer <span>20 questions</span> within <span>1 hours</span>.
                                        </p>
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
        </>
    );
};

export default CertificateStartForm;
