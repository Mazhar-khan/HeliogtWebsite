import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome


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

    // Function to render star rating
    const renderStars = (stars) => {
        const totalStars = 5; // Maximum rating
        return [...Array(totalStars)].map((_, i) => (
            <i key={i} className={`fa ${i < stars ? "fa-star text-warning glow" : "fa-star text-secondary"}`}></i>
        ));
    };

    return (
        <div className="review-section">
            <h2 className="review-heading">Hear From Our Happy Customers</h2>

            <div className="container text-center">
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
                    {data.map((it, index) => (
                        <SwiperSlide key={index} className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-img">
                                    <img src={it.photo} alt={it.name} className="img-fluid" />
                                </div>
                                <div>
                                    <h5 className="testimonial-name">{it.name}</h5>
                                </div>
                                <div>
                                    <h6 className="testimonial-category">{it.category}</h6>
                                </div>
                                <div className="testimonial-rating">
                                    {renderStars(it.stars)}
                                </div>
                                <div>
                                    <p className="testimonial-text">{it.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
