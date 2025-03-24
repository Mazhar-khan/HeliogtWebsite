import React from 'react'

export default function Button() {
    return (
        <>
            <section className="page-section">
                <div className="section-border" data-controller="SectionDivider" style={{ clipPath: "url(#section-divider-65a6b757d33ea3703d6aa7aa)" }}>
                    <div className="section-background"></div>
                </div>

                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
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
                                                style={{ textDecoration: 'none', color: 'black', fontWeight: '500' }}
                                            >
                                                START YOUR QUOTE
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
