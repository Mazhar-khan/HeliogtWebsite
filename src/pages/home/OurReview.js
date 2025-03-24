import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from "axios";

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
                <div className="row mx-auto my-auto justify-content-center" style={{ gap: "10px" }}>
                    {data.map((it, index) => (
                        <div key={index} className="col-md-4 col-sm-6 col-12">
                            <div className="testimonial">
                                <div className="testimonial-img">
                                    <img src="https://source.unsplash.com/random/600x600" alt="" />
                                </div>
                                <div className="testimonial-name">{it.name}</div>
                                <div className="testimonial-rating">
                                    {[...Array(parseInt(it.rating))].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: it.text }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
