import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "axios";

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
            <h2 className="text-center mb-4"><strong>What Our Clients Say</strong></h2>
            <div className="row justify-content-center">
                {data.map((testimonial) => (
                    <div key={testimonial.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card border-0 shadow-sm p-4 h-100 text-center">
                            <img 
                                src={testimonial.photo} 
                                alt={testimonial.name} 
                                className="rounded-circle mx-auto mb-3" 
                                style={{ width: "80px", height: "80px", objectFit: "cover", border: "4px solid #f8f9fa" }} 
                            />
                            <h5 className="mb-1">{testimonial.name}</h5>
                            <p className="text-muted mb-2">{testimonial.designation}</p>
                            <div className="stars text-warning mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                            <p className="text-muted" style={{ fontSize: "0.95rem", minHeight: "60px" }} dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
