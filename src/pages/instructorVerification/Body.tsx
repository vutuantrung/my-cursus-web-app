import { IMAGES } from '../../constants';

const Body = () => {
    return (
        <div className="wrapper">
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="st_title">
                                <i className="uil uil-check-circle"></i> Verification
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-xl-center justify-content-lg-center justify-content-md-center">
                        <div className="col-xl-6 col-lg-8 col-md-8">
                            <div className="verification_content">
                                <img src={IMAGES.verified_account} alt="" />
                                <h4>Verification with Edututs+</h4>
                                <p>
                                    Praesent sed sapien gravida, tempus nunc nec, euismod turpis. Mauris quis scelerisque arcu.
                                    Quisque et aliquet nisl, id placerat est. Morbi quis imperdiet nulla.
                                </p>
                                <ul className="alert_verification">
                                    <li>
                                        <div className="required_group">
                                            <div className="edututs_required_img">
                                                <i className="uil uil-dashboard"></i>
                                            </div>
                                            <div className="edututs_required">
                                                <span>
                                                    <strong>14 subscribers</strong>
                                                </span>
                                                <span>500 required</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="required_group">
                                            <div className="edututs_required_img">
                                                <i className="uil uil-dashboard"></i>
                                            </div>
                                            <div className="edututs_required">
                                                <span>
                                                    <strong>10 public watch hours</strong>
                                                </span>
                                                <span>1,500 required</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="apply_verify_text">
                                    <i className="uil uil-check-circle"></i>We'll send you an email when you're eligible to apply
                                </div>
                                <div className="verification_form">
                                    <h4>Verify Your ID</h4>
                                    <form>
                                        <div className="ui search focus mt-50 lbel25">
                                            <label>Course Title*</label>
                                            <div className="ui left icon input swdh19">
                                                <input
                                                    className="prompt srch_explore"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    name="fullname"
                                                    maxLength={60}
                                                    id="full[name]"
                                                    value=""
                                                />
                                            </div>
                                        </div>
                                        <div className="part_input mt-30 lbel25">
                                            <label>Upload Document*</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="inputGroupFile06" />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile06">
                                                        No Choose
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="verify_submit_btn" type="submit">
                                            Submit Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer mt-40">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item_f1">
                                <a href="terms_of_use.html">Copyright Policy</a>
                                <a href="terms_of_use.html">Terms</a>
                                <a href="terms_of_use.html">Privacy Policy</a>
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
