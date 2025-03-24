import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SolarGoingGreen() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>Going green, helps you save green.</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '18px', marginTop: '2%' }}>
                                        Installation of solar panels (a photovoltaic or PV system) can produce numerous benefits to a household, ranging from lowered and <br />
                                        secured energy costs to reduced environmental impact. The distributed nature of solar power provides maximum production at times
                                        of peak demand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ display: 'flex', alignItems: 'stretch', marginTop: '3%' }}>
                            <div className="col-md-7">
                                <div className="sqs-html-content">

                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '8%' }}>
                                        The exact savings you will see with solar depends on the following:
                                        <ul>
                                            <li>Electricity consumption Solar energy system size</li>
                                            <li>Whether you purchase or lease your system</li>
                                            <li>Direct hours of daily sunlight size and angle of roof</li>
                                            <li>Local electricity rates</li>
                                        </ul>
                                    </p>

                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '18px', marginTop: '8%' }}>
                                        <strong>A solar electric system provides an opportunity for anyone who is looking
                                            to reduce monthly utility bills and make a long-term, low-risk investment. </strong>
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                        *speak with your tax professional to find out if you would be eligible for the solar ITC.
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                        <strong>RISING COST OF UTILITY RATES:</strong> Historic electric utility rates in the midwest have been
                                        lower than other parts in the country. However, as the cost of electricity has increased
                                        above an average of $0.13/kWh range, there has been an increased demand to help
                                        control the rising cost of electricity. Our solar analysis will take into account your curr-
                                        ent rate to help you estimate your savings.
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                        <strong>GOOD FOR THE PLANET: </strong> When you use renewable solar energy to meet your energy n-
                                        eeds,you reduce the demand for electricity from your utility. As a result, your utility plant
                                        emits less carbon when producing the power needed to meet customer demand. Each
                                        kilowatt-hour (kWh) of solar that is generated will substantially reduce greenhouse gas
                                        emissions like CO2, as well as other dangerous pollutants such as sulfur oxides, nitrogen
                                        oxides and particulate matter. Solar also reduces water consumption and withdrawal.
                                    </p>

                                </div>
                            </div>


                            <div className="col-md-5">

                                <div className="video-container" data-aos="fade-down">
                                    <div className="styled-box embed-responsive embed-responsive-16by9">
                                        <iframe
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            allowFullScreen
                                            title="Solar Consultation Video"
                                            className="embed-responsive-item"
                                        ></iframe>
                                    </div>
                                </div>


                                <div className="fe-block fe-block-yui_3_17_2_1_1705442902517_93628">
                                    <div
                                        className="sqs-block button-block sqs-block-button sqs-stretched"
                                        data-block-type={53}
                                        id="block-yui_3_17_2_1_1705442902517_93628"
                                    >
                                        <div className="sqs-block-content">
                                            <div
                                                className="sqs-block-button-container sqs-block-button-container--center"
                                                data-animation-role="button"
                                                data-alignment="center"
                                                data-button-size="medium"
                                                data-button-type="primary"
                                            >
                                                <a
                                                    href="/contact"
                                                    className="buttons-elements"
                                                    style={{ textDecoration: 'none', color: 'rgba(238, 238, 238, 1)', }}
                                                >
                                                    Check out our reviews
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7" data-aos="fade-up">
                                <div className="content-container">
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', height: '100%' }}>
                                        <strong>POSSIBLE INCREASED HOME VALUE: </strong> Solar (PV) Systems are viewed as upgrades, like a ren-
                                        ovated kitchen or a finished basement, so purchasing a solar energy system will likely
                                        increase your home’s value. Studies** show that homeowners pay a premium for a solar
                                        home; one study showed that on average, solar increased the value of a home by about
                                        $15,000, other sources show an average increase of 4% of the homes value. Although ho-
                                        using and other market factors like electricity rates and system size may impact the size
                                        of the premium, solar homes can sell for more than homes without PV, and typically sell
                                        quicker than comparable homes without solar energy systems.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="image-container">
                                    <img
                                        src="assets/content/gosolar_green.png"
                                        alt="Home Image"
                                        style={{
                                            display: 'block',
                                            width: '262px',
                                            height: '250px',
                                            borderRadius: '8px',
                                            marginLeft: '18%'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
