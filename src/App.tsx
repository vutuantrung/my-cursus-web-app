import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/styles/css/vertical-responsive-menu.min.css';
import './assets/styles/css/jquery-steps.css';
// import './assets/styles/css/responsive.css';
import './assets/styles/css/night-mode.css';
// import './assets/styles/css/instructor-responsive.css';
import './assets/styles/css/style.css';

import 'semantic-ui-css/semantic.min.css';

import CreateNewCoursePage from './pages/newCourses';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

// import InstructorMessage from './pages/instructorMessage';
// import InstructorNotifications from './pages/notifications';
// import InstructorDashboard from './pages/instructorDashboard';
// import InstructorCourses from './pages/instructorCourses';
// import InstructorAnalyics from './pages/instructorAnalyics';
// import InstructorCertificate from './pages/instructorCertificate';
// import InstructorReviews from './pages/instructorReviews';
// import InstructorEarning from './pages/instructorEarning';
// import InstructorPayout from './pages/instructorPayout';
// import InstructorStatements from './pages/instructorStatements';
// import InstructorVerification from './pages/instructorVerification';

import Settings from './pages/settings';
import Feedback from './pages/feedback';
import LiveStream from './pages/liveStreams';
import LiveOutput from './pages/liveOutput';
import Explore from './pages/explore';
import CoursDetails from './pages/coursDetails';
import SavedCourses from './pages/savedCourses';
import InstructorProfile from './pages/instructorProfile';
import CertificateCenter from './pages/certificateCenter';
import CertificateFillForm from './pages/certificateFillForm';
import CertificateTestView from './pages/certificateTestView';
import CertificateTestResult from './pages/certificateTestResult';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import SignUpSteps from './pages/signUpSteps';
import PaidMembership from './pages/paidMembership';
import CheckoutMemberShip from './pages/checkoutMembership';
import Invoice from './pages/invoice';
import ApplyJob from './pages/applyJob';
import BlogSingleView from './pages/blogSingleView';
import AddStreaming from './pages/addStreaming';
import SearchResult from './pages/searchResult';
import Thankyou from './pages/thankyou';
import CommingSoon from './pages/commingSoon';
import About from './pages/about';
import OurBlog from './pages/about/OurBlog';
import CompanyDetails from './pages/about/CompanyDetails';
import Career from './pages/about/Career';
import Press from './pages/about/Press';
import AboutUs from './pages/about/AboutUs';
import AboutMe from './pages/myInstructorProfileView/AboutMe';
import Discussions from './pages/myInstructorProfileView/Discussions';
import MyCourses from './pages/myInstructorProfileView/MyCourses';
import PurchasedCourses from './pages/myInstructorProfileView/PurchasedCourses';
import Subscriptions from './pages/myInstructorProfileView/Subscriptions';
import CertificateStartForm from './pages/certificateStartForm';
import Help from './pages/help';
import ReportHistory from './pages/reportHistory';
import ContactUs from './pages/contactUs';
import TermsOfUse from './pages/termsOfUse';
import Main from './pages/main';
import { Error404 } from './pages/errors';
import { Body } from './pages/main/Body';

import MyInstructorProfileView from './pages/myInstructorProfileView';

