import { ICONS } from '../../../../constants';

export const Instructor = ({
    name,
    avatar,
    className,
    studentNumber,
    coursNumber,
    socialLinks,
}: {
    name: string;
    avatar: string;
    className: string;
    studentNumber: string;
    coursNumber: string;
    socialLinks: any;
}) => {
    const renderSocialLinks = () => {
        return (
            <div>
                {socialLinks.facebookUrl && (
                    <li>
                        <a href={socialLinks.facebookUrl} className="fb">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                )}
                {socialLinks.twitterUrl && (
                    <li>
                        <a href={socialLinks.twitterUrl} className="tw">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                )}
                {socialLinks.linkedinUrl && (
                    <li>
                        <a href={socialLinks.linkedinUrl} className="ln">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                )}
                {socialLinks.youtubeUrl && (
                    <li>
                        <a href={socialLinks.youtubeUrl} className="yu">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                )}
            </div>
        );
    };

    return (
        <div className="item">
            <div className="fcrse_1 mb-20">
                <div className="tutor_img">
                    <a href="instructor_profile_view.html">
                        <img src={avatar} alt="" />
                    </a>
                </div>
                <div className="tutor_content_dt">
                    <div className="tutor150">
                        <a href="instructor_profile_view.html" className="tutor_name">
                            {name}
                        </a>
                        <div className="mef78" title="Verify">
                            <img src={ICONS.check_circle} alt="" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
                        </div>
                    </div>
                    <div className="tutor_cate">{className}</div>
                    <ul className="tutor_social_links">{renderSocialLinks()}</ul>
                    <div className="tut1250">
                        <span className="vdt15">{studentNumber} Students</span>
                        <span className="vdt15">{coursNumber} Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
