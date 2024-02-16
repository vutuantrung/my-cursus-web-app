import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants';

const SignIn = () => {
    return (
        <div className="sign_in_up_bg">
            <div className="container">
                <div className="row justify-content-lg-center justify-content-md-center">
                    <div className="col-lg-12">
                        <div className="main_logo25" id="logo">
                            <Link to="/">
                                <img src={IMAGES.logo} alt="" />
                            </Link>
                            <Link to="/">
                                <img className="logo-inverse" src={IMAGES.ct_logo} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-8">
                        <div className="sign_form">
                            <h2>Welcome Back</h2>
                            <p>Log In to Your Edututs+ Account!</p>
                            <button className="social_lnk_btn color_btn_fb">
                                <i className="uil uil-facebook-f"></i>Continue with Facebook
                            </button>
                            <button className="social_lnk_btn mt-15 color_btn_tw">
                                <i className="uil uil-twitter"></i>Continue with Twitter
                            </button>
                            <button className="social_lnk_btn mt-15 color_btn_go">
                                <i className="uil uil-google"></i>Continue with Google
                            </button>
                            <form>
                                <div className="ui search focus mt-15">
                                    <div className="ui left icon input swdh95">
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
                                        <i className="uil uil-envelope icon icon2"></i>
                                    </div>
                                </div>
                                <div className="ui search focus mt-15">
                                    <div className="ui left icon input swdh95">
                                        <input
                                            className="prompt srch_explore"
                                            type="password"
                                            name="password"
                                            value=""
                                            id="id_password"
                                            required
                                            maxLength={64}
                                            placeholder="Password"
                                        />
                                        <i className="uil uil-key-skeleton-alt icon icon2"></i>
                                    </div>
                                </div>
                                <div className="ui form mt-30 checkbox_sign">
                                    <div className="inline field">
                                        <div className="ui checkbox mncheck">
                                            <input type="checkbox" tabIndex={0} className="hidden" />
                                            <label>Remember Me</label>
                                        </div>
                                    </div>
                                </div>
                                <button className="login-btn" type="submit">
                                    Sign In
                                </button>
                            </form>
                            <p className="sgntrm145">
                                Or <a href="forgot_password.html">Forgot Password</a>.
                            </p>
                            <p className="mb-0 mt-30 hvsng145">
                                Don't have an account? <Link to="/signUp">Sign Up</Link>
                            </p>
                        </div>
                        <div className="sign_footer">
                            <img src={IMAGES.sign_logo} alt="" />© 2020 <strong>Cursus</strong>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
