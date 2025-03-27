import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Boxes() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/homeblocksweb`);
                console.log('response', response.data.data)
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

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation ={false}
                    pagination={{ clickable: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[ Pagination]}
                    className="mySwiper"
                >
                    {data?.map((it, index) => (
                        <SwiperSlide key={index}>
                            <div className="fe-block styled-box h-100">
                                <div className="sqs-block html-block sqs-block-html sqs-background-enabled">
                                    <div className="sqs-block-content">
                                        <div className="sqs-html-content">
                                            <div className="sqsrte-scaled" style={{ marginTop: '18%' }}>
                                                <p style={{ textAlign: 'center', fontSize: '26px' }}>
                                                    <strong className="sqsrte-text-color--white">
                                                        {it.title.split(" ")[0]}
                                                    </strong>
                                                </p>
                                                <p style={{ textAlign: 'center' }} data-aos="fade-down">
                                                    <span className="sqsrte-text-color--accent">
                                                        <strong style={{ fontSize: '36px' }}>
                                                            {it.title.split(" ")[1]}
                                                        </strong>
                                                    </span>
                                                    <br />
                                                    <strong style={{ color: "white", fontSize: '24px' }}>
                                                        {it.title.split(" ")[2]}
                                                    </strong>
                                                </p>
                                            </div>
                                            <hr style={{ width: '50%', marginLeft: '25%', marginTop: '12%', color: '#fff' }} />
                                            <p className="white-text" style={{ padding: '15px', textAlign: 'center' }}>
                                                <span dangerouslySetInnerHTML={{ __html: it.text }} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}
