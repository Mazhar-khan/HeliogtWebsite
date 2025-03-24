import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SolarPotential() {
     useEffect(() => {
            AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
        }, []);

    return (
        <>
            <section className="page-section" data-aos="fade-up">

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>POTENTIAL HOME VALUE INCREASE</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '18px', marginTop: '2%' }}>
                                        Missouri’s solar resources actually exceed those of Germany, which leads the world in <br />
                                        solar energy production on less than three kWh per square meter per day." visit <br />
                                        energy.mo.gov for more information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    padding: '20px',

                                }}
                            >
                                <div className="sqs-html-content">
                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px' }}>
                                        **Learn more about how solar panels increase property values:
                                        <ul>
                                            <li>Lawrence Berkeley National Laboratory: Selling into the sun:
                                                Price premium analysis of a multi-state dataset of solar
                                                homes.</li>
                                            <li>Energy Efficiency and Renewable Energy: Solar and Real Estate.</li>
                                            <li>SunShot Programs: Bring Solar Energy Basics to Real Estate Pros.</li>
                                            <li>EnergySage: Solar Panels Increase Property Values.</li>
                                            <li>New York Times: Appraising solar energy's value:
                                                Solar panels and home values.</li>
                                            <li>CNET ECON 101: Solar panels increase home values.</li>
                                            <li>Zillow Research: Homes with solar panels sell for 4.1% more
                                                By Sarah Mikhitarian on Apr. 16, 2019.</li>
                                        </ul>
                                    </p>


                                </div>
                            </div>

                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px',

                                }}
                            >
                                <img
                                    src="assets/content/solar_potential.png"
                                    alt="Home Image"
                                    style={{
                                     
                                        width: '100%',
                                        maxWidth: '432px',
                                        height: '100%',
                                        maxHeight: '380px',
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
