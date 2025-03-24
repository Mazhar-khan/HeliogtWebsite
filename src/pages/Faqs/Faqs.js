import { useEffect, useState } from "react";
import FaqQuestion from './FaqQuestion';
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function Faqs() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/faqweb`);
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
                <title>Frequently Asked Questions | Helio Green Tech</title>
                <meta name="description" content="Explore the Frequently Asked Questions (FAQs) about Helio Green Tech. Get answers to common inquiries about our innovative green technology solutions, sustainability practices, and how we can help you transition to a greener future." />
                <meta name="keywords" content="Helio Green Tech, FAQs, green technology, sustainable solutions, renewable energy, eco-friendly practices, environmental technology, Helio Green Tech questions" />
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

                                                        <strong className="text-accentes"> Frequently Asked</strong>
                                                        <strong className="text-accented"> Questions </strong>
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


            <FaqQuestion data={data} />
        </>
    )
}
