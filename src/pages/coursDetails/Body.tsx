import { useEffect } from 'react';
import { IMAGES } from '../../constants';

const Body = () => {
    useEffect(() => {
        const headers = $('#accordion .accordion-header');
        const contentAreas = $('#accordion .ui-accordion-content ').hide().first().show().end();
        const expandLink = $('.accordion-expand-all');
        const inputPayment = $('input[name="paymentmethod"]');

        // add the accordion functionality
        headers.on('click', function () {
            contentAreas.slideUp();
            $(this).next().slideDown();
            expandLink.text('Expand all').data('isAllOpen', false);
            return false;
        });

        // hook up the expand/collapse all
        expandLink.on('click', function () {
            const isAllOpen = !$(this).data('isAllOpen');
            // console.log({ isAllOpen: isAllOpen, contentAreas: contentAreas })
            contentAreas[isAllOpen ? 'slideDown' : 'slideUp']();
            expandLink.text(isAllOpen ? 'Collapse All' : 'Expand all').data('isAllOpen', isAllOpen);
        });

        // Payment Method Accordion
        inputPayment.on('click', function () {
            const $value = $(this).attr('value');
            $('.return-departure-dts').slideUp();
            $('[data-method="' + $value + '"]').slideDown();
        });
    }, []);
    return (
        <div className="wrapper _bg4586">
            <div className="_215b01">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section3125">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-5 col-md-6">
                                        <div className="preview_video">
                                            <a href="#" className="fcrse_img" data-toggle="modal" data-target="#videoModal">
                                                <img src={IMAGES.img_cours_sample_0} alt="" />
                                                <div className="course-overlay">
                                                    <div className="badge_seller">Bestseller</div>
                                                    <span className="play_btn1">
                                                        <i className="uil uil-play"></i>
                                                    </span>
                                                    <span className="_215b02">Preview this course</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="_215b10">
                                            <a href="#" className="_215b11">
                                                <span>
                                                    <i className="uil uil-heart"></i>
                                                </span>
                                                Save
                                            </a>
                                            <a href="#" className="_215b12">
                                                <span>
                                                    <i className="uil uil-windsock"></i>
                                                </span>
                                                Report abuse
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-6">
                                        <div className="_215b03">
                                            <h2>The Web Developer Bootcamp</h2>
                                            <span className="_215b04">
                                                The only course you need to learn web development - HTML, CSS, JS, Node, and More!
                                            </span>
                                        </div>
                                        <div className="_215b05">
                                            <div className="crse_reviews mr-2">
                                                <i className="uil uil-star"></i>4.5
                                            </div>
                                            (81,665 ratings)
                                        </div>
                                        <div className="_215b05">114,521 students enrolled</div>
                                        <div className="_215b06">
                                            <div className="_215b07">
                                                <span>
                                                    <i className="uil uil-comment"></i>
                                                </span>
                                                English
                                            </div>
                                            <div className="_215b08">
                                                <span>
                                                    <i className="uil uil-closed-captioning"></i>
                                                </span>
                                                <span>
                                                    English, Dutch
                                                    <span className="caption_tooltip">
                                                        12 more
                                                        <span className="caption-content">
                                                            <span>French</span>
                                                            <span>Hindi</span>
                                                            <span>German [Auto-generated]</span>
                                                            <span>Indonesian [Auto-generated]</span>
                                                            <span>Italian [Auto-generated]</span>
                                                            <span>Japanese [Auto-generated]</span>
                                                            <span>Korean</span>
                                                            <span>Polish</span>
                                                            <span>Portuguese [Auto-generated]</span>
                                                            <span>Spanish [Auto-generated]</span>
                                                            <span>Traditional Chinese</span>
                                                            <span>Turkish [Auto-generated]</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="_215b05">Last updated 1/2020</div>
                                        <ul className="_215b31">
                                            <li>
                                                <button className="btn_adcart">Add to Cart</button>
                                            </li>
                                            <li>
                                                <button className="btn_buy">Buy Now</button>
                                            </li>
                                        </ul>
                                        <div className="_215fgt1">30-Day Money-Back Guarantee</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_215b15 _byt1458">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="user_dt5">
                                <div className="user_dt_left">
                                    <div className="live_user_dt">
                                        <div className="user_img5">
                                            <a href="#">
                                                <img src={IMAGES.avatar} alt="" />
                                            </a>
                                        </div>
                                        <div className="user_cntnt">
                                            <a href="#" className="_df7852">
                                                Johnson Smith
                                            </a>
                                            <button className="subscribe-btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="user_dt_right">
                                    <ul>
                                        <li>
                                            <a href="#" className="lkcm152">
                                                <i className="uil uil-eye"></i>
                                                <span>1452</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152">
                                                <i className="uil uil-thumbs-up"></i>
                                                <span>100</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152">
                                                <i className="uil uil-thumbs-down"></i>
                                                <span>20</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152">
                                                <i className="uil uil-share-alt"></i>
                                                <span>9</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="course_tabs">
                                <nav>
                                    <div className="nav nav-tabs tab_crse justify-content-center" id="nav-tab" role="tablist">
                                        <a
                                            className="nav-item nav-link active"
                                            id="nav-about-tab"
                                            data-toggle="tab"
                                            href="#nav-about"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            About
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-courses-tab"
                                            data-toggle="tab"
                                            href="#nav-courses"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Courses Content
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-reviews-tab"
                                            data-toggle="tab"
                                            href="#nav-reviews"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Reviews
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_215b17">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course_tab_content">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-about" role="tabpanel">
                                        <div className="_htg451">
                                            <div className="_htg452">
                                                <h3>Requirements</h3>
                                                <ul>
                                                    <li>
                                                        <span className="_5f7g11">Have a computer with Internet</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            Be ready to learn an insane amount of awesome stuff
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Prepare to build real web apps!</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="_htg452 mt-35">
                                                <h3>Description</h3>
                                                <span className="_abc123">Just updated to include Bootstrap 4.1.3!</span>
                                                <p>
                                                    Hi! Welcome to the Web Developer Bootcamp, the{' '}
                                                    <strong>only course you need to learn web development</strong>. There are a
                                                    lot of options for online developer training, but this course is without a
                                                    doubt the most comprehensive and effective on the market. Here's why:
                                                </p>
                                                <ul className="_abc124">
                                                    <li>
                                                        <span className="_5f7g11">
                                                            This is the only online course taught by a professional bootcamp
                                                            instructor.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            94% of my in-person bootcamp students go on to get full-time developer
                                                            jobs. Most of them are complete beginners when I start working with
                                                            them.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            The previous 2 bootcamp programs that I taught cost $14,000 and
                                                            $21,000. This course is just as comprehensive but with brand new
                                                            content for a fraction of the price.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            Everything I cover is up-to-date and relevant to today's developer
                                                            industry. No PHP or other dated technologies. This course does not cut
                                                            any corners.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            This is the only complete beginner full-stack developer course that
                                                            covers NodeJS.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            We build 13+ projects, including a gigantic production application
                                                            called YelpCamp. No other course walks you through the creation of
                                                            such a substantial application.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            The course is constantly updated with new content, projects, and
                                                            modules. Think of it as a subscription to a never-ending supply of
                                                            developer training.
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    When you're learning to program you often have to sacrifice learning the
                                                    exciting and current technologies in favor of the "beginner friendly" classes.
                                                    With this course, you get the best of both worlds. This is a course designed
                                                    for the complete beginner, yet it covers some of the most exciting and
                                                    relevant topics in the industry.
                                                </p>
                                                <p>Throughout the course we cover tons of tools and technologies including:</p>
                                                <ul className="_abc124">
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>HTML5</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>CSS3</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>JavaScript</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>Bootstrap 4</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>SemanticUI</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>DOM Manipulation</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>jQuery</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>Unix(Command Line) Commands</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>NodeJS</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>NPM</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>ExpressJS</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>REST</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>MongoDB</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>Database Associations</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>Authentication</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>PassportJS</strong>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            <strong>Authorization</strong>
                                                        </span>
                                                    </li>
                                                </ul>

                                                <p>
                                                    This course is also unique in the way that it is structured and presented.
                                                    Many online courses are just a long series of "watch as I code" videos. This
                                                    course is different. I've incorporated everything I learned in my years of
                                                    teaching to make this course not only more effective but more engaging. The
                                                    course includes:
                                                </p>
                                                <ul className="_abc124">
                                                    <li>
                                                        <span className="_5f7g11">Lectures</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Code-Alongs</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Projects</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Exercises</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Research Assignments</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Slides</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Downloads</span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">Readings</span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    If you have any questions, please don't hesitate to contact me. I got into
                                                    this industry because I love working with people and helping students learn.
                                                    Sign up today and see how fun, exciting, and rewarding web development can be!
                                                </p>
                                            </div>
                                            <div className="_htg452 mt-35">
                                                <h3>Who this course is for :</h3>
                                                <ul className="_abc124">
                                                    <li>
                                                        <span className="_5f7g11">
                                                            This course is for anyone who wants to learn about web development,
                                                            regardless of previous experience
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            It's perfect for complete beginners with zero experience
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            It's also great for anyone who does have some experience in a few of
                                                            the technologies(like HTML and CSS) but not all
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="_5f7g11">
                                                            If you want to take ONE COURSE to learn everything you need to know
                                                            about web development, take this course
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="_htgdrt mt-35">
                                                <h3>What you'll learn</h3>
                                                <div className="_scd123">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ul className="_htg452 _abcd145">
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Donec ultricies elit porttitor, ultrices enim a,
                                                                            commodo dolor.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Nunc dapibus ligula sed justo porta, id volutpat odio
                                                                            iaculis.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Maecenas pharetra mi quis nisl mollis, molestie
                                                                            imperdiet lorem molestie.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>Maecenas ultricies felis in pulvinar blandit.</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Praesent ac libero consequat, efficitur tortor et,
                                                                            interdum sem.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Nullam non lacus nibh. Etiam et fringilla neque, ut
                                                                            vulputate sapien. Sed vitae tortor gravida, interdum
                                                                            felis at, pulvinar enim. Integer tempor urna leo.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Phasellus ultrices tellus sed volutpat vestibulum.
                                                                            Curabitur aliquet dictum leo non congue.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            In hac habitasse platea dictumst. Aenean vel fermentum
                                                                            neque.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Suspendisse semper feugiat urna dictum interdum.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <ul className="_htg452 _abcd145">
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Nullam non lacus nibh. Etiam et fringilla neque, ut
                                                                            vulputate sapien. Sed vitae tortor gravida, interdum
                                                                            felis at, pulvinar enim. Integer tempor urna leo.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Phasellus ultrices tellus sed volutpat vestibulum.
                                                                            Curabitur aliquet dictum leo non congue.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            In hac habitasse platea dictumst. Aenean vel fermentum
                                                                            neque.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Suspendisse semper feugiat urna dictum interdum.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Donec ultricies elit porttitor, ultrices enim a,
                                                                            commodo dolor.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Nunc dapibus ligula sed justo porta, id volutpat odio
                                                                            iaculis.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Maecenas pharetra mi quis nisl mollis, molestie
                                                                            imperdiet lorem molestie.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>Maecenas ultricies felis in pulvinar blandit.</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="_5f7g15">
                                                                        <i className="fas fa-check-circle"></i>
                                                                        <span>
                                                                            Praesent ac libero consequat, efficitur tortor et,
                                                                            interdum sem.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-courses" role="tabpanel">
                                        <div className="crse_content">
                                            <h3>Course content</h3>
                                            <div className="_112456">
                                                <ul className="accordion-expand-holder">
                                                    <li>
                                                        <span className="accordion-expand-all _d1452">Expand all</span>
                                                    </li>
                                                    <li>
                                                        <span className="_fgr123"> 402 lectures</span>
                                                    </li>
                                                    <li>
                                                        <span className="_fgr123">47:06:29</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="accordion" className="ui-accordion ui-widget ui-helper-reset">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">
                                                                Introduction to this Course
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">8 lectures</span>
                                                        <span className="section-header-length">22:08</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">A Note On Asking For Help</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:12</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Introducing Our TA</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:42</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Join the Online Community</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:51</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Why This Course?</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">
                                                                Preview
                                                            </a>
                                                            <span className="content-summary">07:48</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file-download-alt icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Syllabus Download</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">
                                                                Preview
                                                            </a>
                                                            <span className="content-summary">2 pages</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Syllabus Walkthrough</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">
                                                                Preview
                                                            </a>
                                                            <span className="content-summary">01:42</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Lecture Slides</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:11</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">
                                                                Introduction to Front End Development
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">6 lectures</span>
                                                        <span className="section-header-length">27:26</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">
                                                                Preview
                                                            </a>
                                                            <span className="content-summary">01.40</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about Setting Up Front-End Developer Environment
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:30</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Setting Up Front-End Developer Environment
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:11</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about Introduction to the Web</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:11</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Introduction to the Web</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10.08</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The Front End Holy Trinity</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">
                                                                Preview
                                                            </a>
                                                            <span className="content-summary">11:46</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Introduction to HTML</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">13 lectures</span>
                                                        <span className="section-header-length">58:55</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01.38</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    HTML Basicsng Up Front-End Developer Environment
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:53</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about Introduction to MDN</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:19</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Introduction to MDN</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:51</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">HTML Boilerplate and Comments</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:42</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Basic Tags</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">HTML Lists</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:32</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">HTML Lists Assignment</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">HTML Lists Assignment: SOLUTION</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:59</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Divs and Spans</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">HTML Attributes</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:00</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Recreate Webpage Assignment</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:00</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Recreate Webpage Assignment: SOLUTION</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:56</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Intermediate HTML</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">13 lectures</span>
                                                        <span className="section-header-length">01.12:29</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01.19</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">HTML Tables</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">06:03</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Tables Exercise</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:18</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Introduction to Forms</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">06:19</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Playing with Inputs</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:04</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The Form Tag</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">06:36</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Labels</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:32</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Form Validations</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:43</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Dropdowns and Radio Buttons</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">11:19</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Form Exercise</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">07:23</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Introduction to CSS</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">15 lectures</span>
                                                        <span className="section-header-length">01.40:15</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">02.28</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">CSS Basics</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:25</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Our First Stylesheet</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10:18</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about CSS Colors and Background and Border (next 2
                                                                    lectures)
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:20</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">CSS Colors</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">14:35</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Background and Border</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">06:58</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about Selectors Basics Todo List</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:32</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Selectors Basics Todo List</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10:43</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Introduction to Chrome Inspector</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:43</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">More Advanced Selectors</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about Specificity and the Cascade
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Specificity and the Cascade</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10:38</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about Selectors Practice Exercise
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:22</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Selectors Practice Exercise</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:28</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Selectors Practice Exercise: SOLUTION</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">16:48</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Intermediate CSS</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">16 lectures</span>
                                                        <span className="section-header-length">01.26:40</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01.40</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Text and Fonts</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:55</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">More Text and Fonts</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:42</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about Google Fonts</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:22</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Using Google Fonts</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:35</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Introduction to the Box Model</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">11:58</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Creating a Tic Tac Toe Board</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:41</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Creating a Tic Tac Toe Board: SOLUTION
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">07:43</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about Image Gallery Code Along Pt. 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:20</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Image Gallery Code Along Pt. 1</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:20</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about changes to Google Fonts</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:40</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Image Gallery Code Along Pt. 2</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:46</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">CSS Blog From Scratch Exercise Intro</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">
                                                                Preview
                                                            </a>
                                                            <span className="content-summary">03:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    CSS Blog From Scratch Exercise SOLUTION Pt. 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:38</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    CSS Blog From Scratch Exercise SOLUTION Pt. 2
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:12</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    CSS Blog From Scratch Exercise SOLUTION Pt. 3
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">07:28</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Bootstrap</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">16 lectures</span>
                                                        <span className="section-header-length">01.59:54</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">02.28</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about Bootstrap versions</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:44</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">What is Bootstrap?</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:02</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Adding Bootstrap to a Project</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:15</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Forms and Inputs</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">14:00</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Nav Bars</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">15:44</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about The Grid System</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:11</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The Grid System</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:43</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Grid System Pt. 2</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">11:43</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about Bootstrap Image Gallery Pt. 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:55</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Bootstrap Image Gallery Pt. 1</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">14:20</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Note about Font Awesome</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:16</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Bootstrap Image Gallery Pt. 2</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:46</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Creating a Startup Landing Page Code Along
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">14:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Creating a Startup Landing Page Code Along Pt. 2
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10:30</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about making bootstrap responsive on mobile devices
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:14</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Bootstrap 4!</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">11 lectures</span>
                                                        <span className="section-header-length">01.16:28</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">A History of Bootstrap 4</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04.40</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The Bootstrap 4 Documentation</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">02:24</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Changes from Bootstrap 3 to 4</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">07:52</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Bootstrap 4 Code/Solutions Download</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:41</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Getting Started With Bootstrap 4</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:15</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Bootstrap 4 Colors and Backgrounds</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:59</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Typography</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">11:12</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">New Fancy Spacing Utilities</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">12:28</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Responsive Breakpoints</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10:55</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Bootstrap4 Navbars</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:20</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The New Display Utility</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">07:26</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Bootstrap 4: Flexbox and Layout</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10:14</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Flexbox Utilities Part 2</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">07:23</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Navs and Flexbox</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">09:56</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The Bootstrap 4 Grid</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">08:56</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">PATTERN PROJECT Part 1</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">12:06</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">PATTERN PROJECT Part 2</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">11:30</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The Grid + Flexbox</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">11:44</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Museum of Candy Project Part 1</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:36</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">
                                                                    Note about Museum of Candy Project Part 2
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:12</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
                                                >
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className="uil uil-presentation-play crse_icon"></i>
                                                            <span className="section-title-text">Introduction to JavaScript</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">12 lectures</span>
                                                        <span className="section-header-length">56:21</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04.41</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">The JavaScript Console</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">02:22</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Primitives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">13:22</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-file icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Primitives Exercises</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:21</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Variables</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">06:15</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Null and Undefined</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">02:33</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Useful Built-In Methods</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">05:12</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Writing JavaScript in a Separate File</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:28</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">JS Stalker Exercise</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:55</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">JS Stalker Exercise: SOLUTION</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:45</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Age Calculator Exercise</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">01:10</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className="uil uil-play-circle icon_142"></i>
                                                            <div className="top">
                                                                <div className="title">Age Calculator Exercise: SOLUTION</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">04:01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="btn1458" href="#">
                                                20 More Sections
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-reviews" role="tabpanel">
                                        <div className="student_reviews">
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <div className="reviews_left">
                                                        <h3>Student Feedback</h3>
                                                        <div className="total_rating">
                                                            <div className="_rate001">4.6</div>
                                                            <div className="rating-box">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star half-star"></span>
                                                            </div>
                                                            <div className="_rate002">Course Rating</div>
                                                        </div>
                                                        <div className="_rate003">
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div
                                                                        className="progress-bar w-70"
                                                                        role="progressbar"
                                                                        aria-valuenow={70}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                </div>
                                                                <div className="_rate002">70%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div
                                                                        className="progress-bar w-30"
                                                                        role="progressbar"
                                                                        aria-valuenow={30}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">40%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div
                                                                        className="progress-bar w-5"
                                                                        role="progressbar"
                                                                        aria-valuenow={10}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">5%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div
                                                                        className="progress-bar w-2"
                                                                        role="progressbar"
                                                                        aria-valuenow={2}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">1%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div
                                                                        className="progress-bar w-1"
                                                                        role="progressbar"
                                                                        aria-valuenow={0}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">1%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="review_right">
                                                        <div className="review_right_heading">
                                                            <h3>Reviews</h3>
                                                            <div className="review_search">
                                                                <input
                                                                    className="rv_srch"
                                                                    type="text"
                                                                    placeholder="Search reviews..."
                                                                />
                                                                <button className="rvsrch_btn">
                                                                    <i className="uil uil-search"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review_all120">
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src={IMAGES.avatar_instructor_0} alt="" />
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">John Doe</h4>
                                                                    <span className="time_145">2 hour ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star half-star"></span>
                                                            </div>
                                                            <p className="rvds10">
                                                                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                                                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                                Fusce lacinia, nunc sit amet tincidunt venenatis.
                                                            </p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-1" name="radio" type="radio" />
                                                                        <label htmlFor="radio-1" className="radio-label">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-2" name="radio" type="radio" />
                                                                        <label htmlFor="radio-2" className="radio-label">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">
                                                                    Report
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src={IMAGES.avatar_instructor_0} alt="" />
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Jassica William</h4>
                                                                    <span className="time_145">12 hour ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                            </div>
                                                            <p className="rvds10">
                                                                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                                                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                                Fusce lacinia, nunc sit amet tincidunt venenatis.
                                                            </p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-3" name="radio1" type="radio" />
                                                                        <label htmlFor="radio-3" className="radio-label">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-4" name="radio1" type="radio" />
                                                                        <label htmlFor="radio-4" className="radio-label">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">
                                                                    Report
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src={IMAGES.avatar_instructor_0} alt="" />
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Albert Dua</h4>
                                                                    <span className="time_145">5 days ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star half-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                            </div>
                                                            <p className="rvds10">
                                                                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                                                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                                Fusce lacinia, nunc sit amet tincidunt venenatis.
                                                            </p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-5" name="radio2" type="radio" />
                                                                        <label htmlFor="radio-5" className="radio-label">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-6" name="radio2" type="radio" />
                                                                        <label htmlFor="radio-6" className="radio-label">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">
                                                                    Report
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src={IMAGES.avatar_instructor_0} alt="" />
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Zoena Singh</h4>
                                                                    <span className="time_145">15 days ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                            </div>
                                                            <p className="rvds10">
                                                                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                                                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                                Fusce lacinia, nunc sit amet tincidunt venenatis.
                                                            </p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-7" name="radio3" type="radio" />
                                                                        <label htmlFor="radio-7" className="radio-label">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-8" name="radio3" type="radio" />
                                                                        <label htmlFor="radio-8" className="radio-label">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">
                                                                    Report
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src={IMAGES.avatar_instructor_0} alt="" />
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Joy Dua</h4>
                                                                    <span className="time_145">20 days ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                            </div>
                                                            <p className="rvds10">
                                                                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                                                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                                Fusce lacinia, nunc sit amet tincidunt venenatis.
                                                            </p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-9" name="radio4" type="radio" />
                                                                        <label htmlFor="radio-9" className="radio-label">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-10" name="radio4" type="radio" />
                                                                        <label htmlFor="radio-10" className="radio-label">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">
                                                                    Report
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <a href="#" className="more_reviews">
                                                                See More Reviews
                                                            </a>
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
            <footer className="footer mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="about_us.html">About</a>
                                <a href="our_blog.html">Blog</a>
                                <a href="career.html">Careers</a>
                                <a href="press.html">Press</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="help.html">Help</a>
                                <a href="coming_soon.html">Advertise</a>
                                <a href="coming_soon.html">Developers</a>
                                <a href="contact_us.html">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f1">
                                <a href="terms_of_use.html">Copyright Policy</a>
                                <a href="terms_of_use.html">Terms</a>
                                <a href="terms_of_use.html">Privacy Policy</a>
                                <a href="sitemap.html">Sitemap</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item_f3">
                                <a href="#" className="btn1542">
                                    Teach on Cursus
                                </a>
                                <div className="lng_btn">
                                    <div
                                        className="ui language bottom right pointing dropdown floating"
                                        id="languages"
                                        data-content="Select Language"
                                    >
                                        <a href="#">
                                            <i className="uil uil-globe lft"></i>Language
                                            <i className="uil uil-angle-down rgt"></i>
                                        </a>
                                        <div className="menu">
                                            <div className="scrolling menu">
                                                <div className="item" data-percent="100" data-value="en" data-english="English">
                                                    <span className="description">English</span>
                                                    English
                                                </div>
                                                <div className="item" data-percent="94" data-value="da" data-english="Danish">
                                                    <span className="description">dansk</span>
                                                    Danish
                                                </div>
                                                <div className="item" data-percent="94" data-value="es" data-english="Spanish">
                                                    <span className="description">Español</span>
                                                    Spanish
                                                </div>
                                                <div className="item" data-percent="34" data-value="zh" data-english="Chinese">
                                                    <span className="description">简体中文</span>
                                                    Chinese
                                                </div>
                                                <div
                                                    className="item"
                                                    data-percent="54"
                                                    data-value="zh_TW"
                                                    data-english="Chinese (Taiwan)"
                                                >
                                                    <span className="description">中文 (臺灣)</span>
                                                    Chinese (Taiwan)
                                                </div>
                                                <div className="item" data-percent="79" data-value="fa" data-english="Persian">
                                                    <span className="description">پارسی</span>
                                                    Persian
                                                </div>
                                                <div className="item" data-percent="41" data-value="fr" data-english="French">
                                                    <span className="description">Français</span>
                                                    French
                                                </div>
                                                <div className="item" data-percent="37" data-value="el" data-english="Greek">
                                                    <span className="description">ελληνικά</span>
                                                    Greek
                                                </div>
                                                <div className="item" data-percent="37" data-value="ru" data-english="Russian">
                                                    <span className="description">Русский</span>
                                                    Russian
                                                </div>
                                                <div className="item" data-percent="36" data-value="de" data-english="German">
                                                    <span className="description">Deutsch</span>
                                                    German
                                                </div>
                                                <div className="item" data-percent="23" data-value="it" data-english="Italian">
                                                    <span className="description">Italiano</span>
                                                    Italian
                                                </div>
                                                <div className="item" data-percent="21" data-value="nl" data-english="Dutch">
                                                    <span className="description">Nederlands</span>
                                                    Dutch
                                                </div>
                                                <div
                                                    className="item"
                                                    data-percent="19"
                                                    data-value="pt_BR"
                                                    data-english="Portuguese"
                                                >
                                                    <span className="description">Português(BR)</span>
                                                    Portuguese
                                                </div>
                                                <div className="item" data-percent="17" data-value="id" data-english="Indonesian">
                                                    <span className="description">Indonesian</span>
                                                    Indonesian
                                                </div>
                                                <div className="item" data-percent="12" data-value="lt" data-english="Lithuanian">
                                                    <span className="description">Lietuvių</span>
                                                    Lithuanian
                                                </div>
                                                <div className="item" data-percent="11" data-value="tr" data-english="Turkish">
                                                    <span className="description">Türkçe</span>
                                                    Turkish
                                                </div>
                                                <div className="item" data-percent="10" data-value="kr" data-english="Korean">
                                                    <span className="description">한국어</span>
                                                    Korean
                                                </div>
                                                <div className="item" data-percent="7" data-value="ar" data-english="Arabic">
                                                    <span className="description">العربية</span>
                                                    Arabic
                                                </div>
                                                <div className="item" data-percent="6" data-value="hu" data-english="Hungarian">
                                                    <span className="description">Magyar</span>
                                                    Hungarian
                                                </div>
                                                <div className="item" data-percent="6" data-value="vi" data-english="Vietnamese">
                                                    <span className="description">tiếng Việt</span>
                                                    Vietnamese
                                                </div>
                                                <div className="item" data-percent="5" data-value="sv" data-english="Swedish">
                                                    <span className="description">svenska</span>
                                                    Swedish
                                                </div>
                                                <div className="item" data-precent="4" data-value="pl" data-english="Polish">
                                                    <span className="description">polski</span>
                                                    Polish
                                                </div>
                                                <div className="item" data-percent="6" data-value="ja" data-english="Japanese">
                                                    <span className="description">日本語</span>
                                                    Japanese
                                                </div>
                                                <div className="item" data-percent="0" data-value="ro" data-english="Romanian">
                                                    <span className="description">românește</span>
                                                    Romanian
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
