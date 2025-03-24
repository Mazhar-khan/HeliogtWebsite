import { useEffect, useState } from "react";
import AboutSolarInstallation from './AboutSolarInstallation';
import AboutGoingSolar from './AboutGoingSolar';
import AboutLocation from './AboutLocation';
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom";
import axios from "axios";
import Team from "./Team";
import Testimonial from "../testimonial/Testimonial";
// import AboutGallery from './AboutGallery';

export default function AboutUs() {
    const [data, setData] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/aboutusdata/${id}`);
                setData(response.data.data[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <Helmet>
                <title>About Us | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Learn more about Helio Green Tech, our mission, values, and commitment to providing innovative green technology solutions for a sustainable future." />
                <meta name="keywords" content="Helio Green Tech, About Us, green technology, sustainable solutions, renewable energy, eco-friendly practices" />
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
                                                        {data && data['heading'] ? (
                                                            <>
                                                                <strong className="text-accented">{data['heading'].split(" ")[0]} </strong>
                                                                <strong className="text-accentes">{data['heading'].split(" ")[1]}</strong>
                                                            </>
                                                        ) : (
                                                            "Loading..."
                                                        )}
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

            <AboutSolarInstallation data={data} />
            <Team />
            <Testimonial />
            {/* <AboutGoingSolar />
            <AboutLocation /> */}
            {/* <AboutGallery /> */}
            {/* <AboutGoingSolar /> */}
        </>
    )
}
