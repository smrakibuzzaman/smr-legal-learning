import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Litigation.css'

const Litigation = () => {
    return (
        <div>
            <Header> </Header>
            <div className="container my-3 py-3">
                <h1 className="litigation-title">Discover All Litigation Services Has To Offer</h1>
                <p className="litigation-summary">Our full-service litigation support company helps law firms and attorneys across the United States. We stand apart from other litigation support firms and have quickly gained a reputation as a superior provider of legal support services designed to take the stress and hassle out of preparing for litigation.</p>

                <h1 className="litigation-title" >How We Help Attorneys and Law Firms</h1>
                <p className="litigation-summary">Regardless of where you need assistance, Litigation Services is proud to offer both local and online litigation support services including forensics, deposition services and corporate solutions. As a national commercial litigation services provider, we have the depth and breadth of services you need.</p>

                <h1 className="litigation-title">Deposition and Trial Services</h1>
                <p className="litigation-summary">Litigation Services is proud to offer a range of litigation support services designed to make depositions simple and cost effective. Whether you need court reporting services, interpretation or translation services, or help with transcription, we have certified and experienced litigation support professionals who are ready to help.

                    We also use the latest technology to provide impactful video deposition services and offer live web streaming to make collaboration seamless.

                    We even offer convenient, comfortable and state-of-the-art deposition suites across the United States, making scheduling depositions as easy and convenient as possible.

                    At Litigation Services, our advanced technology, highly trained trial consultants and cost-effective litigation support tools can help give you an added edge for trials.</p>

                <h1 className="litigation-title">Corporate Services</h1>
                <p className="litigation-summary">We are also proud to offer custom corporate legal services, including business intelligence tools and solutions designed and tailored to meet your needs.</p>
            </div>
            <Footer>  </Footer>
        </div>
    );
};

export default Litigation;