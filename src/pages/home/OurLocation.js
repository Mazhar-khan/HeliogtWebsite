import React from 'react'

export default function OurLocation() {
    return (
        <>
            <section className="page-section" style={{marginTop: '6%'}}>
                <div className="section-border" data-controller="SectionDivider" style={{ clipPath: "url(#section-divider-65a6b757d33ea3703d6aa7aa)" }}>
                    <div className="section-background"></div>
                </div>

                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center my-3">
                                        <h2 className="text-center"><strong>OUR LOCATIONS</strong></h2>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    {/* Map on the left */}
                                    <div className="col-md-8">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.572118108797!2d-94.57243318462423!3d39.14222157953154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f0b4ab5f09fb%3A0x16c7e6e3e4e6de89!2s1321%20Burlington%20St%2C%20Kansas%20City%2C%20MO%2064116%2C%20USA!5e0!3m2!1sen!2s!4v1679876543210!5m2!1sen!2s"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, height: '100vh' }}

                                        ></iframe>
                                    </div>

                                    {/* Text on the right */}
                                    <div className="col-md-4">
                                        <h4 style={{ textAlign: 'left', fontSize: '16px' }}>All Locations (2) </h4>
                                        <hr />
                                        <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Helio GreenTech</h4>
                                        <p style={{ textAlign: 'left', fontSize: '13px' }}>1321 Burlington st Suite 300<br />
                                            North Kansas City, MO, United States</p>
                                        <hr />
                                        <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Helio GreenTech</h4>
                                        <p style={{ textAlign: 'left', fontSize: '13px' }}>210 SW Market Street<br />
                                            Lees Summit, MO, United States</p>
                                        <hr />
                                        <div style={{ marginTop: '12%' }}>
                                            <h4 style={{ textAlign: 'left', fontSize: '18px' }}>KANSAS CITY</h4>
                                            <p style={{ textAlign: 'left', fontSize: '13px' }}>1321 BURLINGTON ST SUITE 300 NORTH KANSAS CITY 64116</p>
                                        </div>
                                        <div style={{ marginTop: '6%' }}>
                                            <h4 style={{ textAlign: 'left', fontSize: '18px' }}>LEE’S SUMMIT</h4>
                                            <p style={{ textAlign: 'left', fontSize: '13px' }}>210 SW Market St. Suite 158 Lee’s Summit MO 64063</p>
                                        </div>
                                        <div class="d-flex justify-content-start gap-2">
                                            <a class="buttonl-elements" >Request a free estimate </a>
                                            <a class="buttonl-elements" >Request a free estimate </a>
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
