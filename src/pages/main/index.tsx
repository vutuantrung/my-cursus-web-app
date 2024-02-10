import { Route, Routes } from 'react-router-dom';

import { Body } from './Body';

import AppHeader from '../commons/Header/AppHeader';
import AppLeftsideBar from '../commons/LeftSideBar/AppLeftsideBar';
import LiveStream from '../liveStreams';
import Explore from '../explore';
import SavedCourses from '../savedCourses';
import AllInstructors from '../allInstructors';
import Settings from '../settings';
import Help from '../help';
import ReportHistory from '../reportHistory';
import Feedback from '../feedback';
import LiveOutput from '../liveOutput';
import InstructorProfile from '../instructorProfile';
import CoursDetails from '../coursDetails';

import { useEffect, useState } from 'react';
import MyInstructorProfileView from '../myInstructorProfileView';
import AboutMe from '../myInstructorProfileView/AboutMe';
import Discussions from '../myInstructorProfileView/Discussions';
import MyCourses from '../myInstructorProfileView/MyCourses';
import PurchasedCourses from '../myInstructorProfileView/PurchasedCourses';
import Subscriptions from '../myInstructorProfileView/Subscriptions';
import AddStreaming from '../addStreaming';

const Main = () => {
    const [docState, setDocState] = useState('');

    useEffect(() => {
        // console.log('every time here', document.readyState);
        if (document.readyState === 'complete') {
            setDocState(document.readyState);
        } else {
            document.onreadystatechange = () => {
                // console.log('doc state changed', document.readyState);
                setDocState(document.readyState);
            };
        }
    }, []);

    useEffect(() => {
        // console.log('main useEffect', document.readyState, docState);
        if (docState === 'complete') {
            // console.log('gonna set ....');

            const querySelector = document.querySelector.bind(document);
            const nav = document.querySelector('.vertical_nav');
            const wrapper = document.querySelector('.wrapper');
            const menu = document.getElementById('js-menu');
            const subnavs = menu!.querySelectorAll('.menu--item__has_sub_menu');

            // Toggle menu click
            (querySelector('.toggle_menu') as any).onclick = function () {
                nav!.classList.toggle('vertical_nav__opened');
                wrapper!.classList.toggle('toggle-content');
            };

            // Minify menu on menu_minifier click
            (querySelector('.collapse_menu') as any).onclick = function () {
                nav!.classList.toggle('vertical_nav__minify');
                wrapper!.classList.toggle('wrapper__minify');

                for (let j = 0; j < subnavs.length; j++) {
                    subnavs[j].classList.remove('menu--subitens__opened');
                }
            };

            // Open Sub Menu
            for (let i = 0; i < subnavs.length; i++) {
                if (subnavs[i].classList.contains('menu--item__has_sub_menu')) {
                    (subnavs[i].querySelector('.menu--link') as any).addEventListener(
                        'click',
                        function (e: any) {
                            for (let j = 0; j < subnavs.length; j++) {
                                if (e.target.offsetParent !== subnavs[j]) {
                                    subnavs[j].classList.remove('menu--subitens__opened');
                                }
                            }
                            e.target.offsetParent.classList.toggle('menu--subitens__opened');
                        },
                        false
                    );
                }
            }
        }
    }, [docState]);
    return (
        <>
            <AppHeader />
            <AppLeftsideBar />
            <div className="wrapper app-footer-padding">
                <Routes>
                    <Route path="" Component={Body} />

                    <Route path="explore" Component={Explore} />
                    <Route path="savedCourses" Component={SavedCourses} />
                    <Route path="settings" Component={Settings} />
                    <Route path="help" Component={Help} />
                    <Route path="reportHistory" Component={ReportHistory} />
                    <Route path="feedback" Component={Feedback} />

                    <Route path="liveStream" Component={LiveStream} />
                    <Route path="liveStream/output/:id" Component={LiveOutput} />

                    <Route path="instructorProfile/all" Component={AllInstructors} />
                    <Route path="instructorProfile/view/:id" Component={InstructorProfile} />

                    <Route path="coursDetails/:id" Component={CoursDetails} />

                    <Route path="addStream" Component={AddStreaming} />

                    <Route path="myInstructorProfile" Component={MyInstructorProfileView}>
                        <Route path="aboutMe" Component={AboutMe} />
                        <Route path="discussions" Component={Discussions} />
                        <Route path="myCourses" Component={MyCourses} />
                        <Route path="purchasedCourses" Component={PurchasedCourses} />
                        <Route path="subscriptions" Component={Subscriptions} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default Main;
