import { ICONS } from '../../../../constants';

export const Instructor = (item: any) => {
    const displaySocialLinks = () => {
        return (
            <div>
                {item.facebookUrl && (
                    <li>
                        <a href={item.socialLinks.facebookUrl} className="fb">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                )}
                {item.socialLinks.twitterUrl && (
                    <li>
                        <a href={item.socialLinks.twitterUrl} className="tw">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                )}
                {item.socialLinks.linkedinUrl && (
                    <li>
                        <a href={item.socialLinks.linkedinUrl} className="ln">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                )}
                {item.socialLinks.youtubeUrl && (
                    <li>
                        <a href={item.socialLinks.youtubeUrl} className="yu">
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
                        <img src={item.avatar} alt="avatar" />
                    </a>
                </div>
                <div className="tutor_content_dt">
                    <div className="tutor150">
                        <a href="instructor_profile_view.html" className="tutor_name">
                            {item.name}
                        </a>
                        <div className="mef78" title="Verify">
                            <img src={ICONS.check_circle} alt="" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
                        </div>
                    </div>
                    <div className="tutor_cate">{item.className}</div>
                    <ul className="tutor_social_links">{displaySocialLinks()}</ul>
                    <div className="tut1250">
                        <span className="vdt15">{item.studentNumber} Students</span>
                        <span className="vdt15">{item.coursNumber} Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
