import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CurvedSection() {

     useEffect(() => {
                AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
            }, []);
    

    return (
        <div data-aos="fade-up">
            <section
                id="gradient"
                className="page-section curve"
                style={{ marginTop: '2%' }}
            >
                <div
                    className="section-bordered"
                    data-controller="SectionDivider"
                    style={{ clipPath: "url(#section-divider-6306ba38d62ae3d2c41f7236)" }}
                >
                    <div className="sectioned-background"></div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div
                                        className="sqs-block html-block sqs-block-html"
                                        data-blend-mode="NORMAL"
                                        data-block-type={2}
                                        id="block-6306ba380f394d4b88505c5c"
                                    >
                                        <div className="sqs-block-content" style={{ marginTop: '8%', marginBottom: '8%' }}>
                                            <div className="sqs-html-content">
                                                <h3 style={{ textAlign: "left", color: 'white', fontWeight: '700', whiteSpace: "pre-wrap", marginTop: '20%' }}>
                                                    Our <strong style={{ color: '#93CC0F' }}>Experience</strong>
                                                </h3>
                                                <h4 style={{ whiteSpace: "pre-wrap", color: 'white', fontWeight: '500', fontSize: '15px' }}>
                                                    Ranked Best of KC as Kansas City’s best solar company two
                                                    consecutive years 2022 and 2023.
                                                </h4>
                                                <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238, 238, 1)', fontSize: '14px' }}>
                                                    With our educational, no-pressure approach to solar you can
                                                    feel confident you are making the right decision when you
                                                    choose to work with Helio GreenTech.
                                                </p>
                                                <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238, 238, 1)', fontSize: '14px' }}>
                                                    Helio GreenTech is a locally owned Kansas City based solar
                                                    company. Founded in 2019 by leadership that has been in the
                                                    solar industry since 2008.
                                                </p>
                                                <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238, 238, 1)', fontSize: '14px' }}>
                                                    Our experienced solar team believes in making a difference
                                                    in the world, helping the renewable energy industry grow,
                                                    and empowering our customers, teams, and communities to a
                                                    more sustainable future.
                                                </p>
                                                <ul data-rte-list="default">
                                                    <li>
                                                        <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238, 238, 1)', fontSize: '16px' }}>
                                                            <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: '#93CC0F' }}>
                                                                NABCEP
                                                            </a>{" "}
                                                            certified installers
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238, 238, 1)', fontSize: '16px' }}>
                                                            Professional team
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238 , 238, 1)', fontSize: '16px' }}>
                                                            Experienced leadership
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style={{ whiteSpace: "pre-wrap", color: 'rgba(238, 238, 238, 1)', fontSize: '16px' }}>
                                                            <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: '#93CC0F' }}>
                                                                MOSEIA
                                                            </a>{" "}
                                                            Membership
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6" style={{ marginTop: '13%' }}>
                                    <div className="video-container">
                                        <div className="styled-box" style={{ height: '50vh', width: '90%', margin: '0 auto' }}>
                                            <iframe
                                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                allowFullScreen
                                                title="Solar Consultation Video"
                                                style={{ width: '100%', height: '100%' }}
                                            ></iframe>
                                        </div>
                                    </div>

                                    <div className="fe-block fe-block-yui_3_17_2_1_1705442902517_93628">
                                        <div
                                            className="sqs-block button-block sqs-block-button sqs-stretched"
                                            data-block-type={53}
                                            id="block-yui_3_17_2_1_1705442902517_93628"
                                        >
                                            <div className="sqs-block-content">
                                                <div
                                                    className="sqs-block-button-container sqs-block-button-container--center"
                                                    data-animation-role="button"
                                                    data-alignment="center"
                                                    data-button-size="medium"
                                                    data-button-type="primary"
                                                >
                                                    <a
                                                        href="/contact"
                                                        className="button-elements"
                                                        style={{ textDecoration: 'none', color: 'black', fontWeight: '500' }}
                                                    >
                                                        See Details
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End of row */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}