import Instructor from './pages/instructor/main';
import InstructorCreateCourse from './pages/instructor/createCourse/InstructorCreateCourse';
import InstructorCourses from './pages/instructor/courses/InstructorCourses';
import InstructorDashboard from './pages/instructor/dashboard/InstructorDashboard';
import InstructorAnalyics from './pages/instructor/analyics/InstructorAnalyics';
import InstructorMessages from './pages/instructor/messages/InstructorMessages';
import InstructorNotifications from './pages/instructor/notifications/InstructorNotifications';
import InstructorCertificates from './pages/instructor/certificates/InstructorCertificates';
import InstructorReviews from './pages/instructor/reviews/InstructorReviews';
import InstructorEarning from './pages/instructor/earning/InstructorEarning';
import InstructorPayout from './pages/instructor/payout/InstructorPayout';
import InstructorStatement from './pages/instructor/statement/InstructorStatement';
import InstructorVerification from './pages/instructor/verification/InstructorVerification';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main />}>
                    <Route path="" element={<Body />} />

                    <Route path="explore" element={<Explore />} />
                    <Route path="savedCourses" element={<SavedCourses />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
                    <Route path="reportHistory" element={<ReportHistory />} />
                    <Route path="feedback" element={<Feedback />} />

                    <Route path="liveStream" element={<LiveStream />}>
                        {/* <Route path="all" element={<LiveOutput />} /> */}
                        <Route path="output/:id" element={<LiveOutput />} />
                    </Route>

                    <Route path="instructorProfile">
                        <Route path="all" element={<InstructorProfile />} />
                        <Route path="view/:id" element={<InstructorProfile />} />
                    </Route>

                    <Route path="coursDetails/:id" element={<CoursDetails />} />

                    <Route path="myInstructorProfile" element={<MyInstructorProfileView />}>
                        <Route path="aboutMe" element={<AboutMe />} />
                        <Route path="discussions" element={<Discussions />} />
                        <Route path="myCourses" element={<MyCourses />} />
                        <Route path="purchasedCourses" element={<PurchasedCourses />} />
                        <Route path="subscriptions" element={<Subscriptions />} />
                    </Route>

                    <Route path="addStream" element={<AddStreaming />} />
                </Route>

                <Route path="about" element={<About />}>
                    <Route path="aboutUs" element={<AboutUs />} />
                    <Route path="ourBlog" element={<OurBlog />} />
                    <Route path="companyDetails" element={<CompanyDetails />} />
                    <Route path="career" element={<Career />} />
                    <Route path="press" element={<Press />} />
                </Route>

                <Route path="instructor" element={<Instructor />}>
                    <Route path="dashboard" element={<InstructorDashboard />} />
                    <Route path="courses" element={<InstructorCourses />} />
                    <Route path="analyics" element={<InstructorAnalyics />} />
                    <Route path="createCourse" element={<InstructorCreateCourse />} />
                    <Route path="messages" element={<InstructorMessages />} />
                    <Route path="notifications" element={<InstructorNotifications />} />
                    <Route path="certificates" element={<InstructorCertificates />} />
                    <Route path="reviews" element={<InstructorReviews />} />
                    <Route path="earning" element={<InstructorEarning />} />
                    <Route path="payout" element={<InstructorPayout />} />
                    <Route path="statement" element={<InstructorStatement />} />
                    <Route path="verification" element={<InstructorVerification />} />
                </Route>

                <Route path="termsOfUse" element={<TermsOfUse />} />
                <Route path="contactUs" element={<ContactUs />} />

                <Route path="createNewCourse" element={<CreateNewCoursePage />} />
                <Route path="shoppingCart" element={<ShoppingCart />} />

                <Route path="certificateCenter" element={<CertificateCenter />} />
                <Route path="certificateStartForm" element={<CertificateStartForm />} />
                <Route path="certificateFillForm" element={<CertificateFillForm />} />
                <Route path="certificateTestView" element={<CertificateTestView />} />
                <Route path="certificateTestResult" element={<CertificateTestResult />} />

                <Route path="signIn" element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="signUpSteps" element={<SignUpSteps />} />
                <Route path="paidMembership" element={<PaidMembership />} />
                <Route path="checkoutMembership" element={<CheckoutMemberShip />} />
                <Route path="invoice" element={<Invoice />} />
                <Route path="applyJob/:id" element={<ApplyJob />} />
                <Route path="blogSingleView/:id" element={<BlogSingleView />} />

                <Route path="searchResult" element={<SearchResult />} />
                <Route path="thankyou" element={<Thankyou />} />
                <Route path="commingSoon" element={<CommingSoon />} />
                <Route path="error404" element={<Error404 />} />

                {/* <Route path="instructorProfile" element={<InstructorProfile />} /> */}

                {/* <Route path="instructorMessages" element={<InstructorMessage />} /> */}
                {/* <Route path="instructorAnalyics" element={<InstructorAnalyics />} /> */}
                {/* <Route path="instructorDashboard" element={<InstructorDashboard />} /> */}
                {/* <Route path="instructorCourses" element={<InstructorCourses />} /> */}
                {/* <Route path="instructorNotifications" element={<InstructorNotifications />} /> */}
                {/* <Route path="instructorCertificates" element={<InstructorCertificate />} /> */}
                {/* <Route path="instructorReviews" element={<InstructorReviews />} /> */}
                {/* <Route path="instructorEarning" element={<InstructorEarning />} /> */}
                {/* <Route path="instructorPayout" element={<InstructorPayout />} /> */}
                {/* <Route path="instructor Statements" element={<InstructorStatements />} /> */}
                {/* <Route path="instructorVerification" element={<InstructorVerification />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
