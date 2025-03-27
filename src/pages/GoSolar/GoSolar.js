import { useEffect, useState } from "react";
import SolarGoingGreen from './SolarGoingGreen';
import SolarSameEnerg from './SolarSameEnerge';
import SolarPotential from './SolarPotential';
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function GoSolar() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/gosolar/1`);
                // console.log("ew",response.data.data[0])
                setData(response.data.data[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        // console.log("daat",data)
    }, []);

    return (
        <>
            <Helmet>
                <title>Go Solar | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Discover the benefits of going solar with Helio Green Tech. Learn how solar energy can save you money and help the environment." />
                <meta name="keywords" content="Go Solar, Helio Green Tech, solar energy, renewable energy, eco-friendly solutions, solar installation" />
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

                                                        <strong className="text-accentes"> {data?.heading.split(" ")[0]} </strong>
                                                        <strong className="text-accented"> {data?.heading.split(" ")[1]} </strong>
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

            <SolarGoingGreen data={data} />
            {/* <SolarSameEnerg />
            <SolarPotential /> */}
        </>
    )
}
