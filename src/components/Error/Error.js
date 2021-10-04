import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Error.css'

const Error = () => {
    return (
        <div>
            <Header />
            <div className="container my-3 py-3">
                <h1 className="text-danger error-text">404</h1>
                <h2 className="text-danger error-text">Cannot found</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Error;