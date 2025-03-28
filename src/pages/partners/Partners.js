import { useEffect, useState } from "react";
// import ServicesResidental from './ServicesResidental';
import ServicesResidental from "../Services/ServicesResidental";
// import OurServices from './OurServices';
import OurServices from "../Services/OurServices";
// import ServicesFaqs from './ServicesFaqs';
import ServicesFaqs from "../Services/ServicesFaqs";
import WhatMore from '../home/WhatMore';
import BrandImg from '../home/BrandImg';
// import ServicesLocation from './ServicesLocation';
import ServicesLocation from "../Services/ServicesLocation";
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function Partners() {
    const [data, setData] = useState(null);
    const [metaData, setMetaData] = useState(null);

    const fetchMetaData = async () => {
        try {
            const response = await axios.get(`https://kcsundial.com/api/websitemeta/1`);
            console.log("data12", response.data.data)
            setMetaData(response.data.data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/ipartners`);
                // console.log('response',response.data.data)
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchMetaData()
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Our Partners | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Discover the range of services offered by Helio Green Tech, including solar panel installation, maintenance, and consultation for sustainable energy solutions." />
                <meta name="keywords" content="Helio Green Tech, services, solar panel installation, solar maintenance, renewable energy solutions, eco-friendly services" />
            </Helmet>

            <section >
                <div
                    className="section-border position-absolute"
                    style={{ zIndex: -1 }}
                >
                    <div className="section-background position-absolute">
                        {
                            metaData && (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-100 object-fit-cover"
                                    style={{ display: "block", height: "80vh", objectFit: "cover" }}
                                >
                                    <source src={metaData.video} type="video/mp4" />
                                </video>
                            )
                        }

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
                                    <div className="sqs-block html-block sqs-block-html" >
                                        <div className="sqs-html-content">
                                            <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                <h2 className="text-bottom-left">

                                                    <strong className="text-accentes">Our</strong>
                                                    <strong className="text-accented"> Partners </strong>
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

            <ServicesResidental data={data} />
            {/* <OurServices /> */}
            {/* <ServicesFaqs /> */}
            <WhatMore />
            <ServicesLocation />
            <BrandImg />

        </>
    )
}
