import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

export default function Boxes() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/homeblocksweb`);
                console.log('response',response.data.data)
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    
    return (
        <>
            <section className="page-section" style={{ marginTop: '8%' }}>
                <div className="section-border" data-controller="SectionDivider" style={{ clipPath: "url(#section-divider-65a6b757d33ea3703d6aa7aa)" }}>
                    <div className="section-background"></div>
                </div>

                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row d-flex align-items-stretch">
                                {/* Block 1 */}
                                {
                                    data?.map((it)=>(
                                        <div className="col-md-4">
                                        <div className="fe-block styled-box h-100">
                                            <div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-blend-mode="NORMAL">
                                                <div className="sqs-block-content">
                                                    <div className="sqs-html-content">
                                                        <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                            <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', fontSize: '26px' }}>
                                                                <strong className="sqsrte-text-color--white">
                                                                   {it.title.split(" ")[0]}
                                                                </strong>
                                                            </p>
                                                            <p style={{ whiteSpace: "pre-wrap", textAlign: 'center' }} data-aos="fade-down">
                                                                <span className="sqsrte-text-color--accent" >
                                                                    <strong style={{ fontSize: '36px' }}>{it.title.split(" ")[1]}</strong>
                                                                </span>
                                                                <br />
                                                                <strong style={{ color: "white", fontSize: '24px' }}> {it.title.split(" ")[2]}</strong>
                                                            </p>
                                                        </div>
    
                                                        <hr style={{ width: '50%', marginLeft: '25%', marginTop: '12%', color: 'rgba(255, 255, 255, 0.2)' }} />
                                                        {/* <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p> */}
                                                        <p style={{ padding: '15px', textAlign: 'center' }}>
                                                        <span style={{ color:'#fff !important' }} dangerouslySetInnerHTML={{ __html: it.text }} />
                                                        </p> 
                                                        {/* <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                              
                                {/* <div className="col-md-4">
                                    <div className="fe-block styled-box h-100">
                                        <div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-blend-mode="NORMAL">
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', fontSize: '26px' }}>
                                                            <strong className="sqsrte-text-color--white">
                                                                LINEAR SOLAR
                                                            </strong>
                                                        </p>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center' }} data-aos="fade-up">
                                                            <span className="sqsrte-text-color--accent">
                                                                <strong style={{ fontSize: '36px' }}>PRODUCTION</strong>
                                                            </span>
                                                            <br />
                                                            <strong style={{ color: "white", fontSize: '24px' }}> WARRANTY</strong>
                                                        </p>

                                                    </div>

                                                    <hr style={{ width: '50%', border: '1px solid', marginLeft: '25%', marginTop: '12%', color: 'rgba(255, 255, 255, 0.2)' }} />
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                    <p style={{ padding: '15px', textAlign: 'center' }}>
                                                        <span style={{ color: '#EEEEEE' }} >
                                                            our Helio GreenTech solar system
                                                            have a linear performance
                                                            warranty. Meaning that in the
                                                            event your system doesn’t produce
                                                            within a specified range as defined
                                                            in our contract we will compensate
                                                            for the shortfall based on electric
                                                            provider rates or add more panels
                                                            if needed.
                                                        </span>
                                                    </p>


                                                    <p style={{ padding: '17px', textAlign: 'center' }}>
                                                        <span style={{ color: '#EEEEEE' }} >
                                                            *(Manufacturer annual
                                                            degradation rate of .06%
                                                            annually. See contract for
                                                            specific details).
                                                        </span>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="fe-block styled-box h-100">
                                        <div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-blend-mode="NORMAL">
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center', fontSize: '26px' }}>
                                                            <strong className="sqsrte-text-color--white">
                                                                GO SOLAR WITH
                                                            </strong>
                                                        </p>
                                                        <p style={{ whiteSpace: "pre-wrap", textAlign: 'center' }} data-aos="fade-up">
                                                            <span className="sqsrte-text-color--accent">
                                                                <strong style={{ fontSize: '36px' }}>$0 DOWN</strong>
                                                            </span>
                                                            <br />
                                                            <strong style={{ color: "white", fontSize: '24px' }}> FINANCING</strong>
                                                        </p>

                                                    </div>

                                                    <hr style={{ width: '50%', marginLeft: '25%', marginTop: '12%', color: 'rgba(255, 255, 255, 0.2)' }} />
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                    <p style={{ padding: '15px', textAlign: 'center' }}>
                                                        <span style={{ color: '#EEEEEE' }} >
                                                            Our comprehensive solar systems
                                                            include solar monitoring for
                                                            production and when possible
                                                            whole-house consumption
                                                            tracking.  View from your
                                                            computer or phone app to track
                                                            your system performance,
                                                            transparency in your electric bill
                                                            like never before.
                                                        </span>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap" }}>&nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
