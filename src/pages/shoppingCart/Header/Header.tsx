import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants';
import { useEffect, useRef } from 'react';

const Header = () => {
    const night_mode_switch = useRef<HTMLAnchorElement>(null);
    const onNightModeSwitch = (event: Event) => {
        event.preventDefault();
        document.documentElement.classList.toggle('night-mode');
        if (document.documentElement.classList.contains('night-mode')) {
            localStorage.setItem('gmtNightMode', 'true');
            return;
        }
        localStorage.removeItem('gmtNightMode');
    };

    useEffect(() => {
        if (night_mode_switch.current) {
            night_mode_switch.current.addEventListener('click', onNightModeSwitch);
        }
    }, []);
    return (
        <header className="header clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="back_link">
                            <Link to="/">
                                <div className="hde151">Back To Cursus</div>
                            </Link>
                            <Link to="/">
                                <div className="hde152">Back</div>
                            </Link>
                        </div>
                        <div className="ml_item">
                            <div className="main_logo main_logo15" id="logo">
                                <Link to="/">
                                    <img src={IMAGES.logo} alt="" />
                                </Link>
                                <Link to="/">
                                    <img className="logo-inverse" src={IMAGES.ct_logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="header_right pr-0">
                            <ul>
                                <li className="ui top right pointing dropdown">
                                    <a href="#" className="opts_account">
                                        <img src={IMAGES.hd_dp} alt="" />
                                    </a>
                                    <div className="menu dropdown_account">
                                        <div className="channel_my">
                                            <div className="profile_link">
                                                <img src="images/hd_dp.jpg" alt="" />
                                                <div className="pd_content">
                                                    <div className="rhte85">
                                                        <h6>Joginder Singh</h6>
                                                        <div className="mef78" title="Verify">
                                                            <i className="uil uil-check-circle"></i>
                                                        </div>
                                                    </div>
                                                    <span>gambol943@gmail.com</span>
                                                </div>
                                            </div>
                                            <a href="my_instructor_profile_view.html" className="dp_link_12">
                                                View Instructor Profile
                                            </a>
                                        </div>
                                        <div className="night_mode_switch__btn">
                                            <a href="###" id="night-mode" className="btn-night-mode" ref={night_mode_switch}>
                                                <i className="uil uil-moon"></i> Night mode
                                                <span className="btn-night-mode-switch">
                                                    <span className="uk-switch-button"></span>
                                                </span>
                                            </a>
                                        </div>
                                        <a href="instructor_dashboard.html" className="item channel_item">
                                            Cursus Dashboard
                                        </a>
                                        <a href="sign_in.html" className="item channel_item">
                                            Sign Out
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
