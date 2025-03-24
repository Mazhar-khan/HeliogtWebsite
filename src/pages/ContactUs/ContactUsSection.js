import React from 'react'

export default function ContactUsSection() {
    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="container"
                            style={{ background: 'rgba(217, 217, 217, 1)', padding: '30px' }}>
                            {/* Card deck */}
                            <div className="card-deck row">
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    {/* Card */}
                                    <div
                                        className="card"
                                        style={{
                                            border: "1px solid #d0e375", // Green border
                                            borderRadius: "8px", // Rounded corners
                                            padding: "20px", // Inner padding for content
                                            background: "#fff", // White background
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Subtle shadow
                                            fontFamily: "Arial, sans-serif", // Consistent font
                                            height: "400px", // Fixed height for the card
                                            position: "relative", // Position to place elements correctly
                                            backgroundImage: `url('./assets/content/contact_bg.png')`,
                                            backgroundSize: 'cover', // Ensures the image covers the entire card
                                            backgroundPosition: 'center', // Centers the image
                                            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                                        }}
                                    >
                                        {/* Card Title */}
                                        <h4 style={{ marginTop: "40%", fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#000", marginLeft: '36px' }}>
                                            <span style={{ width: "24px", height: "24px", backgroundColor: "red", borderRadius: "50%", position: "absolute", marginRight: '6px', left: "20px" }}></span>
                                            On Site Solar Consultation
                                        </h4>

                                        {/* Card Description */}
                                        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#444", flexGrow: 1,marginTop: '15%' }}>
                                            Scheduling an on-site visit is the best way to confirm that your property would be a good fit for solar. Our no-pressure educational approach helps empower you with...
                                        </p>

                                        {/* Button */}
                                        <button type="button" style={{ display: "block", padding: "10px 20px", backgroundColor: "#87d230", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", fontWeight: "bold", textAlign: "center", width: "100%", marginTop: 'auto' }}>
                                            For more details
                                        </button>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    {/* Card */}
                                    <div
                                        className="card"
                                        style={{
                                            border: "1px solid #d0e375",
                                            borderRadius: "8px",
                                            padding: "20px",
                                            background: "#fff",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                            fontFamily: "Arial, sans-serif",
                                            height: "400px", // Fixed height for the card
                                            position: "relative",
                                            backgroundImage: `url('./assets/content/contact_bg.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        {/* Card Title */}
                                        <h4 style={{ marginTop: "40%", fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#000", marginLeft: '36px' }}>
                                            <span style={{ width: "24px", height: "24px", backgroundColor: "rgba(61, 13, 238, 1)", borderRadius: "50%", position: "absolute", marginRight: '6px', left: "20px" }}></span>
                                            On Site Solar Consultation
                                        </h4>

                                        {/* Card Description */}
                                        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#444", flexGrow: 1,marginTop: '15%' }}>
                                            Most online appointments take less
                                            than 40 minutes to go over your so-
                                            lar design and answer your questi-
                                            ons. Our no pressure educational
                                            approach helps get you the in…
                                        </p>

                                        {/* Button */}
                                        <button type="button" style={{ display: "block", padding: "10px 20px", backgroundColor: "#87d230", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", fontWeight: "bold", textAlign: "center", width: "100%", marginTop: 'auto' }}>
                                            For more details
                                        </button>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    {/* Card */}
                                    <div
                                        className="card"
                                        style={{
                                            border: "1px solid #d0e375",
                                            borderRadius: "8px",
                                            padding: "20px",
                                            background: "#fff",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                            fontFamily: "Arial, sans-serif",
                                            height: "400px", // Fixed height for the card
                                            position: "relative",
                                            backgroundImage: `url('./assets/content/contact_bg.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        {/* Card Title */}
                                        <h4 style={{ marginTop: "40%", fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#000", marginLeft: '36px' }}>
                                            <span style={{ width: "24px", height: "24px", backgroundColor: "rgba(13, 238, 24, 1)", borderRadius: "50%", position: "absolute", marginRight: '6px', left: "20px" }}></span>
                                            30 min Meeting
                                        </h4>

                                        {/* Card Description */}
                                        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#444", flexGrow: 1,marginTop: '15%' }}>
                                            Schedule a 30 minute meeting, int-
                                            erview, service call, or site visit. Tha-
                                            nk you for booking a time with a He-
                                            lio GreenTech Representative. Zac
                                            Caro 913-732-1216…
                                        </p>

                                        {/* Button */}
                                        <button type="button" style={{ display: "block", padding: "10px 20px", backgroundColor: "#87d230", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", fontWeight: "bold", textAlign: "center", width: "100%", marginTop: 'auto' }}>
                                            For more details
                                        </button>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    {/* Card */}
                                    <div
                                        className="card"
                                        style={{
                                            border: "1px solid #d0e375",
                                            borderRadius: "8px",
                                            padding: "20px",
                                            background: "#fff",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                            fontFamily: "Arial, sans-serif",
                                            height: "400px", // Fixed height for the card
                                            position: "relative",
                                            backgroundImage: `url('./assets/content/contact_bg.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        {/* Card Title */}
                                        <h4 style={{ marginTop: "40%", fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#000", marginLeft: '36px' }}>
                                            <span style={{ width: "24px", height: "24px", backgroundColor: "rgba(238, 13, 125, 1)", borderRadius: "50%", position: "absolute", marginRight: '6px', left: "20px" }}></span>
                                            15 Min Phone Call
                                        </h4>

                                        {/* Card Description */}
                                        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#444", flexGrow: 1,marginTop: '15%' }}>
                                            Schedule a time for our team to
                                            give you a quick call to help ans-
                                            wer your questions.
                                        </p>

                                        {/* Button */}
                                        <button type="button" style={{ display: "block", padding: "10px 20px", backgroundColor: "#87d230", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", fontWeight: "bold", textAlign: "center", width: "100%", marginTop: 'auto' }}>
                                            For more details
                                        </button>
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
