import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolarEnvironmental from './SolarEnvironmental';
import SolarNewsPart1 from './SolarNewsPart1';
import SolarNewsPart2 from './SolarNewsPart2';
import SolarNewsPart3 from './SolarNewsPart3';
import SolarNewsPart4 from './SolarNewsPart4';
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function SolarNews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/webblogs`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

            <Helmet>
                <title>Solar News | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Stay updated with the latest news and trends in solar energy. Explore articles, insights, and updates from Helio Green Tech." />
                <meta name="keywords" content="Solar News, Helio Green Tech, renewable energy, solar energy trends, solar technology updates" />
            </Helmet>

            <section>
                <div className="section-border position-absolute" style={{ zIndex: -1 }}>
                    <div className="section-background position-absolute">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-100 object-fit-cover"
                            style={{ display: "block", height: "80vh", objectFit: "cover" }}
                        >
                            <source src="https://joinarc.io/wp-content/uploads/2024/06/AdobeStock_759054931.mp4" type="video/mp4" />
                        </video>
                        <div
                            className="section-background-overlay position-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none" }}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="content-wrapper position-relative" style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div className="sqs-block html-block sqs-block-html">
                                        <div className="sqs-html-content">
                                            <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                <h2 className="text-bottom-left">
                                                    <strong className="text-accentes">Solar</strong>
                                                    <strong className="text-accented"> News </strong>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sqs-html-content">
                                    <p>3/7/24</p>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>Navigating Evergy's New Rate Plans: </strong>Understanding the Impact on <br />
                                        Your Electric Bill
                                    </h3>
                                    <Link to="/detail" className="blog-more-link" style={{ marginTop: '3%' }}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <SolarEnvironmental data={data} />
            {/* <SolarNewsPart1 />
            <SolarNewsPart2 />
            <SolarNewsPart3 />
            <SolarNewsPart4 /> */}
        </>
    );
}