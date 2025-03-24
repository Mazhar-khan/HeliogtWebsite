import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Helmet } from 'react-helmet';

export default function EnvironmentalConcerns() {
    return (
        <div>
            <Helmet>
                <title>The Environmental Concerns of Using AI like ChatGPT</title>
                <meta name="description" content="Explore the environmental impact of AI technologies like ChatGPT, including energy consumption, resource usage, and potential solutions." />
                <meta name="keywords" content="AI, ChatGPT, environmental concerns, energy consumption, sustainability, technology impact" />
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
                                                    <strong className="text-accentes">The Environmental</strong>
                                                    <strong className="text-accented"> Concerns of Using AI like Chat GPT </strong>
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

            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                            <div
                                className="col-md-12"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px',
                                }}
                            >
                                <img
                                    src="assets/content/solar_img.png"
                                    alt="solar Image"
                                    style={{
                                        display: 'block',
                                        objectFit: 'cover',
                                        width: '100%',
                                        maxWidth: '1000px', // Limit the image width
                                        height: '100%',
                                        maxHeight: '350px', // Limit the image height
                                        border: '2px solid lightgreen',
                                        borderRadius: '8px', // Optional rounding for style
                                    }}
                                />
                            </div>

                            <div
                                className="col-md-12"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    padding: '20px',
                                }}
                            >
                                <div className="sqs-html-content">
                                    <p>11/1/23</p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>The Environmental Concerns of Using AI like Chat GPT </strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        AI Taking Over the World, But Not How You Thought: Unveiling the Environmental Concerns <br />
                                        Helio GreenTech asks Chat GPT a question to provide insights into the concept of water scarcity, its causes, and the impact of excessive water consumption on local water resources and the environment. They explore the global water crisis, the connection between water scarcity and various sectors like agriculture, and the need for sustainable water management.<br />
                                        How does a Chatbot use water and energy? we cover the concerns of water scarcity, and while they may not specifically address the environmental implications of AI's water consumption, they provide a broader context for understanding the issue and its relevance to sustainable water usage.
                                    </p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>Carbon Footprint of AI Infrastructure </strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        AI infrastructure, including servers, GPUs, and cooling systems, significantly contributes to its carbon footprint. Data centers require powerful cooling mechanisms to prevent overheating, consuming additional energy. Many AI companies rely on non-renewable energy sources, further increasing carbon emissions.

                                        Despite efforts to use renewable energy, the expansion of AI technology could still pose a long-term sustainability challenge unless more eco-friendly solutions are adopted.
                                    </p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>Electronic Waste and AI Hardware</strong>
                                    </h3>
                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        The rapid development of AI demands frequent hardware upgrades, leading to an increase in electronic waste (e-waste). AI companies replace outdated processors, storage devices, and servers regularly, contributing to global e-waste problems. If not properly recycled, these discarded components release harmful toxins into the environment, polluting air, water, and soil.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page content with carousel */}
            <div className="container pt-5">
                <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <a href="#!">
                                            <img
                                                className="card-img-top"
                                                src="assets/content/solar_img1.png"
                                                alt="How “Green”"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '213px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </a>
                                        <div className="card-body">
                                            <div className="small text-muted">10/16/23</div>
                                            <h2 className="card-title h4">How “Green” are Solar Panels?...</h2>
                                            <p className="card-text">
                                                The solar industry has an important role to play in the fight against climate change.
                                                While solar panels offer significant benefits...
                                            </p>
                                            <Link to="/how-green" className="btn btn-primary">Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <a href="#!">
                                            <img
                                                className="card-img-top"
                                                src="assets/content/solar_img2.png"
                                                alt="How “Green”"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '213px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </a>
                                        <div className="card-body">
                                            <div className="small text-muted">10/9/23</div>
                                            <h2 className="card-title h4">Making The Case For Going Solar?...</h2>
                                            <p className="card-text">
                                                Helio GreenTech is a trusted solar energy company with many satisfied customers.
                                                The company has received great reviews on multiple...
                                            </p>
                                            <Link to="/goingsolar-case" className="btn btn-primary">Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <a href="#!">
                                            <img
                                                className="card-img-top"
                                                src="assets/content/solar_img3.png"
                                                alt="How “Green”"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '213px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </a>
                                        <div className="card-body">
                                            <div className="small text-muted">10/9/23</div>
                                            <h2 className="card-title h4">Navigating HOA Restrictions on Solar?...</h2>
                                            <p className="card-text">
                                                It is important to note that Evergy's Solar Subscription Program may not be the
                                                most cost-effective solution for everyone. The program...
                                            </p>
                                            <Link to="/navigating-hoa" className="btn btn-primary">Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add another carousel item for the next set of cards */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <a href="#!">
                                            <img
                                                className="card-img-top"
                                                src="assets/content/solar_img1.png"
                                                alt="How “Green”"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '213px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </a>
                                        <div className="card-body">
                                            <div className="small text-muted">10/16/23</div>
                                            <h2 className="card-title h4">How “Green” are Solar Panels?...</h2>
                                            <p className="card-text">
                                                The solar industry has an important role to play in the fight against climate change.
                                                While solar panels offer significant benefits...
                                            </p>
                                            <Link to="/how-green" className="btn btn-primary">Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <a href="#!">
                                            <img
                                                className="card-img-top"
                                                src="assets/content/solar_img2.png"
                                                alt="How “Green”"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '213px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </a>
                                        <div className="card-body">
                                            <div className="small text-muted">10/9/23</div>
                                            <h2 className="card-title h4">Making The Case For Going Solar?...</h2>
                                            <p className="card-text">
                                                Helio GreenTech is a trusted solar energy company with many satisfied customers.
                                                The company has received great reviews on multiple...
                                            </p>
                                            <Link to="/goingsolar-case" className="btn btn-primary">Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <a href="#!">
                                            <img
                                                className="card-img-top"
                                                src="assets/content/solar_img3.png"
                                                alt="How “Green”"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '213px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </a>
                                        <div className="card-body">
                                            <div className="small text-muted">10/9/23</div>
                                            <h2 className="card-title h4">Navigating HOA Restrictions on Solar?...</h2>
                                            <p className="card-text">
                                                It is important to note that Evergy's Solar Subscription Program may not be the
                                                most cost-effective solution for everyone. The program...
                                            </p>
                                            <Link to="/navigating-hoa" className="btn btn-primary">Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}