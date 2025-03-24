import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutGoingSolar() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    return (
        <>
            <section data-aos="fade-up"
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
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#topSlideOutModal"
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

            <div
                className="modal fade"
                id="topSlideOutModal"
                tabIndex={-1}
                aria-labelledby="topSlideOutModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-dialog-slideout"
                    style={{ maxWidth: 800, width: "100%" }}
                >
                    <div className="modal-content" >
                        <div className="modal-header"
                            style={{

                                background: 'rgba(217, 217, 217, 1)'
                            }}>
                            <h5 className="modal-title" id="topSlideOutModalLabel">
                                Free Estimate
                            </h5>
                            <button
                                className="btn btn-close p-1"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div
                            className="modal-body"
                            style={{
                                padding: "10px !important", background: 'rgba(217, 217, 217, 1)'
                            }}
                        >
                            <div className="panel-body">
                                <div
                                    className="panel-group"
                                    id="accordion"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <div id="template-form-container">
                                        <div className="MuiScopedCssBaseline-root css-9sqakh">
                                            <div>
                                                <div
                                                    className="panel actionFormContainer"
                                                    id="action-form-container"
                                                >
                                                    <form
                                                        data-no-bind-invalid-form-validate="true"
                                                        className="collapse show"
                                                        noValidate="novalidate"
                                                        style={{}}
                                                    >

                                                        <div className="well well-form-dotted">
                                                            <div className="form-block form-block-lg mb20 mt20 pl10 pr10">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div class="mb-3">
                                                                            <label for="firstName" class="form-label">First Name</label>
                                                                            <input type="text" class="form-control" id="firstName" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="lastName" class="form-label">Last Name</label>
                                                                        <input type="text" class="form-control" id="lastName" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="address" class="form-label">Address  (required)</label>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="country" class="form-label">Country</label>
                                                                            <select class="form-select" aria-label="Default select example">
                                                                                <option selected>United State</option>
                                                                                <option value="2">Tunisia</option>
                                                                                <option value="3">Turkey</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="address" class="form-label">Address Line 1  (required)</label>
                                                                            <input type="text" class="form-control" id="address" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="address" class="form-label">Address Line 2  (required)</label>
                                                                            <input type="text" class="form-control" id="address" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
                                                                    <div className="col-md-4">
                                                                        <label for="city" class="form-label">City (required)</label>
                                                                        <input type="text" class="form-control" id="city" />
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label for="state" class="form-label">State (required)</label>
                                                                        <input type="text" class="form-control" id="state" />
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label for="zipcode" class="form-label">ZIP Code (required)</label>
                                                                        <input type="text" class="form-control" id="zipcode" />
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="email" class="form-label">Email (required)</label>
                                                                            <input type="email" class="form-control" id="email" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="phone" class="form-label">Phone (required)</label>
                                                                            <input type="number" class="form-control" id="phone" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="message" class="form-label">Message (required)</label>
                                                                            <textarea class="form-control" id="message" rows="3"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{ background: ' rgba(217, 217, 217, 1)' }}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <button class="btn btn-primary btn-md" type="button">Submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
