import { Link } from 'react-router-dom';

export const CoursItem = (item: any) => {
    return (
        <div className="item">
            <div className="fcrse_1 mb-20">
                <Link to={`coursDetails/${item.id}`} className="fcrse_img">
                    <img src={item.theme} alt="" />
                    <div className="course-overlay">
                        {item.isFeaturedCours && (
                            <div>
                                <div className="badge_seller">Bestseller</div>
                                <div className="crse_reviews">
                                    <i className="uil uil-star"></i>
                                    {item.point.toFixed(1)}
                                </div>
                            </div>
                        )}
                        <span className="play_btn1">
                            <i className="uil uil-play"></i>
                        </span>
                        <div className="crse_timer">{item.length}</div>
                    </div>
                </Link>
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
                        <span className="vdt14">{item.views} views</span>
                        <span className="vdt14">{item.createdDate} ago</span>
                    </div>
                    <Link to={`coursDetails/${item.id}`} className="crse14s">
                        {item.name}
                    </Link>
                    <a href="#" className="crse-cate">
                        {item.tag}
                    </a>
                    <div className="auth1lnkprce">
                        <p className="cr1fot">
                            By <a href="#">{item.author}</a>
                        </p>
                        <div className="prce142">{item.price}</div>
                        <button className="shrt-cart-btn" title="cart">
                            <i className="uil uil-shopping-cart-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
