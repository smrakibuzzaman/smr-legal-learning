import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [mastersCourses, setMastersCourses] = useState([]);
    useEffect(() => {
        fetch('/mastersCourses.json')
            .then(res => res.json())
            .then(data => setMastersCourses(data));
    }, [])

    return (
        <div>
            <Header></Header>

            <div className="container my-3 py-3">
                <p className="home-start">SMR Legal Course (SMRLC) is an initiative in online legal education, Bangladesh's largest and most reputed legal education company. An online legal education platform, SMRLC is focused towards creating access to justice in Bangladesh.

                    It was launched as there is a strong need to create resources for practical legal education as the textbook learning that happen in law schools are far removed from the realities and needs of the industry.

                    We make high quality practical legal training easily accessible for all across Bangladesh, directly impacting the quality of legal service and legal expertise available to the common citizens of the country.</p>

                <div className="row">
                    {
                        mastersCourses.map(mastersCourse => (
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="course-pic">
                                        <img style={{ width: "300px", height: "200px" }} src={mastersCourse.image} alt="" />
                                    </div>
                                    <h4>Programme Title: {mastersCourse.name}</h4>
                                    <h5> Course Fee: ${mastersCourse.fee} </h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;