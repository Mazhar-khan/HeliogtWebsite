import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutSolarInstallation(props) {
    const { data } = props

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sqs-html-content">
                                    {/* <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px', fontWeight: '600' }}>
                                        Solar for your home or business.
                                    </h3> */}
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }} data-aos="fade-up" dangerouslySetInnerHTML={{ __html: data?.text }}>
                                    </p>
                                    {/* <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                        We want our customers to be thrilled about their experience in choosing to go solar with Helio GreenTech.  When you work with us, you
                                        can be confident that you’ll get the best workmanship, best solar equipment, and best warranties in town. Thanks to our amazing team and
                                        to all our customers that have placed their trust in Helio GreenTech to make us The Best Solar Company two years in a row.
                                    </p> */}
                                    {/* <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px', fontWeight: '600' }}>
                                        What Makes Helio GreenTech the Best Solar company in Kansas City?
                                    </h3> */}
                                    {/* <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }} data-aos="fade-up">
                                        According the the Pitch Magazine, KC’s Best and our partnership with EnergySage. Helio GreenTech has been recognized as one of the
                                        best solar installers in Kansas City in a large part through our reviews and customer satisfaction surveys through third parties. We are
                                        grateful to our customers for their feedback and we look forward to providing a great experience and 5-Star customer service to our
                                        customers; not just for the install, but for any issues, concerns or claims that may occur for years to come.<br />
                                        <strong> Experience and Expertise:</strong> Helio GreenTech was founded by leadership that has been in the solar industry since 2008. With a proven track
                                        record of experience and expertise in the solar industry, and a history of successful installations and satisfied customers in the Kansas City
                                        area. We have a team of skilled professionals who are knowledgeable about solar technology, local regulations, and best practices for solar
                                        panel installation.<br />
                                        <strong> Customized Solutions:</strong> Helio GreenTech offers customized solar solutions tailored to the unique needs and requirements of homeowners
                                        in Kansas City. This includes conducting a thorough assessment of a homeowner's energy usage, roof orientation, and other factors to
                                        design a solar system that maximizes energy production and savings.<br />
                                        “Customers report enjoying the process of going through solar and find the initial presentation more informative, the educational approach
                                        helps homeowners feel they are making the right decision and puts the homeowner in the driver seat of their purchasing experience when
                                        going solar with Helio GreenTech.” - Customer Satisfaction Survey from KC’s Best 2022.<br />
                                        <strong> Quality Products and Services: </strong>Helio GreenTech provides high-quality solar panels, inverters, and other equipment that is reliable and
                                        durable, with warranties and performance guarantees that are best in class industry wide
                                    </p> */}
                                    {/* <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                        “They also offer comprehensive services, such as system design, installation, maintenance, and monitoring, to ensure that their customers'
                                        solar systems are operating efficiently and effectively.” - Customer Satisfaction Survey from KC’s Best 2022.
                                    </p> */}
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
