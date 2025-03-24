import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function GoingSolarCase() {
    return (
        <div>

            <Helmet>
                <title>Making The Case For Going Solar With Helio GreenTech</title>
                <meta name="description" content="Discover the benefits of going solar with Helio GreenTech, including cost savings, environmental impact, and energy independence." />
                <meta name="keywords" content="going solar, Helio GreenTech, solar energy benefits, renewable energy, cost savings" />
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
                                                    <strong className="text-accentes">Making The Case For</strong>
                                                    <strong className="text-accented"> Going Solar With Helio GreenTech</strong>
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
                                    src="assets/content/solar_img2.png"
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
                                        <strong>Making The Case For Going Solar With Helio GreenTech</strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        Helio GreenTech is a trusted solar energy company with many satisf- ied customers. The company has received great reviews on multiple platforms for their excellent service, professionalism, and expertise in the field of solar installation. One customer praised Helio GreenTech for their ability to work with the homeowner's schedule and their atte- ntion to detail during the installation process. Another customer was impressed with the company's knowledgeable staff, who were able to answer all their questions and provide guidance throughout the proje- ct. Helio GreenTech's commitment to customer satisfaction is evident in the positive reviews they have received, with customers consistent- ly praising the company's professionalism, responsiveness, and quality of work.

                                    </p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>The Benefits of Going Solar</strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        One of the biggest advantages of switching to solar power is the potential for significant savings on electricity bills. With a well-designed solar system, homeowners and businesses can reduce or even eliminate their reliance on traditional power grids.
                                        Solar energy is a clean, renewable resource that significantly reduces carbon emissions. Unlike fossil fuels, solar panels produce electricity without harmful greenhouse gases, making them a key tool in the fight against climate change.
                                        By investing in solar panels, you can gain greater control over your energy supply. Solar power reduces dependence on utility companies, protecting you from rising electricity costs and power outages.
                                    </p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>Why Choose Helio GreenTech?</strong>
                                    </h3>
                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        <strong>Cutting-Edge Solar Technology</strong>
                                        Helio GreenTech offers state-of-the-art solar panels that maximize energy efficiency and durability. Their advanced photovoltaic systems are designed to capture and convert more sunlight into usable electricity, ensuring optimal performance.
                                        Every home and business has unique energy needs. Helio GreenTech provides personalized solar solutions tailored to your specific requirements, ensuring you get the most out of your solar investment.
                                        With a team of experienced professionals, Helio GreenTech ensures a seamless installation process. From consultation to maintenance, their experts guide you every step of the way, making the transition to solar simple and stress-free.
                                        <strong>Financial Incentives & Savings</strong>
                                        Many governments and local authorities offer tax credits and incentives for solar panel installations. Helio GreenTech helps customers navigate these financial benefits, making solar energy an even more affordable and attractive option.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page content*/}
            <div className="container pt-5">
                <div className="row">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Blog post*/}
                            <div className="card mb-4">
                                <a href="#!">
                                    <img
                                        className="card-img-top"
                                        src="assets/content/solar_img.png"
                                        alt="How “Green”"
                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            maxWidth: '632px', // Limit the image width
                                            height: '100%',
                                            maxHeight: '213px', // Limit the image height
                                            borderRadius: '8px', // Optional rounding for style
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
                        {/* Blog post*/}
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
                                            maxWidth: '632px', // Limit the image width
                                            height: '100%',
                                            maxHeight: '213px', // Limit the image height
                                            borderRadius: '8px', // Optional rounding for style
                                        }}
                                    />
                                </a>
                                <div className="card-body">
                                    <div className="small text-muted">Solar10/9/23</div>
                                    <h2 className="card-title h4">How “Green” are Solar Panels?...</h2>
                                    <p className="card-text">
                                        The solar industry has an important role to play in the fight against climate change. While solar panels offer significant benefits...
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
                                        src="assets/content/solar_img3.png"
                                        alt="How “Green”"
                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            maxWidth: '632px', // Limit the image width
                                            height: '100%',
                                            maxHeight: '213px', // Limit the image height
                                            borderRadius: '8px', // Optional rounding for style
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
        </div>
    )
}
