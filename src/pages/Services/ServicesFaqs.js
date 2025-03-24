import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ServicesFaqs() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        // If the clicked item is already active, close it; otherwise, open it.
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            id: 1,
            question: "Get a Free Estimate",
            answer:
                "Get a Custom-Designed System  We can handle both roof- mounted and ground - mounted solar panel installation, depending on the need.Our professionals will take the time to carefully examine your property to determine the best location for installation and how to design your system.From there, Helio GreenTech and our partners can easily handle your installation. Handling Your Installation with Ease If you’re ready to get solar panels for your Kansas City, MO home, then please consider giving us a call.We’d be happy to provide you with a free estimate on our services.Get a Custom - Designed System We can handle both roof - mounted and ground - mounted solar panel installation, depending on the need.Our professionals will take the time to carefully examine your property to determine the best location for installation and how to design your system.From there, Helio GreenTech and our partners can easily handle your installation. If you’re ready to get solar panels for your Kansas or Missouri home, then please consider giving us a call.We’d be happy to provide you with a free estimate on our services.",
        },
        {
            id: 2,
            question: "Why is the sky blue?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
        },
        {
            id: 3,
            question: "Will we ever discover aliens?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
        },
        {
            id: 4,
            question: "How much does the Earth weigh?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
        },
        {
            id: 5,
            question: "How do airplanes stay up?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
        },
    ];

    return (
        <>

            <div className="container" data-aos="fade-up">
                <h3 style={{ textAlign: 'center', fontWeight: '600' }}>People may ask</h3>
                <div className="row" style={{ marginTop: '3%' }}>
                    <div className="col-md-12">
                        <div className="accordion" >
                            {faqItems.map((item, index) => (
                                <div className="accordion-item" style={{ padding: '5px' }} key={item.id}>
                                    <button
                                        id={`accordion-button-${item.id}`}
                                        aria-expanded={activeIndex === index}
                                        onClick={() => handleAccordionToggle(index)}
                                    >
                                        <span className="accordion-title">{item.question}</span>
                                        <span
                                            className={`icons  fas ${activeIndex === index ? "fa-angle-up" : "fa-angle-down"
                                                }`}
                                            aria-hidden="true"
                                        ></span>
                                    </button>
                                    <div
                                        className={`accordion-content ${activeIndex === index ? "open" : ""
                                            }`}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
