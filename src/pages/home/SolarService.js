import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SolarInstallation() {
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
                            <div className="row align-items-stretch" style={{ display: "flex" }}>
                                {/* Left Column */}
                                <div className="col-md-6 d-flex flex-column justify-content-between">
                                    <div
                                        className="fe-block fe-block-6306ba380f394d4b88505c5c"
                                        style={{ marginTop: "-15%", flex: 1 }}
                                    >
                                        <div
                                            className="sqs-block html-block sqs-block-html"
                                            id="block-6306ba380f394d4b88505c5c"
                                        >
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content" data-aos="fade-up">
                                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", marginTop: "10%", fontSize: "24px" }}>
                                                        <strong>Solar Services Near Kansas<br />
                                                            City, MO</strong>
                                                    </h3>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: "16px" }}>
                                                        At Helio GreenTech, we’re ready to make sure clients near Kansas
                                                        City, MO, get the fantastic solar services they deserve. We install
                                                        sleek, efficient, top-of-the-line systems; we primarily use Enphase
                                                        inverters and VSUN solar as a brand for our solar panels. We also
                                                        use top-quality panels such as Jinko Solar, REC, Silfab Solar, Axeitec
                                                        Solar Panels, and Hanwha Q Cells.<br />
                                                        Our energy consultants will help recommend the best solar panels
                                                        and equipment for your project, helping you reach your goals. We
                                                        curate the best selection of panels and components from brands
                                                        you know and trust. We select the best equipment for your job so
                                                        that you know your system will be sleek and modern with <strong>Triple
                                                            Black Solar</strong> panels, 25 Year Warranty, lifetime monitoring, and
                                                        industry-leading degradation rates.<br />
                                                        <strong>Quality Products and Services:</strong> Helio GreenTech provides high-
                                                        quality solar panels, inverters, and other equipment that is reliable
                                                        and durable, with warranties and performance guarantees that are
                                                        best in class industry-wide. <span style={{ color: "rgba(147, 204, 15, 1)" }}>Get started</span>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div
                                    className="col-md-6 d-flex flex-column justify-content-between"
                                    data-aos="fade-down"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",

                                        padding: "1rem",
                                    }}
                                >
                                    <div className="video-container text-center" style={{ flex: 1 }}>
                                        <div
                                            className="video-frame"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",

                                            }}
                                        >
                                            <iframe
                                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                allowFullScreen
                                                title="Solar Installation Video"
                                                style={{ width: "100%", height: "100%", border: "none" }}
                                            ></iframe>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            fontSize: "14px",
                                            marginTop: "7%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        “They offer comprehensive services, such as system design, installation,
                                        maintenance, and monitoring, to ensure that their customers’ solar systems
                                        are operating efficiently and effectively.”
                                        <br />
                                        — KC’s Best 2023
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}