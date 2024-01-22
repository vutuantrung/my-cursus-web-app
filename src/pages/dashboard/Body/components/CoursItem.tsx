import { ICONS } from '../../../../constants';

export const CoursItem = ({
    isFeaturedCours,
    coursTheme,
    coursName,
    coursTag,
    coursAuthor,
    coursPrice,
    coursPoint,
    coursLength,
    coursViews,
    coursCreatedDate,
}: {
    isFeaturedCours: boolean;
    coursTheme: string;
    coursName: string;
    coursTag: string;
    coursAuthor: string;
    coursPrice: string;
    coursPoint: number;
    coursLength: string;
    coursViews: string;
    coursCreatedDate: string;
}) => {
    return (
        <div className="item">
            <div className="fcrse_1 mb-20">
                <a href="course_detail_view.html" className="fcrse_img">
                    <img src={coursTheme} alt="" />
                    <div className="course-overlay">
                        {isFeaturedCours && (
                            <div>
                                <div className="badge_seller">Bestseller</div>
                                <div className="crse_reviews">
                                    <i className="uil uil-star"></i>
                                    {coursPoint.toFixed(1)}
                                </div>
                            </div>
                        )}
                        <span className="play_btn1">
                            <i className="uil uil-play"></i>
                        </span>
                        <div className="crse_timer">{coursLength}</div>
                    </div>
                </a>
                <div className="fcrse_content">
                    <div className="eps_dots more_dropdown">
                        <a href="#">
                            <i className="uil uil-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-content">
                            <span>
                                <i className="uil uil-share-alt"></i>Share
                            </span>
                            <span>
                                <i className="uil uil-heart"></i>Save
                            </span>
                            <span>
                                <i className="uil uil-ban"></i>Not Interested
                            </span>
                            <span>
                                <i className="uil uil-windsock"></i>Report
                            </span>
                        </div>
                    </div>
                    <div className="vdtodt">
                        <span className="vdt14">{coursViews} views</span>
                        <span className="vdt14">{coursCreatedDate} ago</span>
                    </div>
                    <a href="course_detail_view.html" className="crse14s">
                        {coursName}
                    </a>
                    <a href="#" className="crse-cate">
                        {coursTag}
                    </a>
                    <div className="auth1lnkprce">
                        <p className="cr1fot">
                            By <a href="#">{coursAuthor}</a>
                        </p>
                        <div className="prce142">{coursPrice}</div>
                        <button className="shrt-cart-btn" title="cart">
                            <i className="uil uil-shopping-cart-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
