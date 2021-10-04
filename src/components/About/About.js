import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header />
            <div className="container my-3 py-3">
                <h1 className="about-title">About us</h1>
                <p className="about-description">SMRLC occupies the leadership space in online legal education. We offer the most advanced legal courses you can find anywhere, helping you to acquire skills and knowledge you can bank on to bag the best legal jobs, crack difficult competitive exams, serve your own clients, build a law practice, or outperform others in internships. Maybe you are just looking to learn more about a cutting edge area of law practice, or aiming at an international legal career - SMRLC can help you all the way.
                </p>

                <br />
                <p className="about-description">

                    We have endless free resources waiting for you. Tell us a little more about yourself, what you do, and what your goals are so that we can email you the right resources and add you to our exclusive WhatsApp groups where you can get access to free webinars, free ebooks, internships, jobs, client opportunities, career counseling and more related to your area of interest.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;