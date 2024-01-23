const Body = () => {
    return (
        <div className="wrapper">
            <div className="sa4d25">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="st_title">
                                <i className="uil uil-analysis"></i> Create New Course
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="course_tabs_1">
                                <div id="add-course-tab" className="step-app">
                                    <ul className="step-steps">
                                        <li className="active">
                                            <a href="#tab_step1">
                                                <span className="number"></span>
                                                <span className="step-name">General Information</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab_step2">
                                                <span className="number"></span>
                                                <span className="step-name">View</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab_step3">
                                                <span className="number"></span>
                                                <span className="step-name">Course Content</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab_step4">
                                                <span className="number"></span>
                                                <span className="step-name">Extra Information</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="step-content">
                                        <div className="step-tab-panel step-tab-info active" id="tab_step1">
                                            <div className="tab-from-content">
                                                <div className="title-icon">
                                                    <h3 className="title">
                                                        <i className="uil uil-info-circle"></i>General Information
                                                    </h3>
                                                </div>
                                                <div className="course__form">
                                                    <div className="general_info10">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                    <label>Course Title*</label>
                                                                    <div className="ui left icon input swdh19">
                                                                        <input
                                                                            className="prompt srch_explore"
                                                                            type="text"
                                                                            placeholder="Insert your course title."
                                                                            name="title"
                                                                            data-purpose="edit-course-title"
                                                                            maxLength={60}
                                                                            id="main[title]"
                                                                            value=""
                                                                        />
                                                                        <div className="badge_num">60</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                    <label>Course Subtitle*</label>
                                                                    <div className="ui left icon input swdh19">
                                                                        <input
                                                                            className="prompt srch_explore"
                                                                            type="text"
                                                                            placeholder="Insert your course Subtitle."
                                                                            name="subtitle"
                                                                            data-purpose="edit-course-title"
                                                                            maxLength={60}
                                                                            id="sub[title]"
                                                                            value=""
                                                                        />
                                                                        <div className="badge_num2">120</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="course_des_textarea mt-30 lbel25">
                                                                    <label>Course Description*</label>
                                                                    <div className="course_des_bg">
                                                                        <ul className="course_des_ttle">
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-bold"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-italic"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-list-ul"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-left-to-right-text-direction"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-right-to-left-text-direction"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-list-ui-alt"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-link"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-text-size"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="uil uil-text"></i>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="textarea_dt">
                                                                            <div className="ui form swdh339">
                                                                                <div className="field">
                                                                                    <textarea
                                                                                        rows={5}
                                                                                        name="description"
                                                                                        id="id_course_description"
                                                                                        placeholder="Insert your course description"
                                                                                    ></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-12">
                                                                <div className="mt-30 lbel25">
                                                                    <label>Language*</label>
                                                                </div>
                                                                <select className="ui hj145 dropdown cntry152 prompt srch_explore">
                                                                    <option value="">Select Language</option>
                                                                    <option value="1">English</option>
                                                                    <option value="2">Español</option>
                                                                    <option value="3">Português</option>
                                                                    <option value="4">日本語</option>
                                                                    <option value="5">Deutsch</option>
                                                                    <option value="6">Français</option>
                                                                    <option value="7">Türkçe</option>
                                                                    <option value="8">हिन्दी</option>
                                                                    <option value="9">Italiano</option>
                                                                    <option value="10">Polski</option>
                                                                    <option value="11">ภาษาไทย</option>
                                                                    <option value="12">Română</option>
                                                                    <option value="13">Telugu</option>
                                                                    <option value="14">मराठी</option>
                                                                    <option value="15">ਪੰਜਾਬੀ</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="mt-30 lbel25">
                                                                    <label>Course Category*</label>
                                                                </div>
                                                                <select className="ui hj145 dropdown cntry152 prompt srch_explore">
                                                                    <option value="">Select Category</option>
                                                                    <option value="1">Development</option>
                                                                    <option value="2">Business</option>
                                                                    <option value="3">Finance & Accounting</option>
                                                                    <option value="4">IT & Software</option>
                                                                    <option value="5">Office Productivity</option>
                                                                    <option value="6">Personal Development</option>
                                                                    <option value="7">Design</option>
                                                                    <option value="8">Marketing</option>
                                                                    <option value="9">Lifestyle</option>
                                                                    <option value="10">Photography</option>
                                                                    <option value="11">Health & Fitness</option>
                                                                    <option value="12">Music</option>
                                                                    <option value="13">Teaching & Academics</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="mt-30 lbel25">
                                                                    <label>Course Subcategory*</label>
                                                                </div>
                                                                <select className="ui hj145 dropdown cntry152 prompt srch_explore">
                                                                    <option value="">Select Subcategory</option>
                                                                    <option value="1">Javascript</option>
                                                                    <option value="2">Angular</option>
                                                                    <option value="3">React</option>
                                                                    <option value="4">CSS</option>
                                                                    <option value="5">PHP</option>
                                                                    <option value="6">Node.Js</option>
                                                                    <option value="7">WordPress</option>
                                                                    <option value="8">Vue JS</option>
                                                                    <option value="9">Shopify</option>
                                                                    <option value="10">Magento</option>
                                                                    <option value="11">Open Cart </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="price_course">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="price_title">
                                                                    <h4>
                                                                        <i className="uil uil-dollar-sign-alt"></i>Pricing
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-6">
                                                                <div className="mt-30 lbel25">
                                                                    <label>Currency*</label>
                                                                </div>
                                                                <select className="ui hj145 dropdown cntry152 prompt srch_explore">
                                                                    <option value="">USD</option>
                                                                    <option value="1">USD</option>
                                                                    <option value="2">CAD</option>
                                                                    <option value="3">BRL</option>
                                                                    <option value="4">EUR</option>
                                                                    <option value="5">GBP</option>
                                                                    <option value="6">INR</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                                <div className="mt-30 lbel25">
                                                                    <label>Select*</label>
                                                                </div>
                                                                <select className="ui hj145 dropdown cntry152 prompt srch_explore">
                                                                    <option value="">Select</option>
                                                                    <option value="0">Free</option>
                                                                    <option value="1">$24.99 (tier 1)</option>
                                                                    <option value="2">$29.99 (tier 2)</option>
                                                                    <option value="3">$34.99 (tier 3)</option>
                                                                    <option value="4">$39.99 (tier 4)</option>
                                                                    <option value="5">$44.99 (tier 5)</option>
                                                                    <option value="6">$49.99 (tier 6)</option>
                                                                    <option value="7">$54.99 (tier 7)</option>
                                                                    <option value="8">$59.99 (tier 8)</option>
                                                                    <option value="9">$64.99 (tier 9)</option>
                                                                    <option value="10">$69.99 (tier 10)</option>
                                                                    <option value="11">$74.99 (tier 11)</option>
                                                                    <option value="12">$79.99 (tier 12)</option>
                                                                    <option value="13">$84.99 (tier 13)</option>
                                                                    <option value="14">$89.99 (tier 14)</option>
                                                                    <option value="15">$94.99 (tier 15)</option>
                                                                    <option value="16">$99.99 (tier 16)</option>
                                                                    <option value="17">$104.99 (tier 17)</option>
                                                                    <option value="18">$109.99 (tier 18)</option>
                                                                    <option value="19">$114.99 (tier 19)</option>
                                                                    <option value="20">$119.99 (tier 20)</option>
                                                                    <option value="21">$124.99 (tier 21)</option>
                                                                    <option value="22">$129.99 (tier 22)</option>
                                                                    <option value="23">$134.99 (tier 23)</option>
                                                                    <option value="24">$139.99 (tier 24)</option>
                                                                    <option value="25">$144.99 (tier 25)</option>
                                                                    <option value="26">$149.99 (tier 26)</option>
                                                                    <option value="27">$154.99 (tier 27)</option>
                                                                    <option value="28">$159.99 (tier 28)</option>
                                                                    <option value="29">$164.99 (tier 29)</option>
                                                                    <option value="30">$169.99 (tier 30)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step-tab-panel step-tab-gallery" id="tab_step2">
                                            <div className="tab-from-content">
                                                <div className="title-icon">
                                                    <h3 className="title">
                                                        <i className="uil uil-image-upload"></i>View
                                                    </h3>
                                                </div>
                                                <div className="course__form">
                                                    <div className="view_info10">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="view_all_dt">
                                                                    <div className="view_img_left">
                                                                        <div className="view__img">
                                                                            <img src="images/courses/add_img.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="view_img_right">
                                                                        <h4>Cover Image</h4>
                                                                        <p>
                                                                            Upload your course image here. It must meet our course
                                                                            image quality standards to be accepted. Important
                                                                            guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or
                                                                            .png. no text on the image.
                                                                        </p>
                                                                        <div className="upload__input">
                                                                            <div className="input-group">
                                                                                <div className="custom-file">
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input"
                                                                                        id="inputGroupFile04"
                                                                                    />
                                                                                    <label
                                                                                        className="custom-file-label"
                                                                                        htmlFor="inputGroupFile04"
                                                                                    >
                                                                                        No Choose file
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="view_all_dt">
                                                                    <div className="view_img_left">
                                                                        <div className="view__img">
                                                                            <img src="images/courses/add_video.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="view_img_right">
                                                                        <h4>Promotional Video</h4>
                                                                        <p>
                                                                            Students who watch a well-made promo video are 5X more
                                                                            likely to enroll in your course. We've seen that
                                                                            statistic go up to 10X for exceptionally awesome
                                                                            videos. Learn how to make yours awesome!
                                                                        </p>
                                                                        <div className="upload__input">
                                                                            <div className="input-group">
                                                                                <div className="custom-file">
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input"
                                                                                        id="inputGroupFile05"
                                                                                    />
                                                                                    <label
                                                                                        className="custom-file-label"
                                                                                        htmlFor="inputGroupFile05"
                                                                                    >
                                                                                        No Choose file
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

                                        <div className="step-tab-panel step-tab-location" id="tab_step3">
                                            <div className="tab-from-content">
                                                <div className="title-icon">
                                                    <h3 className="title">
                                                        <i className="uil uil-film"></i>Course Content
                                                    </h3>
                                                </div>
                                                <div className="course__form">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="extra_info">
                                                                <h4 className="part__title">New Course Content</h4>
                                                            </div>
                                                            <div className="view_info10">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className="ui search focus mt-30 lbel25">
                                                                            <label>Course Content Title*</label>
                                                                            <div className="ui left icon input swdh19">
                                                                                <input
                                                                                    className="prompt srch_explore"
                                                                                    type="text"
                                                                                    placeholder="Insert your course content title."
                                                                                    name="title"
                                                                                    data-purpose="edit-course-title"
                                                                                    maxLength={60}
                                                                                    id="Content[title]"
                                                                                    value=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className="lecture_title">
                                                                            <h4>Add Lecture</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-12">
                                                                        <div className="ui search focus mt-30 lbel25">
                                                                            <label>Lecture Title*</label>
                                                                            <div className="ui left icon input swdh19">
                                                                                <input
                                                                                    className="prompt srch_explore"
                                                                                    type="text"
                                                                                    placeholder="Insert your lecture title."
                                                                                    name="title"
                                                                                    data-purpose="edit-course-title"
                                                                                    maxLength={60}
                                                                                    id="lecture[title]"
                                                                                    value=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="part_input mt-30 lbel25">
                                                                            <label>File*</label>
                                                                            <div className="input-group">
                                                                                <div className="custom-file">
                                                                                    <input
                                                                                        type="file"
                                                                                        className="custom-file-input"
                                                                                        id="inputGroupFile06"
                                                                                    />
                                                                                    <label
                                                                                        className="custom-file-label"
                                                                                        htmlFor="inputGroupFile06"
                                                                                    >
                                                                                        No Choose file - (Pdf, Video)
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="ui search focus mt-30 lbel25">
                                                                            <label>Sort</label>
                                                                            <div className="ui left icon input swdh19">
                                                                                <input
                                                                                    className="prompt srch_explore"
                                                                                    type="number"
                                                                                    name="sort"
                                                                                    min="0"
                                                                                    max="100"
                                                                                    placeholder="0"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className="course_des_textarea mt-30 lbel25">
                                                                            <label>Description*</label>
                                                                            <div className="course_des_bg">
                                                                                <ul className="course_des_ttle">
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-bold"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-italic"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-list-ul"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-left-to-right-text-direction"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-right-to-left-text-direction"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-list-ui-alt"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-link"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-text-size"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">
                                                                                            <i className="uil uil-text"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="textarea_dt">
                                                                                    <div className="ui form swdh339">
                                                                                        <div className="field">
                                                                                            <textarea
                                                                                                rows={5}
                                                                                                name="description"
                                                                                                id="id_part_description"
                                                                                                placeholder="Insert your course part description"
                                                                                            ></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-5 col-md-6">
                                                                        <div className="ui search focus mt-30 lbel25">
                                                                            <label>Volume*</label>
                                                                            <div className="ui left icon input swdh19 swdh95">
                                                                                <input
                                                                                    className="prompt srch_explore"
                                                                                    type="number"
                                                                                    min="0"
                                                                                    name="size"
                                                                                    required
                                                                                    placeholder="0"
                                                                                />
                                                                                <div className="badge_mb">MB</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-5 col-md-6">
                                                                        <div className="ui search focus mt-30 lbel25">
                                                                            <label>Duration*</label>
                                                                            <div className="ui left icon input swdh19 swdh55">
                                                                                <input
                                                                                    className="prompt srch_explore"
                                                                                    type="number"
                                                                                    min="0"
                                                                                    name="duration"
                                                                                    required
                                                                                    placeholder="0"
                                                                                />
                                                                                <div className="badge_min">Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-12">
                                                                        <button className="part_btn_save prt-sv" type="submit">
                                                                            Save Lecture
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className="table-responsive mt-50 mb-0">
                                                                            <table className="table ucp-table">
                                                                                <thead className="thead-s">
                                                                                    <tr>
                                                                                        <th className="text-center" scope="col">
                                                                                            Lecture
                                                                                        </th>
                                                                                        <th className="cell-ta">Title</th>
                                                                                        <th className="text-center" scope="col">
                                                                                            Volume
                                                                                        </th>
                                                                                        <th className="text-center" scope="col">
                                                                                            Duration
                                                                                        </th>
                                                                                        <th className="text-center" scope="col">
                                                                                            Page
                                                                                        </th>
                                                                                        <th className="text-center" scope="col">
                                                                                            File
                                                                                        </th>
                                                                                        <th className="text-center" scope="col">
                                                                                            Controls
                                                                                        </th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-center">1</td>
                                                                                        <td className="cell-ta">
                                                                                            Lecture Content Title
                                                                                        </td>
                                                                                        <td className="text-center">25</td>
                                                                                        <td className="text-center">6</td>
                                                                                        <td className="text-center">0</td>
                                                                                        <td className="text-center">
                                                                                            <a href="#">Video</a>
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            <a
                                                                                                href="#"
                                                                                                title="Edit"
                                                                                                className="gray-s"
                                                                                            >
                                                                                                <i className="uil uil-edit-alt"></i>
                                                                                            </a>
                                                                                            <a
                                                                                                href="#"
                                                                                                title="Delete"
                                                                                                className="gray-s"
                                                                                            >
                                                                                                <i className="uil uil-trash-alt"></i>
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">2</td>
                                                                                        <td className="cell-ta">
                                                                                            Lecture Content Title
                                                                                        </td>
                                                                                        <td className="text-center">25</td>
                                                                                        <td className="text-center">0</td>
                                                                                        <td className="text-center">3</td>
                                                                                        <td className="text-center">
                                                                                            <a href="#">File</a>
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            <a
                                                                                                href="#"
                                                                                                title="Edit"
                                                                                                className="gray-s"
                                                                                            >
                                                                                                <i className="uil uil-edit-alt"></i>
                                                                                            </a>
                                                                                            <a
                                                                                                href="#"
                                                                                                title="Delete"
                                                                                                className="gray-s"
                                                                                            >
                                                                                                <i className="uil uil-trash-alt"></i>
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className="save_content">
                                                                            <button className="save_content_btn" type="submit">
                                                                                Save Course Content
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="table-responsive mt-30">
                                                    <table className="table ucp-table" id="content-table">
                                                        <thead className="thead-s">
                                                            <tr>
                                                                <th className="text-center" scope="col">
                                                                    Content
                                                                </th>
                                                                <th className="cell-ta">Title</th>
                                                                <th className="text-center" scope="col">
                                                                    lectures
                                                                </th>
                                                                <th className="text-center" scope="col">
                                                                    Volume
                                                                </th>
                                                                <th className="text-center" scope="col">
                                                                    Duration
                                                                </th>
                                                                <th className="text-center" scope="col">
                                                                    Upload Date
                                                                </th>
                                                                <th className="text-center" scope="col">
                                                                    Files
                                                                </th>
                                                                <th className="text-center" scope="col">
                                                                    Controls
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center">1</td>
                                                                <td className="cell-ta">Course Content Title</td>
                                                                <td className="text-center">5</td>
                                                                <td className="text-center">50</td>
                                                                <td className="text-center">15</td>
                                                                <td className="text-center">6 April 2019</td>
                                                                <td className="text-center">
                                                                    <a href="#">View</a>
                                                                </td>
                                                                <td className="text-center">
                                                                    <a href="#" title="Edit" className="gray-s">
                                                                        <i className="uil uil-edit-alt"></i>
                                                                    </a>
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

                                        <div className="step-tab-panel step-tab-amenities" id="tab_step4">
                                            <div className="tab-from-content">
                                                <div className="title-icon">
                                                    <h3 className="title">
                                                        <i className="uil uil-file-copy-alt"></i>Extra Information
                                                    </h3>
                                                </div>
                                                <div className="course__form">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="extra_info">
                                                                <h4 className="part__title">Captions</h4>
                                                            </div>
                                                            <div className="view_info10">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="caption__check mt-30">
                                                                            <div className="ui form">
                                                                                <div className="grouped fields">
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    English
                                                                                                    <span className="filter__counter">
                                                                                                        (300)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Español
                                                                                                    <span className="filter__counter">
                                                                                                        (210)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Português
                                                                                                    <span className="filter__counter">
                                                                                                        (170)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Italiano
                                                                                                    <span className="filter__counter">
                                                                                                        (174)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Français
                                                                                                    <span className="filter__counter">
                                                                                                        (120)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Polski
                                                                                                    <span className="filter__counter">
                                                                                                        (130)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Deutsch
                                                                                                    <span className="filter__counter">
                                                                                                        (30)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    Bahasa Indonesia
                                                                                                    <span className="filter__counter">
                                                                                                        (20)
                                                                                                    </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="ui form checkbox_sign cp_458">
                                                                                        <div className="inline field">
                                                                                            <div className="ui checkbox mncheck">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    tabIndex={0}
                                                                                                    className="hidden"
                                                                                                />
                                                                                                <label>
                                                                                                    ภาษาไทย
                                                                                                    <span className="filter__counter">
                                                                                                        (10)
                                                                                                    </span>
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-footer step-tab-pager">
                                        <button data-direction="prev" className="btn btn-default steps_btn">
                                            PREVIOUS
                                        </button>
                                        <button data-direction="next" className="btn btn-default steps_btn">
                                            Next
                                        </button>
                                        <button data-direction="finish" className="btn btn-default steps_btn">
                                            Submit for Review
                                        </button>
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
    );
};

export default Body;
