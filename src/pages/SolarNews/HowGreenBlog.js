import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function HowGreenBlog() {
    return (
        <div>
            <Helmet>
                <title>How Green are Solar Panels? | Helio Green Tech</title>
                <meta name="description" content="Explore the environmental impact of solar panels, their sustainability, and how they contribute to a greener future." />
                <meta name="keywords" content="solar panels, environmental impact, sustainability, green energy, renewable energy" />
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
                                                    <strong className="text-accentes">How “Green” are Solar Panels?</strong>
                                                    <strong className="text-accented"> And is it Really Going to Make a Difference on Climate Change? </strong>
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
                                    src="assets/content/solar_img1.png"
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
                                        <strong>How “Green” are Solar Panels? And is it Really Going to Make a Difference on Climate Change? </strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        Solar panels are widely regarded as a key solution to reducing our dependence on
                                        fossil fuels and lowering carbon emissions. But how truly "green" are they? And
                                        do they make a significant impact on climate change? While solar energy is
                                        undoubtedly a cleaner alternative to coal and oil, the production, installation,
                                        and disposal of solar panels do come with some environmental concerns.
                                        Let’s explore both the benefits and challenges of solar panels in the fight
                                        against climate change.

                                    </p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>The Environmental Benefits of Solar Panels</strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        Solar panels generate electricity without emitting carbon dioxide (CO2) or other greenhouse gases. By replacing fossil fuel-based power sources, they significantly reduce the overall carbon footprint of electricity generation.
                                        Unlike coal, oil, or natural gas, the sun provides an unlimited energy supply. As long as the sun shines, solar power can be harnessed, making it a sustainable energy solution.
                                    </p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>The Environmental Costs of Solar Panel Production</strong>
                                    </h3>
                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        <strong>Raw Material Extraction and Manufacturing</strong>
                                        Producing solar panels requires raw materials like silicon, silver, and rare earth metals. Mining these materials has environmental consequences, including habitat destruction, energy-intensive extraction processes, and water pollution.
                                        The production of solar panels involves high-temperature processes that consume energy. If this energy comes from fossil fuels, the carbon footprint of manufacturing solar panels can be significant.
                                        Solar panels have a lifespan of around 25-30 years. As they reach the end of their life cycle, disposal and recycling become a concern. Improper disposal can lead to toxic waste, while recycling infrastructure for solar panels is still developing.
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
                        {/* First carousel item */}
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
                                            <h2 className="card-title h4">The Environmental Concerns of?...</h2>
                                            <p className="card-text">
                                                AI Taking Over the World, But Not How You Thought: Unveiling the Environmental Concerns
                                                Helio GreenTech ...
                                            </p>
                                            <Link to="/environmental-concerns" className="btn btn-primary">Read More →</Link>
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
                        {/* Second carousel item */}
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
                                            <h2 className="card-title h4">The Environmental Concerns of?...</h2>
                                            <p className="card-text">
                                                AI Taking Over the World, But Not How You Thought: Unveiling the Environmental Concerns
                                                Helio GreenTech ...
                                            </p>
                                            <Link to="/environmental-concerns" className="btn btn-primary">Read More →</Link>
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
    )
}
