import React, { useState, useEffect } from 'react';
import CareerConsultant from './CareerConsultant';
import { Helmet } from 'react-helmet';
import axios from "axios";


export default function Careers() {
    const [data, setData] = useState(null);
    const [metaData, setMetaData] = useState(null);

    const fetchMetaData = async () => {
        try {
            const response = await axios.get(`https://kcsundial.com/api/websitemeta/1`);
            console.log("data12", response.data.data)
            setMetaData(response.data.data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/careerjobsweb`);
                // console.log('response',response.data.data)
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchMetaData();
        fetchData();
    }, []);
    return (
        <>
            <Helmet>
                <title>Careers | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Join the Helio Green Tech team! Explore exciting career opportunities in renewable energy and be part of a sustainable future." />
                <meta name="keywords" content="Careers, Helio Green Tech, job opportunities, renewable energy jobs, join our team" />
            </Helmet>

            <section >
                <div
                    className="section-border position-absolute"
                    style={{ zIndex: -1 }}
                >
                    <div className="section-background position-absolute">
                        {
                            metaData && (
                                <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-100 object-fit-cover"
                                style={{ display: "block", height: "80vh", objectFit: "cover" }}
                            >
                                <source src={metaData.video} type="video/mp4" />
                            </video>
                            )
                        }
                       
                        <div
                            className="section-background-overlay position-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none" }}
                        />
                    </div>
                </div>
                {/* Content */}
                <div
                    className="content-wrapper position-relative"
                    style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}
                >
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div
                                        className="sqs-block html-block sqs-block-html"

                                    >
                                        <div className="sqs-block-content">
                                            <div className="sqs-html-content">
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <h2 className="text-bottom-left">

                                                        <strong className="text-accentes">Career </strong>
                                                        <strong className="text-accented"> Opportunities </strong>
                                                    </h2>
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

            <section className="page-section has-section-divider" style={{ marginTop: '-5%' }}>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            {
                                data?.map((it)=>(
                                    <div className="row">
                                    <div className="col-md-4">
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100vh', // Full height of the viewport (adjust as needed)
                                                width: '100%', // Full width of the container
    
                                            }}
                                        >
                                            {/* <img
                                                src="assets/content/service_img1.jpg"
                                                alt="Home Image"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '351px',
                                                    height: '358px',
                                                    border: '2px solid lightgreen',
                                                    borderRadius: '50px 0px 50px 0px'
                                                }}
                                            /> */}
                                        </div>
                                        <div style={{ marginTop: '-3%' }}>
                                            <h4> {it.title} </h4>
                                            <p 
                                             dangerouslySetInnerHTML={{ __html: it.text }} 
                                            style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                               
                                            </p>
                                        </div>
    
    
                                    </div>
                                </div>
                                ))
                            }
                            {/* <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100vh', // Full height of the viewport (adjust as needed)
                                            width: '100%', // Full width of the container

                                        }}
                                    >
                                        <img
                                            src="assets/content/service_img7.png"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-6%' }}>
                                        <h4>Master Electrician</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            Our electricians are licensed and NABCEP
                                            certified. We are looking to hire or partner
                                            with  master electricians who install PV or
                                            are looking to get into the PV industry.
                                        </p>
                                    </div>


                                </div>
                                <div className="col-md-4">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100vh', // Full height of the viewport (adjust as needed)
                                            width: '100%', // Full width of the container

                                        }}
                                    >
                                        <img
                                            src="assets/content/serviecs_img6.png"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-6%' }}>
                                        <h4>Install Team</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            Our install teams our professional licensed
                                            and insured, with the newest and highest
                                            grade equipment in the industry. With pro-
                                            cesses in place to allow for quick, safe, and
                                            clean installs. Our teams believe in doing the
                                            job right the first time.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-md-2"></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <CareerConsultant /> */}
        </>
    )
}
