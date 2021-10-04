import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-container ">
                <div className="header">
                    <div className="row d-flex banner align-items-center justify-content-center">
                        <NavBar></NavBar>
                        <div className="col-md-6 my-3">
                            <h1 className="title">
                                Acquire practical legal skills
                            </h1>
                            <p className="text-center mt-3 supporting-title">
                                Upskill and get ready for the jobs of today, tomorrow and beyond
                            </p>
                            <button className="mt-3 learning-btn">Start Learning</button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;