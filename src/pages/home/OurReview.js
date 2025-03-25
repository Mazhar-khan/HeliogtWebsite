import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function OurReview() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/webrating`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '8%' }}>
                <strong>Our REVIEW</strong>
            </h2>

            <div className="container text-center my-3">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },  
                        768: { slidesPerView: 2 },  
                        1024: { slidesPerView: 3 }  
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {data.map((it, index) => (
                        <SwiperSlide key={index} className="testimonial-slide">
                            <div className="testimonial">
                                <div className="testimonial-img">
                                    <img src={it.photo} alt={it.heading} className="img-fluid rounded-circle" />
                                </div>
                                <h5 className="testimonial-name">{it.name}</h5>
                                <div className="testimonial-rating text-warning">
                                    {[...Array(parseInt(it.rating))].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: it.text }}></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
