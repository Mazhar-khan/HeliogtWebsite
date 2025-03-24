import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhatMore() {
     useEffect(() => {
            AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
        }, []);

    return (
        <div data-aos="fade-up">
            <div className="container" style={{ marginTop: '6%' }}>
                <div className="row">
                    <div className="col-12 text-center my-3">
                        <h2 className="text-center" style={{fontWeight: '600'}}>Want More Info?</h2>
                        <p className="text-center">Want More Info?</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {[
                        {
                            title: 'PHONE',
                            content: 'Questions or queries?\nGet in touch!\n(816) 631-1099',
                        },
                        {
                            title: 'HOURS',
                            content: 'Mon - Thu: 9:00 AM - 8:00 PM\nFri-Sat: 9:00 AM - 4:30 PM',
                        },
                        {
                            title: 'SUPPORT',
                            content: 'Our friendly team is here to help\nINFO@HELIOGT.COM',
                        },
                    ].map((item, index) => (
                        <div key={index} className="col-md-4 d-flex">
                            <div
                                className="card w-100"
                                style={{
                                    border: '1px solid transparent', // Make the border transparent to show the gradient
                                    borderRadius: '12px', // Set the border radius
                                    padding: '15px',
                                    background: 'white', // Set the background color for the inner content
                                    backgroundClip: 'content-box', // Ensures the background is applied only to the content area
                                    borderImage: 'linear-gradient(180deg, rgba(147, 204, 15, 0.8) 0%, rgba(13, 22, 71, 0.8) 100%) 1' // Define the gradient border
                                }}

                            >
                                <div className="card-body d-flex flex-column justify-content-center text-center"
                                >
                                    <h4 className="mb-3">{item.title}</h4>
                                    <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
