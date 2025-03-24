import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function Team() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/ourteamv`);
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
                <title>Our Teams | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Discover the range of services offered by Helio Green Tech, including solar panel installation, maintenance, and consultation for sustainable energy solutions." />
                <meta name="keywords" content="Helio Green Tech, services, solar panel installation, solar maintenance, renewable energy solutions, eco-friendly services" />
            </Helmet>

            {/* <section >
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
                                                    <strong className="text-accented"> Team </strong>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="container mt-5 ">
                    <h2 className="text-center mb-4">Meet Our Team</h2>
                    <div className="row">
                        {data?.map((member) => (
                            <div key={member.id} className="col-md-4 mb-4">
                                <div className="card shadow border-0">
                                    <img
                                        src={member.photo}
                                        className="card-img-top"
                                        alt={member.name}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-1">{member.name}</h5>
                                        <p className="text-muted">{member.designation}</p>
                                        <p className="card-text" dangerouslySetInnerHTML={{ __html: member.text }}></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
