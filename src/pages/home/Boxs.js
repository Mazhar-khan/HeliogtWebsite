import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Boxs() {
    useEffect(() => {
            AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
        }, []);

    return (
        <div data-aos="fade-right">
            <section className="page-section">
                <div className="section-border" data-controller="SectionDivider" style={{ clipPath: "url(#section-divider-65a6b757d33ea3703d6aa7aa)" }}>
                    <div className="section-background"></div>
                </div>

                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row d-flex align-items-stretch">
                                {/* Block 1 */}
                                <div className="col-md-4">
                                    <div className="fe-block styled-box h-100">
                                        <div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-blend-mode="NORMAL">
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', fontSize: '18px' }}>
                                                            <strong className="sqsrte-text-color--white">
                                                                PROTECTED WITH OUR
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div className="sqsrte-scaled" style={{ marginBottom: '10%' }}>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center' }}>
                                                            <span className="sqsrte-text-color--accent">
                                                                <strong style={{ fontSize: '36px' }}>25 year</strong>
                                                            </span>
                                                            <span style={{ color: "white", fontSize: '12px' }}> Warranty</span>
                                                        </p>
                                                    </div>
                                                    <hr style={{ width: '50%', marginLeft: '25%', marginTop: '12%', color: 'rgba(255, 255, 255, 0.2)' }} />
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                    <p style={{ padding: '15px', textAlign: 'center', color: 'rgba(238, 238, 238, 1)' }}>
                                                        <span style={{ color: 'rgba(238, 238, 238, 1)', fontSize: '14px' }}>
                                                            Our solar systems have life
                                                            expectancy of 40+ years and we
                                                            back every component of our
                                                            installs with an industry leading
                                                            25 year warranty that includes:
                                                            panels, inverters, railing,
                                                            and labor.
                                                        </span>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Block 2 */}

                                <div className="col-md-4">
                                    <div className="fe-block styled-box h-100">
                                        <div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-blend-mode="NORMAL">
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', fontSize: '18px' }}>
                                                            <strong className="sqsrte-text-color--white">
                                                                RECEIVE A
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div className="sqsrte-scaled">
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', marginBottom: '5%' }}>
                                                            <span className="sqsrte-text-color--accent">
                                                                <strong style={{ fontSize: '36px' }}> 30%</strong>
                                                            </span>
                                                            <span style={{ color: "white", fontSize: '12px' }}> TEX CREDIT </span>
                                                        </p>
                                                    </div>
                                                    <hr style={{ width: '50%', marginLeft: '25%', marginTop: '12%', color: 'rgba(255, 255, 255, 0.2)' }} />
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                    <p style={{ padding: '15px', textAlign: 'center' }}>
                                                        <span style={{ color: 'rgba(238, 238, 238, 1)', fontSize: '14px' }}>
                                                            The average tax credit for a solar
                                                            system is around $7,000 that’s
                                                            money you would have otherwise
                                                            spent on your taxes that you get
                                                            back in your own pocket just for <br />
                                                            going solar
                                                        </span>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 3 */}
                                <div className="col-md-4">
                                    <div className="fe-block styled-box h-100">
                                        <div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-blend-mode="NORMAL">
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', fontSize: '18px' }}>
                                                            <strong className="sqsrte-text-color--white">
                                                                GO SOLAR WITH
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div className="sqsrte-scaled">
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', marginBottom: '5%' }}>
                                                            <span className="sqsrte-text-color--accent">
                                                                <strong style={{ fontSize: '36px' }}>$0 DOWN</strong>
                                                            </span>
                                                            <span style={{ color: "white", fontSize: '12px' }}> FINANCING</span>
                                                        </p>
                                                    </div>
                                                    <hr style={{ width: '50%', marginLeft: '25%', marginTop: '12%', color: 'rgba(255, 255, 255, 0.2)' }} />
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                    <p style={{ padding: '15px', textAlign: 'center' }}>
                                                        <span style={{ color: 'rgba(238, 238, 238, 1)', fontSize: '14px' }}>
                                                            When you go solar you can trade
                                                            your increasing electric bill that
                                                            never goes away for a solar
                                                            payment that actually gets paid
                                                            off. Start enjoying the savings
                                                            that comes with owning your
                                                            own power.
                                                        </span>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
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
    )
}
