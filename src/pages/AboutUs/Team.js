import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export default function Team() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/ourteamv`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Our Team | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Meet the dedicated professionals at Helio Green Tech who are driving innovation in sustainable energy solutions." />
                <meta name="keywords" content="Helio Green Tech, team, renewable energy experts, solar panel specialists, sustainable energy professionals" />
            </Helmet>

            <section className="team-section py-5">
                <div className="container">
                    <h2 className="text-center text-dark fw-bold mb-5">Meet Our Team</h2>
                    <div className="row justify-content-center">
                        {data.map((member) => (
                            <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                                <div className="team-card shadow-lg rounded border-0 overflow-hidden d-flex flex-column h-100">
                                    <div className="team-img-wrapper">
                                        <img src={member.photo} className="img-fluid" alt={member.name} />
                                    </div>
                                    <div className="team-content text-center p-4 d-flex flex-column flex-grow-1">
                                        <h5 className="text-primary fw-bold">{member.name}</h5>
                                        <p className="text-muted fst-italic">{member.designation}</p>
                                        <hr className="divider" />
                                        <p className="text-secondary flex-grow-1" dangerouslySetInnerHTML={{ __html: member.text }}></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
