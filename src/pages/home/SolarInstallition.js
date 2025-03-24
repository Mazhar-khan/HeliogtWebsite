import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SolarInstallition() {
    useEffect(() => {
            AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
        }, []);

    return (
        <div>
            <section
                data-test="page-section"
                style={{ marginLeft: '4%' }}
                className="page-section"
            >
                <div className="section-border">
                    <div className="section-background"></div>
                </div>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: 'auto' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-md-6" data-aos="fade-up">
                                    <div className="fe-block fe-block-6306ba380f394d4b88505c5c">
                                        <div
                                            className="sqs-block html-block sqs-block-html"
                                            id="block-6306ba380f394d4b88505c5c"
                                        >
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '20px',fontWeight: '400' }}>
                                                        Need Solar Installation?
                                                    </p>
                                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '24px' }}>
                                                        <strong>We Handle the Entire Process</strong>
                                                    </h3>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                                        Making a choice in how we power our home may seem like a
                                                        small decision, but choosing cleaner power and lower bills can
                                                        really add up to making a big difference! We believe we can
                                                        make a difference, one person at a time. To Helio GreenTech
                                                        the best way to change the world is to provide the best
                                                        customer experience possible.
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                                        <span >Going solar doesn't have to be difficult. That's why our energy
                                                            consultants take an educational approach to help customers.
                                                            We promise great workmanship that you can be proud of and
                                                            are professionally installed by NABCEP certified electricians.</span>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                                        It’s important to make sure that you’re getting a solar system
                                                        that will suit your unique situation. Our team will inspect your
                                                        home, roof, and annual power usage so that we can determine
                                                        the best solution for your solar needs.
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                                        <strong>Customized Solutions:</strong> Helio GreenTech offers customized solar
                                                        solutions tailored to the unique needs and requirements of
                                                        homeowners in and around Kansas City. This includes
                                                        conducting a thorough assessment of a homeowner's energy
                                                        usage, roof orientation, and other factors to design a solar
                                                        system that maximizes energy production and savings.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6" style={{ marginTop: '15%' }} data-aos="fade-down">
                                    <div className="fe-block fe-block-yui_3_17_2_1_1661384183313_131397">
                                        <div className="video-container text-center">
                                            <div className="video-frame" style={{ width: '100%', height: '315px' }}>
                                                <iframe
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    allowFullScreen
                                                    title="Solar Installation Video"
                                                    style={{ width: '100%', height: '100%' }}
                                                ></iframe>
                                            </div>
                                        </div>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '14px', marginTop: '3%',textAlign: 'center',color: '#93CC0F' }}>
                                            <strong>SCHEDULE A FREE VISIT</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '15px' }}>
                                        “Customers report enjoying the process of going through solar and find the initial presentation more informative, the educational
                                        approach helps homeowners feel they are making the right decision and puts the homeowner in the driver seat of their purchasing
                                        experience when going solar with Helio GreenTech.”
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '15px', textAlign: 'end' }}>
                                        — Customer Satisfaction Survey from KC’s Best 2023.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
