import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesResidental({ data }) {
    console.log('data',data)
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row">
                            {data?.map((item, index) => {
                                return (
                                    <div className="col-md-4" data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} key={index}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100vh',
                                                width: '100%',
                                            }}
                                        >
                                            <img
                                                src={item.photo} 
                                                alt={item.heading}
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '351px',
                                                    height: '481px',
                                                    border: '2px solid lightgreen',
                                                    borderRadius: '0px 100px 0px 100px'
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginTop: '5%' }}>
                                            <h4 style={{ fontWeight: '600' }}>{item.heading }</h4>
                                            <div
                                                style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}
                                                dangerouslySetInnerHTML={{ __html: item.text }} // Render rich text from API or default text
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
