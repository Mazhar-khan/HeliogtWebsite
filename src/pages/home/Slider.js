import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://kcsundial.com/api/ourworkweb");
                setImages(response.data.data.slice(0, 8));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Open modal with selected image
    const openImagePreview = (index) => {
        setSelectedImage(images[index].photo);
        setCurrentIndex(index);
    };

    // Navigate left in preview
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedImage(images[currentIndex - 1].photo);
        }
    };

    // Navigate right in preview
    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedImage(images[currentIndex + 1].photo);
        }
    };

    // Close modal
    const closePreview = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "8%" }}>
                <strong>Our Projects</strong>
            </h2>
            <div className="container" style={{ marginTop: "3%" }}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="product-box" onClick={() => openImagePreview(index)}>
                                <div className="product-opacity"></div>
                                <img
                                    src={image.photo}
                                    alt={image.name}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                    }}
                                />
                                <div className="product-content text-center">
                                    <h1>{image.name}</h1>
                                    <span>{image.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    className="image-preview-modal"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        zIndex: 9999,
                    }}
                >
                    <span
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            fontSize: "30px",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                        onClick={closePreview}
                    >
                        ✖
                    </span>
                    <img
                        src={selectedImage}
                        alt="Preview"
                        style={{
                            maxWidth: "90%",
                            maxHeight: "80%",
                            borderRadius: "10px",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    >
                        {/* Left Navigation */}
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: "30px",
                                color: "#fff",
                                cursor: currentIndex > 0 ? "pointer" : "not-allowed",
                                position: "absolute",
                                left: "10px",
                            }}
                        >
                            ◀
                        </button>

                        {/* Right Navigation */}
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === images.length - 1}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: "30px",
                                color: "#fff",
                                cursor: currentIndex < images.length - 1 ? "pointer" : "not-allowed",
                                position: "absolute",
                                right: "10px",
                            }}
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
