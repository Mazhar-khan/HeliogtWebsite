import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./Slider";
import Boxs from "./Boxs";
import Button from "./Button";
import CurvedSection from "./CurvedSection";
import SaveSolar from "./SaveSolar";
import SolarConsultation from "./SolarConsultation";
import GoingSolar from "./GoingSolar";
import SolarService from "./SolarService";
import Boxes from "./Boxes";
import SolarInstallition from "./SolarInstallition";
import OutstandingSection from "./OutstandingSection";
import OurReview from "./OurReview";
import OurLocation from "./OurLocation";
import WhatMore from "./WhatMore";
import BrandImg from "./BrandImg";
import { Helmet } from 'react-helmet';
import Testimonial from '../testimonial/Testimonial';
import Team from '../AboutUs/Team';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
    const [data, setData] = useState(null);
    const [solar, setSolar] = useState(null)
    const [images, setImages] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/websitemeta/1`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const fetchDataOfGoSolar = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/gosolar/1`);
                setSolar(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };



        const fetchImageData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/ourworkweb`);
                setImages(response.data.data.slice(0, 8));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };



        fetchData();
        fetchDataOfGoSolar();
        fetchImageData();
    }, []);

    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <Helmet>
                <title>Home | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Welcome to Helio Green Tech, your premier source for innovative green technology solutions. Discover our commitment to sustainability, renewable energy, and eco-friendly practices designed to help you transition to a greener future. Join us in making a positive impact on the environment!" />
                <meta name="keywords" content="Helio Green Tech, home, green technology, sustainable solutions, renewable energy, eco-friendly products, environmental innovation, clean technology" />
            </Helmet>

            <section >
                <div
                    className="section-border position-absolute"
                    style={{ zIndex: -1 }}
                >
                    <div className="section-background position-absolute">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-100 object-fit-cover"
                            style={{ display: "block", height: "100vh", objectFit: "cover" }}
                        >
                            <source src={data && data[0]?.video} type="video/mp4" />

                        </video>

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
                                                <h2>
                                                    <strong className="text-accents">
                                                        Solar  </strong>
                                                    <strong className="text-accente">Power</strong>
                                                </h2>
                                                <p style={{ textAlign: "center", color: '#fff', fontWeight: '600', fontSize: '18px' }}>
                                                    Installing a greener future for the
                                                    <span className="text-accent" style={{ color: ' #B3EF27' }}> earth </span> and your
                                                    <span className="text-accent" style={{ color: ' #B3EF27' }}> wallet </span>.
                                                </p>
                                                <div className="sqs-block-content" >
                                                    <div style={{ marginBottom: '15%' }}>
                                                        <a
                                                            onClick={() => navigate('/estimated')}
                                                            className="button-elements"
                                                            style={{ textDecoration: 'none', fontWeight: '600', cursor: 'pointer' }}
                                                        >
                                                            Get An Estimate
                                                        </a>
                                                    </div>
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


            <section className="page-section" style={{ marginTop: '-11%' }} data-aos="fade-up">
                <div className="content-wrapper py-5" style={{ backgroundColor: '#D9D9D9', maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row" style={{ marginTop: '3%' }}>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="sqs-html-content" style={{ marginTop: '5%' }}>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px', fontWeight: '600' }}>
                                        {solar && solar[0]?.heading}
                                        {/* <span style={{ color: 'rgba(147, 204, 15, 1)' }}> {solar[0]?.heading.split(" ")}</span>  */}
                                    </h3>
                                    <p dangerouslySetInnerHTML={{ __html: solar && solar[0]?.text.substring(0, 290) }} style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="video-container">
                                    <div className="styled-box" style={{ height: '50vh', width: '90%' }}>
                                        <iframe
                                            src={solar && solar[0]?.video}
                                            frameBorder="0"
                                            allowFullScreen
                                            title="Solar Consultation Video"
                                            style={{ width: '100%', height: '100%' }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div data-aos="fade-up">
                    <h2 style={{ textAlign: 'center', marginTop: '8%' }}>
                        <strong>Our Projects</strong>
                    </h2>
                    <div className="containers" style={{ marginTop: '3%' }}>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {images?.map((image, index) => (
                                <SwiperSlide key={index} data-aos="fade-up">
                                    <div className='containers'>
                                        <div className="product-box">
                                            <div className="product-opacity"></div>
                                            <img src={image.photo} alt={image.name} style={{ cursor: 'pointer' }} />
                                            <div className="product-content">
                                                <h1 className="text-center">{image.name}</h1>
                                                <span className="text-center">{image.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section> */}

            <Slider />
            <Boxs />
            <Button />
            <CurvedSection />
            <SaveSolar />
            <SolarConsultation />
            <GoingSolar />
            <SolarService />
            <Boxes />
            <SolarInstallition />
            <OutstandingSection />
            <Team />
            {/* <OurReview /> */}
            <Testimonial />
            <OurReview />
            <OurLocation />
            <WhatMore />
            <BrandImg />

        </>
    );
};

export default Home;