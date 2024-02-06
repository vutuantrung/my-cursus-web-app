import { Link } from 'react-router-dom';
import PageHeader from '../commons/Header/PageHeader';
import AppFooter from '../commons/Footer/AppFooter';

const SearchResult = () => {
    return (
        <>
            <PageHeader />
            <div className="wrapper _bg4586 _new89 app-footer-padding">
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
                                                    <li className="breadcrumb-item active" aria-current="page">
                                                        Search Results
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="titleright">
                                        <div className="explore_search">
                                            <div className="ui search focus">
                                                <div className="ui left icon input swdh11 swdh15">
                                                    <input className="prompt srch_explore" type="text" placeholder="Search" />
                                                    <i className="uil uil-search-alt icon icon2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title126">
                                    <h2>Search Results</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sa4d25 mb4d25">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-md-4">
                                <div className="section3125 hstry142">
                                    <div className="result_stitles">
                                        <div className="rs6t_title">Filters</div>
                                        <div className="filter_selector">
                                            <div className="ui inline dropdown flt145">
                                                <div className="text">Sort</div>
                                                <i className="dropdown icon"></i>
                                                <div className="menu">
                                                    <div className="item">Most Relevant</div>
                                                    <div className="item">Most Reviewed</div>
                                                    <div className="item">Highest Rated</div>
                                                    <div className="item">Newest</div>
                                                    <div className="item">Lowest Price</div>
                                                    <div className="item">Highest Price</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tb_145">
                                        <div className="panel-group accordion" id="accordionfilter">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" id="headingOne">
                                                    <div className="panel-title10">
                                                        <a
                                                            className="collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapseOne"
                                                            href="#collapseOne"
                                                            aria-expanded="false"
                                                            aria-controls="collapseOne"
                                                        >
                                                            Topic
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapseOne"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingOne"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                SEO<span className="filter__counter">(428)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Php<span className="filter__counter">(1526)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Wordpress Pro
                                                                                <span className="filter__counter">(428)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                WooCommerce
                                                                                <span className="filter__counter">(958)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Bootstrap
                                                                                <span className="filter__counter">(748)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Web Development
                                                                                <span className="filter__counter">(2256)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Web Design
                                                                                <span className="filter__counter">(4859)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Digital Marketing
                                                                                <span className="filter__counter">(2458)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                E-commerce
                                                                                <span className="filter__counter">(1245)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Wordpress Themes
                                                                                <span className="filter__counter">(5879)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Wordpress Plugins
                                                                                <span className="filter__counter">(2654)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Wordpress Hosting
                                                                                <span className="filter__counter">(1485)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Elementor
                                                                                <span className="filter__counter">(3658)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Wordpress for Ecommerce
                                                                                <span className="filter__counter">(5894)</span>
                                                                            </label>
                                                                        </div>
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
                                                            Level
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapseTwo"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingTwo"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                All Levels
                                                                                <span className="filter__counter">(5000)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Beginner
                                                                                <span className="filter__counter">(3517)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Intermediate
                                                                                <span className="filter__counter">(1560)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Expert
                                                                                <span className="filter__counter">(240)</span>
                                                                            </label>
                                                                        </div>
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
                                                            Language
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapseThree"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingThree"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                English
                                                                                <span className="filter__counter">(500)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Español
                                                                                <span className="filter__counter">(250)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Português
                                                                                <span className="filter__counter">(270)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                日本語
                                                                                <span className="filter__counter">(190)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Deutsch
                                                                                <span className="filter__counter">(120)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Français
                                                                                <span className="filter__counter">(105)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Türkçe
                                                                                <span className="filter__counter">(90)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                हिन्दी
                                                                                <span className="filter__counter">(80)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Italiano
                                                                                <span className="filter__counter">(178)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Polski
                                                                                <span className="filter__counter">(50)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                ภาษาไทย
                                                                                <span className="filter__counter">(27)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Română
                                                                                <span className="filter__counter">(157)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Telugu
                                                                                <span className="filter__counter">(110)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                मराठी<span className="filter__counter">(50)</span>
                                                                            </label>
                                                                        </div>
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
                                                            Price
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapsefour"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingfour"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Paid
                                                                                <span className="filter__counter">(3000)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Free<span className="filter__counter">(50)</span>
                                                                            </label>
                                                                        </div>
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
                                                            Features
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapsefive"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingfive"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Captions
                                                                                <span className="filter__counter">(4780)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Quizzes
                                                                                <span className="filter__counter">(890)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Coding Exercises
                                                                                <span className="filter__counter">(350)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Practice Tests
                                                                                <span className="filter__counter">(1050)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" id="headingsix">
                                                    <div className="panel-title10">
                                                        <a
                                                            className="collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapsesix"
                                                            href="#"
                                                            aria-expanded="false"
                                                            aria-controls="collapsesix"
                                                        >
                                                            Rating
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapsesix"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingsix"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label className="rating_filter">
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                5.0 &amp; up
                                                                                <span className="filter__counter">(5000)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label className="rating_filter">
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                4.0 &amp; up
                                                                                <span className="filter__counter">(2500)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label className="rating_filter">
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                3.0 &amp; up
                                                                                <span className="filter__counter">(1500)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label className="rating_filter">
                                                                                <i className="uil uil-star"></i>
                                                                                <i className="uil uil-star"></i>
                                                                                2.0 &amp; up
                                                                                <span className="filter__counter">(122)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" id="headingseven">
                                                    <div className="panel-title10">
                                                        <a
                                                            className="collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapseseven"
                                                            href="#"
                                                            aria-expanded="false"
                                                            aria-controls="collapseseven"
                                                        >
                                                            Video Duration
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapseseven"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingseven"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                0-2 Hours
                                                                                <span className="filter__counter">(500)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                3-6 Hours
                                                                                <span className="filter__counter">(150)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                7-18 Hours
                                                                                <span className="filter__counter">(90)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                19+ Hours
                                                                                <span className="filter__counter">(25)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" id="headingeight">
                                                    <div className="panel-title10">
                                                        <a
                                                            className="collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapseeight"
                                                            href="#"
                                                            aria-expanded="false"
                                                            aria-controls="collapseeight"
                                                        >
                                                            Close Caption
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    id="collapseeight"
                                                    className="panel-collapse collapse"
                                                    aria-labelledby="headingeight"
                                                    data-parent="#accordionfilter"
                                                >
                                                    <div className="panel-body">
                                                        <div className="ui form">
                                                            <div className="grouped fields">
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                English
                                                                                <span className="filter__counter">(300)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Español
                                                                                <span className="filter__counter">(210)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Português
                                                                                <span className="filter__counter">(170)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Italiano
                                                                                <span className="filter__counter">(174)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Français
                                                                                <span className="filter__counter">(120)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Polski
                                                                                <span className="filter__counter">(130)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Deutsch
                                                                                <span className="filter__counter">(30)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Bahasa Indonesia
                                                                                <span className="filter__counter">(20)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui form checkbox_sign">
                                                                    <div className="inline field">
                                                                        <div className="ui checkbox mncheck">
                                                                            <input
                                                                                type="checkbox"
                                                                                tabIndex={0}
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                ภาษาไทย
                                                                                <span className="filter__counter">(10)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="_14d25 mb-20">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="mhs_title">5 Results</h4>
                                            <div className="fcrse_1">
                                                <a href="course_detail_view.html" className="hf_img">
                                                    <img src="images/courses/img-1.jpg" alt="" />
                                                    <div className="course-overlay">
                                                        <div className="badge_seller">Bestseller</div>
                                                        <div className="crse_reviews">
                                                            <i className="uil uil-star"></i>4.5
                                                        </div>
                                                        <span className="play_btn1">
                                                            <i className="uil uil-play"></i>
                                                        </span>
                                                        <div className="crse_timer">25 hours</div>
                                                    </div>
                                                </a>
                                                <div className="hs_content">
                                                    <div className="eps_dots eps_dots10 more_dropdown">
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
                                                        <span className="vdt14">109k views</span>
                                                        <span className="vdt14">15 days ago</span>
                                                    </div>
                                                    <a href="course_detail_view.html" className="crse14s title900">
                                                        Complete Python Bootcamp: Go from zero to hero in Python 3
                                                    </a>
                                                    <a href="#" className="crse-cate">
                                                        Web Development | Python
                                                    </a>
                                                    <div className="auth1lnkprce">
                                                        <p className="cr1fot">
                                                            By <a href="#">John Doe</a>
                                                        </p>
                                                        <div className="prce142">$10</div>
                                                        <button className="shrt-cart-btn" title="cart">
                                                            <i className="uil uil-shopping-cart-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fcrse_1 mt-30">
                                                <a href="course_detail_view.html" className="hf_img">
                                                    <img src="images/courses/img-2.jpg" alt="" />
                                                    <div className="course-overlay">
                                                        <div className="badge_seller">Bestseller</div>
                                                        <div className="crse_reviews">
                                                            <i className="uil uil-star"></i>4.5
                                                        </div>
                                                        <span className="play_btn1">
                                                            <i className="uil uil-play"></i>
                                                        </span>
                                                        <div className="crse_timer">28 hours</div>
                                                    </div>
                                                </a>
                                                <div className="hs_content">
                                                    <div className="eps_dots eps_dots10 more_dropdown">
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
                                                        <span className="vdt14">5M views</span>
                                                        <span className="vdt14">15 days ago</span>
                                                    </div>
                                                    <a href="course_detail_view.html" className="crse14s title900">
                                                        The Complete JavaScript Course 2020: Build Real Projects!
                                                    </a>
                                                    <a href="#" className="crse-cate">
                                                        Development | JavaScript
                                                    </a>
                                                    <div className="auth1lnkprce">
                                                        <p className="cr1fot">
                                                            By <a href="#">Jassica William</a>
                                                        </p>
                                                        <div className="prce142">$5</div>
                                                        <button className="shrt-cart-btn" title="cart">
                                                            <i className="uil uil-shopping-cart-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fcrse_1 mt-30">
                                                <a href="course_detail_view.html" className="hf_img">
                                                    <img src="images/courses/img-3.jpg" alt="" />
                                                    <div className="course-overlay">
                                                        <div className="badge_seller">Bestseller</div>
                                                        <div className="crse_reviews">
                                                            <i className="uil uil-star"></i>4.5
                                                        </div>
                                                        <span className="play_btn1">
                                                            <i className="uil uil-play"></i>
                                                        </span>
                                                        <div className="crse_timer">12 hours</div>
                                                    </div>
                                                </a>
                                                <div className="hs_content">
                                                    <div className="eps_dots eps_dots10 more_dropdown">
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
                                                        <span className="vdt14">1M views</span>
                                                        <span className="vdt14">18 days ago</span>
                                                    </div>
                                                    <a href="course_detail_view.html" className="crse14s title900">
                                                        Beginning C++ Programming - From Beginner to Beyond
                                                    </a>
                                                    <a href="#" className="crse-cate">
                                                        Development | C++
                                                    </a>
                                                    <div className="auth1lnkprce">
                                                        <p className="cr1fot">
                                                            By <a href="#">Joginder Singh</a>
                                                        </p>
                                                        <div className="prce142">$13</div>
                                                        <button className="shrt-cart-btn" title="cart">
                                                            <i className="uil uil-shopping-cart-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fcrse_1 mt-30">
                                                <a href="course_detail_view.html" className="hf_img">
                                                    <img src="images/courses/img-4.jpg" alt="" />
                                                    <div className="course-overlay">
                                                        <div className="badge_seller">Bestseller</div>
                                                        <div className="crse_reviews">
                                                            <i className="uil uil-star"></i>5.0
                                                        </div>
                                                        <span className="play_btn1">
                                                            <i className="uil uil-play"></i>
                                                        </span>
                                                        <div className="crse_timer">1 hours</div>
                                                    </div>
                                                </a>
                                                <div className="hs_content">
                                                    <div className="eps_dots eps_dots10 more_dropdown">
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
                                                        <span className="vdt14">153k views</span>
                                                        <span className="vdt14">3 months ago</span>
                                                    </div>
                                                    <a href="course_detail_view.html" className="crse14s title900">
                                                        The Complete Digital Marketing Course - 12 Courses in 1
                                                    </a>
                                                    <a href="#" className="crse-cate">
                                                        Digital Marketing | Marketing
                                                    </a>
                                                    <div className="auth1lnkprce">
                                                        <p className="cr1fot">
                                                            By <a href="#">Poonam Verma</a>
                                                        </p>
                                                        <div className="prce142">$12</div>
                                                        <button className="shrt-cart-btn" title="cart">
                                                            <i className="uil uil-shopping-cart-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main-loader mt-50">
                                                <div className="spinner">
                                                    <div className="bounce1"></div>
                                                    <div className="bounce2"></div>
                                                    <div className="bounce3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AppFooter />
            </div>
        </>
    );
};

export default SearchResult;
