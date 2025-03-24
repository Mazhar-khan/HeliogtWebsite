import React from 'react';

export default function OurServices() {
    return (
        <>
            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
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
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        Our Services
                                    </h3>

                                    <h4 style={{marginTop: '8%',fontSize: '20px'}}>Is solar a good fit for your home or Business?</h4>
                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px',marginTop: '5%' }}>
                                        <strong>Find out now!</strong> If you are considering going solar, the first step is to get a solar
                                        savings report to determine if solar is right for you and your home.
                                    </p>
                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px' }}>
                                    A solar  system provides an opportunity for anyone who is looking to reduce monthly 
                                    utility bills and make a long-term, low-risk investment.
                                    </p>

                                    <div style={{marginTop: '8%'}}>
                                    <a  href="/contact"
                                     class="button-elemented">Get an online quote</a>
                                    </div>
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
                                    src="assets/content/service_img1.jpg"
                                    alt="Home Image"
                                    style={{
                                        display: 'block',
                                        objectFit: 'cover',
                                        width: '100%',
                                        maxWidth: '632px', // Limit the image width
                                        height: '100%',
                                        maxHeight: '413px', // Limit the image height
                                        border: '2px solid lightgreen',
                                        borderRadius: '8px', // Optional rounding for style
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
