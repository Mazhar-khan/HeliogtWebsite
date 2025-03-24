import React, { useState, useEffect } from 'react';
import FinancingPaymenst from './FinancingPaymenst';
import FinanceEstimate from './FinanceEstimate';
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function FinancingSection() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/financepages`);
                // console.log('response',response.data.data)
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
                <title>Financing | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Explore flexible financing options for solar energy solutions with Helio Green Tech. Make the switch to renewable energy today!" />
                <meta name="keywords" content="Financing, Helio Green Tech, solar energy financing, renewable energy solutions, solar panel financing" />
            </Helmet>

            <section >
                <div
                    className="section-border position-absolute"
                    style={{ zIndex: -1 }}
                >
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
                <div
                    className="content-wrapper position-relative"
                    style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}
                >
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div
                                        className="sqs-block html-block sqs-block-html"

                                    >
                                        <div className="sqs-block-content">
                                            <div className="sqs-html-content">
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <h2 className="text-bottom-left">

                                                        <strong className="text-accentes">WHY GO </strong>
                                                        <strong className="text-accented"> SOLAR </strong>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinancingPaymenst data={data} />
            <FinanceEstimate />
        </>
    )
}
