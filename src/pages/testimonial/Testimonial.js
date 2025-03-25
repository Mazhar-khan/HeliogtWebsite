import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/webtestimonial`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ fontWeight: "600", fontSize: "2rem", color: "#333" }}>
                What Our Clients Say
            </h2>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation={false}
                pagination={false}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="mySwiper"
                modules={[Navigation, Pagination]}
            >
                {data.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="text-center">
                        <div className="card p-4 h-100 border rounded shadow-sm"
                            style={{
                                borderColor: "#ddd",
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}>
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="rounded-circle mx-auto mb-3"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "cover",
                                    border: "3px solid #e0e0e0"
                                }}
                            />
                            <h5 className="mb-1" style={{ fontWeight: "600", color: "#222" }}>{testimonial.heading}</h5>
                            <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{testimonial.designation}</p>
                            <p className="text-muted" style={{ fontSize: "1rem", fontStyle: "italic", minHeight: "60px" }}
                                dangerouslySetInnerHTML={{ __html: testimonial.text }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
