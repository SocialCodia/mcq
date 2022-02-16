import Header from '../../components/header';

const AboutUs = () => {

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="container row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 p-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>API</h4>
                                <p>View API project on github</p>
                                <div className="text-center">
                                    <a href="https://github.com/SocialCodia/mcq_api" className="btn btn-primary ">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 p-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>WEB</h4>
                                <p>View WEB project on github</p>
                                <div className="text-center">
                                    <a href="https://github.com/SocialCodia/mcq" className="btn btn-primary ">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutUs;