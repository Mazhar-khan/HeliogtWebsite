import React from 'react';


export default function ServicesLocation() {
    return (
        <>
            <section className="page-section">

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <h2 style={{ textAlign: 'center', marginTop: '3%',fontWeight: '600' }}>OUR LOCATIONS</h2>
                        <div className="row" style={{ display: 'flex', alignItems: 'stretch', marginTop: '5%' }}>

                            <div
                                className="col-md-6"

                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6042594422177!2d-94.5728603!3d39.1336724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f073f9dcb9b1%3A0x3e10f66511e03fc2!2sNorth%20Kansas%20City%2C%20MO%2C%20USA!5e0!3m2!1sen!2s!4v1692177446804!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"

                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"

                                    style={{

                                        border: '2px solid lightgreen',
                                        boxShadow: '4px 4px 17.9px 0px rgba(0, 0, 0, 0.25)',
                                        maxHeight: '550px',
                                        maxWidth: '604px'
                                    }}
                                >
                                </iframe>

                                <div style={{ marginTop: '10%' }}>
                                    <h3 style={{ textAlign: 'center' }}>KANSAS CITY</h3>
                                    <p style={{ textAlign: 'center' }}>1321 BURLINGTON ST SUITE 300 NORTH KANSAS CITY 64116</p>
                                </div>
                            </div>

                            <div
                                className="col-md-6"

                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.236802030936!2d-94.37752928463398!3d38.90047597957045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f1f13c879b7b%3A0xf1a4bb38f1a4fcfd!2s210%20SW%2012th%20St%20Suite%20158%2C%20Lee&#39;s%20Summit%2C%20MO%2064063%2C%20USA!5e0!3m2!1sen!2s!4v1692178252395!5m2!1sen!2s"

                                    width="100%"
                                    height="100%"

                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"

                                    style={{

                                        border: '2px solid lightgreen',
                                        boxShadow: '4px 4px 17.9px 0px rgba(0, 0, 0, 0.25)',
                                        maxHeight: '550px',
                                        maxWidth: '604px'
                                    }}
                                >
                                </iframe>

                                <div style={{ marginTop: '10%' }}>
                                    <h3 style={{ textAlign: 'center' }}>LEE’S SUMMIT</h3>
                                    <p style={{ textAlign: 'center' }}>210 SW 12th St  Suite 158 Lee’s Summit MO 64063</p>
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
                                                className="button-elements"
                                                style={{ textDecoration: 'none', color: 'rgba(238, 238, 238, 1)',fontWeight: '500'}}
                                            >
                                                Check out our reviews 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
