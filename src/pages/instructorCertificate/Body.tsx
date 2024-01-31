import { IMAGES } from '../../constants';

const Body = () => {
    return (
        <div className="wrapper">
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="st_title">
                                <i className="uil uil-award"></i> My Certificates
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="mt-10">
                                <div className="card_dash1">
                                    <div className="card_dash_left1">
                                        <i className="uil uil-award"></i>
                                        <h1>Jump Into New Certificate</h1>
                                    </div>
                                    <div className="card_dash_right1">
                                        <button
                                            className="create_btn_dash"
                                            onClick={() => "window.location.href = 'certification_center.html';"}
                                        >
                                            New Certificate
                                        </button>
                                    </div>
                                </div>
                                <div className="table-cerificate">
                                    <div className="table-responsive">
                                        <table className="table ucp-table" id="content-table">
                                            <thead className="thead-s">
                                                <tr>
                                                    <th className="text-center" scope="col">
                                                        Item No.
                                                    </th>
                                                    <th scope="col">Title</th>
                                                    <th className="text-center" scope="col">
                                                        Marks
                                                    </th>
                                                    <th className="text-center" scope="col">
                                                        Out Of
                                                    </th>
                                                    <th className="text-center" scope="col">
                                                        Upload Date
                                                    </th>
                                                    <th className="text-center" scope="col">
                                                        Certificate
                                                    </th>
                                                    <th className="text-center" scope="col">
                                                        Controls
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td className="cell-ta">WordPress Certificate</td>
                                                    <td className="text-center">15</td>
                                                    <td className="text-center">20</td>
                                                    <td className="text-center">6 April 2019</td>
                                                    <td className="text-center">
                                                        <a
                                                            href="http://gambolthemes.net/html-imgs/certificate.jpg"
                                                            target="_blank"
                                                        >
                                                            View
                                                        </a>
                                                    </td>
                                                    <td className="text-center">
                                                        <a href="#" title="Delete" className="gray-s">
                                                            <i className="uil uil-trash-alt"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">2</td>
                                                    <td className="cell-ta">WordPress Pro Certificate</td>
                                                    <td className="text-center">14</td>
                                                    <td className="text-center">20</td>
                                                    <td className="text-center">4 April 2019</td>
                                                    <td className="text-center">
                                                        <a
                                                            href="http://gambolthemes.net/html-imgs/certificate.jpg"
                                                            target="_blank"
                                                        >
                                                            View
                                                        </a>
                                                    </td>
                                                    <td className="text-center">
                                                        <a href="#" title="Delete" className="gray-s">
                                                            <i className="uil uil-trash-alt"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">3</td>
                                                    <td className="cell-ta">HTML CSS Certificate</td>
                                                    <td className="text-center">18</td>
                                                    <td className="text-center">20</td>
                                                    <td className="text-center">3 April 2019</td>
                                                    <td className="text-center">
                                                        <a
                                                            href="http://gambolthemes.net/html-imgs/certificate.jpg"
                                                            target="_blank"
                                                        >
                                                            View
                                                        </a>
                                                    </td>
                                                    <td className="text-center">
                                                        <a href="#" title="Delete" className="gray-s">
                                                            <i className="uil uil-trash-alt"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
