import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('/allCourses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, [])


    return (
        <div>
            <Header> </Header>
            <div className="container my-3 py-3">
                <h1 style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "50px"
                }} >Courses For Remote International Work</h1>

                <div className="row">
                    {
                        allCourses.map(allCourse => (
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="course-pic">
                                        <img style={{ width: "300px", height: "200px" }} src={allCourse.image} alt="" />
                                    </div>
                                    <h4>Programme Title: {allCourse.name}</h4>
                                    <h5> Course Fee: ${allCourse.fee} </h5>
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

export default Courses;