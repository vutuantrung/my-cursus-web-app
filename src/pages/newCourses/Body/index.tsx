import CreateCoursSteps from './CreateCoursSteps';
import Footer from './Footer';

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
                        <CreateCoursSteps />
                    </div>
                </div>
            </div>
            <footer className="footer mt-40">
                <div className="container-fluid">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Body;
