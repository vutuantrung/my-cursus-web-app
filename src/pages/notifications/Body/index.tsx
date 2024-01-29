import { IMAGES } from '../../../constants';

const Body = () => {
    return (
        <>
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="st_title">
                                    <i className="uil uil-bell"></i> Notifications
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="setting_noti">
                                    Notification Setting
                                </a>
                                <div className="all_msg_bg">
                                    <div className="channel_my item all__noti5">
                                        <div className="profile_link">
                                            <img src={IMAGES.avatar} alt="" />
                                            <div className="pd_content">
                                                <h6>Rock William</h6>
                                                <p className="noti__text5">
                                                    Like Your Comment On Video <strong>How to create sidebar menu</strong>.
                                                </p>
                                                <span className="nm_time">2 min ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="channel_my item all__noti5">
                                        <div className="profile_link">
                                            <img src={IMAGES.avatar} alt="" />
                                            <div className="pd_content">
                                                <h6>Jassica Smith</h6>
                                                <p className="noti__text5">
                                                    Added New Review In Video <strong>Full Stack PHP Developer</strong>.
                                                </p>
                                                <span className="nm_time">12 min ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="channel_my item all__noti5">
                                        <div className="profile_link">
                                            <img src={IMAGES.avatar} alt="" />
                                            <div className="pd_content">
                                                <p className="noti__text5"> Your Membership Activated.</p>
                                                <span className="nm_time">20 min ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="channel_my item all__noti5">
                                        <div className="profile_link">
                                            <img src={IMAGES.avatar} alt="" />
                                            <div className="pd_content">
                                                <p className="noti__text5">
                                                    {' '}
                                                    Your Course Approved Now.{' '}
                                                    <a href="#" className="crse_bl">
                                                        How to create sidebar menu
                                                    </a>
                                                    .
                                                </p>
                                                <span className="nm_time">20 min ago</span>
                                            </div>
                                        </div>
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

export default Body;
