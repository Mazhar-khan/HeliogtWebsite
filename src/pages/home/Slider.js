import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

export default function Slider() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/ourworkweb`);
                setImages(response.data.data.slice(0, 8));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div data-aos="fade-up">
            <h2 style={{ textAlign: 'center', marginTop: '8%' }}> <strong>Our Projects</strong></h2>
            <div className="containers" style={{ marginTop: '3%' }}>
                {images?.map((image, index) => (
                    <div className="box" key={index} data-aos="fade-up">
                        <div className='containers'>
                            <div className="product-box">
                                <div className="product-opacity"></div>
                                <img src={image.photo} alt={image.name} style={{ cursor: 'pointer' }} />
                                <div className="product-content" >
                                    <h1 className="text-center">{image.name}</h1>
                                    <span className="text-center" style={{ textAlign: 'center' }}>{image.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}