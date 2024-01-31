import AppHeader from '../commons/Header/AppHeader';
import AppLeftsideBar from '../commons/LeftSideBar/AppLeftsideBar';
import Body from './Body';
import VideoModal from './VideoModal';

const CoursDetails = () => {
    return (
        <>
            <VideoModal />
            <AppHeader />
            <AppLeftsideBar />
            <Body />
        </>
    );
};

export default CoursDetails;
