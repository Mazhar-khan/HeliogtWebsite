import React from 'react'

export default function FinanceEstimate() {
    return (
        <>
            <section
                data-test="page-section"
                data-section-theme=""
                className="page-section has-section-divider"
                style={{ marginTop: '5%' }}
            >
                <div
                    className="section-border"
                    data-controller="SectionDivider"
                    style={{ clipPath: "url(#section-divider-65a71425e0ad583da5cbf098)" }}
                >
                    <div className="section-background"
                        style={{
                            objectFit: "cover",
                            width: "95%",
                            height: "100%",
                            marginLeft: "2%",
                            borderRadius: "12px",

                        }}>
                        <img
                            src="assets/content/solar_image.png"
                            width={1086}
                            height={700}
                            sizes="(max-width: 799px) 200vw, 100vw"
                            style={{
                                marginBottom: '3%',
                                display: "block",
                                objectPosition: "8.851035404141616% 44.80560070008751%"
                            }}
                            alt="Solar"
                        />
                        <div className="section-background-overlay" style={{ opacity: 0 }} />
                    </div>
                </div>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%', marginBottom: '5%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="fe-block fe-block-yui_3_17_2_1_1705442902517_93628">
                                        <div className="sqs-block button-block sqs-block-button sqs-stretched">
                                            <div className="sqs-block-content">
                                                <div className="sqs-block-button-container sqs-block-button-container--center" >
                                                    <h3 style={{ textAlign: "center", marginTop: '3%', color: 'white', whiteSpace: "pre-wrap", fontSize: '20px' }}>
                                                        <strong>Contact Us</strong>
                                                    </h3>
                                                    <p style={{fontSize: '14px', textAlign: "center", color: 'white' }}>
                                                        A free, no obligation quote can help you decide if <br />
                                                        solar is a good fit for you and your home.
                                                    </p>
                                                    <a
                                                    
                                                        href="/contact"
                                                        className="button-elementes"
                                                        style={{ textDecoration: 'none', color: '#fff' }}
                                                    >
                                                        Get a free estimate
                                                    </a>
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
        </>
    )
}
