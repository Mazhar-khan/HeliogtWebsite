import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SolarGoingGreen({ data }) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-7" data-aos="fade-up">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                    </h3>
                                    <p dangerouslySetInnerHTML={{ __html: data?.text }} style={{ whiteSpace: "pre-wrap", fontSize: '18px', marginTop: '2%' }}>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">

                                <div className="video-container" data-aos="fade-down">
                                    <div className="styled-box embed-responsive embed-responsive-16by9">
                                        <iframe
                                            src={data?.video}
                                            allowFullScreen
                                            title="Solar Consultation Video"
                                            className="embed-responsive-item"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* */}
                    </div>
                </div>
            </section>
        </>
    )
}
