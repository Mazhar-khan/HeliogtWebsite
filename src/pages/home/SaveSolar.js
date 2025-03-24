import React from 'react';

export default function SaveSolar() {
    return (
        <>
            <section className="page-section" style={{ marginTop: '5%' }}>

                <div className="content-wrapper"
                >

                    <div className="container"
                        style={{
                            backgroundColor: '#D9D9D9',
                            borderRadius: '20px',
                            backgroundColor: '#D9D9D9',
                            border: '2px solid',
                            borderImageSlice: 1,
                            borderImageSource: 'linear-gradient(171.18deg, rgba(147, 204, 15, 0) 4%, #93CC0F 98.24%)',
                            boxShadow: '2px 2px 7px 0px rgba(0, 0, 0, 0.25)'
                        }}>
                        <div className="row" style={{ padding: '20px' }}>
                            <div className="col-12">
                                <h2 className="font-weight-bold mt-4" style={{ fontSize: '26px' }}>
                                    <strong> Understanding Evergy's Rate Changes:</strong>
                                </h2>
                                <h3 className="font-weight-bold" style={{ fontSize: '28px', marginTop: '2%' }}>
                                    SAVE BY GOING SOLAR!
                                </h3>
                                <p style={{ fontSize: '18px', marginTop: '2%' }}>
                                    Evergy has implemented the most significant rate change in Missouri's history, resulting in a
                                    substantial increase in <span style={{ color: 'rgba(147, 204, 15, 1)' }}>energy costs</span>. These changes officially took effect on October 1st, 2023, and
                                    are poised to have a substantial impact on residents' energy bills, especially in the hot summers.
                                    In light of Evergy's rate hikes and the upcoming surge in summer energy prices, it's more critical than
                                    ever to explore alternative energy solutions. One of the most effective ways to save money,
                                    especially during the summer peak hours, is to consider going solar.
                                </p>


                            </div>
                        </div>

                        <div className="row mt-4" style={{ background: 'rgba(13, 22, 71, 1)', width: '90%', marginLeft: '5%', borderRadius: '12px', padding: '20px' }}>
                            <div className="col-md-12">
                                <h3 className="text-white" style={{ fontSize: '28px', marginTop: '3%', }}>
                                    How Solar Can Help Mitigate the Concern of Time of Use
                                </h3>
                                <p style={{ fontSize: '14px', marginTop: '3%', color: 'rgba(238, 238, 238, 0.8)' }}>
                                    With solar installations from Helio GreenTech, you can leverage the power of net metering to your advantage.
                                    Instead of being at the mercy of Evergy's peak pricing during the summer months, net metering allows you to
                                    harness the energy produced by your solar panels during the day and bank any excess energy.
                                </p>
                                <p style={{ fontSize: '14px', color: 'rgba(238, 238, 238, 0.8)' }}>
                                    During peak hours when energy prices are highest, you can draw on the credits accumulated through net metering,
                                    effectively reducing your energy costs. This intelligent energy management system can significantly offset the
                                    impact of Evergy's time-of-use rates.
                                </p>
                            </div>
                        </div>

                        <div className="container my-5">
                            {/* Video Card */}
                            <div className="video-card position-relative">
                                {/* Top Right Green Arrow */}
                                {/* <div className="arrow-top-right"></div> */}

                                {/* Video Section */}
                                <div className="video-wrapper">
                                    <iframe
                                        className="video-frame"
                                        src="https://www.youtube.com/embed/your_video_id"
                                       
                                        allowFullScreen
                                        title="Responsive Video"
                                    ></iframe>
                                </div>

                                {/* Overlay Content */}
                                <div className="overlay">
                                    {/* Header Section */}
                                    <div className="overlay-header bg-success text-light p-3">
                                        <h3 className="m-0">EVERGY RATES CHANGING TO TIME OF USE</h3>
                                    </div>

                                    {/* Footer Section */}
                                    <div className="overlay-footer bg-dark text-light p-3 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5 className="m-0">SHOULD I GO SOLAR?</h5>
                                            <p className="m-0 small">
                                                Kansas City Homeowners are Feeling the pinch of Evergy's recent
                                                rate increase, solar may be the key to unlocking savings!
                                            </p>
                                        </div>
                                        <img
                                            src="solar-logo.png"
                                            alt="Solar Logo"
                                            className="logo-img ms-3"
                                        />
                                    </div>
                                </div>

                                {/* Bottom Left Green Arrow */}
                                {/* <div className="arrow-bottom-left"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}