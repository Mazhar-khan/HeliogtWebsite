import React from 'react'

export default function SolarSameEnerg() {
    return (
        <>
            <section className="page-section" >

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>SAME ENERGY, LOWER PAYMENTS, AND OWN YOUR POWER!</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '18px', marginTop: '2%' }}>
                                        Do you own your home? Why not own your power? Helio GreenTech helps homeowners become power owners as well, making <br />
                                        your power bill an asset rather than a liability. Go solar today and start owning your power and let your home go to work for you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px',

                                }}
                            >

                                <div className='styleds-box'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%', // Full height of the viewport (adjust as needed)
                                        width: '100%', // Full width of the container

                                    }}
                                >
                                    <img
                                        src="assets/content/service_img1.jpg"
                                        alt="Home Image"

                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '381px',
                                            border: '2px solid lightgreen',
                                            borderRadius: '100px 0px 0px 0px',
                                        }}
                                    />
                                </div>
                            </div>

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
                                            fontWeight: '600'
                                        }}
                                    >
                                        FINANCING
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        Financing is the most common way to
                                        purchase panels for your home. After your
                                        custom system is installed, you pay a
                                        monthly payment comparable to prior utility
                                        payments while you build equity in your solar
                                        energy system.
                                    </p>
                                  
                                    <div style={{ marginTop: '8%' }}>
                                        <a href="/contact"
                                            class="button-elemented">Learn more</a>
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
