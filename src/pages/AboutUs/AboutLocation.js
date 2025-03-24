import React from 'react';

export default function AboutLocation() {
    return (
        <>
            <section data-test="page-section">

                <div class="content-wrapper">
                    <div class="container" style={{ marginTop: '5%', backgroundColor: 'var(--tweak-text-block-background-color)' }}>
                        <div class="row" >
                            <div class="col-md-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6042594422177!2d-94.5728603!3d39.1336724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f073f9dcb9b1%3A0x3e10f66511e03fc2!2sNorth%20Kansas%20City%2C%20MO%2C%20USA!5e0!3m2!1sen!2s!4v1692177446804!5m2!1sen!2s"
                                    width="600"
                                    height="450"

                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                {/* <div class="map" id="map-kansas-city" style={{height: '300px'}}></div> */}

                            </div>

                            <div class="col-md-6 mt-4">

                                <h2><strong>Kansas City</strong></h2>
                                <p>1321 BURLINGTON ST SUITE 300 NORTH KANSAS CITY 64116</p>
                                <p><strong>Email</strong></p>
                                <p>info@heliogt.com</p>
                                <p><strong>Phone</strong></p>
                                <p><a href="tel:8166311099">(816) 631-1099</a></p>

                            </div>

                        </div>
                        <div class="row mt-4">
                            <div class="col-md-6 mt-4">

                                <h2><strong>Lee’s Summit</strong></h2>
                                <p>210 SW 12th St Suite 158 Lee’s Summit MO 64063</p>
                                <p><strong>Email</strong></p>
                                <p>info@heliogt.com</p>
                                <p><strong>Phone</strong></p>
                                <p><a href="tel:8664354648">866-435-4648</a></p>
                                <p><a href="tel:8166311099">(816) 631-1099</a></p>

                            </div>
                            <div class="col-md-6">

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.236802030936!2d-94.37752928463398!3d38.90047597957045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f1f13c879b7b%3A0xf1a4bb38f1a4fcfd!2s210%20SW%2012th%20St%20Suite%20158%2C%20Lee&#39;s%20Summit%2C%20MO%2064063%2C%20USA!5e0!3m2!1sen!2s!4v1692178252395!5m2!1sen!2s"
                                    width="600"
                                    height="450"
                                  
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
