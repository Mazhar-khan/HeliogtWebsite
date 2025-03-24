import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../StateManagement/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EstimatedORent() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    const navigate = useNavigate();
    const { data, setData } = useContext(AppContext); // Use context to get data
    const [selectedOption, setSelectedOption] = useState(null); // State to track selected option

    const handleSelection = (selection) => {
        setSelectedOption(selection); // Save the selection in state
        setData(prevData => ({
            ...prevData,
            housecat: selection // Save the selection in context
        }));
    };

    const handleNextClick = () => {
        // Check if an option is selected
        if (!selectedOption) {
            alert("Please select whether you own or rent your home before proceeding."); // Alert the user
            return; // Prevent navigation
        }
        navigate('/estimatedappartment'); // Navigate to the next page
    };

    return (
        <>
            <section
                data-test="page-section"
                className="page-section has-section-divider"
                style={{ marginTop: "5%" }}
            >
                <div
                    className="section-border"
                    data-controller="SectionDivider"
                    style={{ clipPath: "url(#section-divider-65a71425e0ad583da5cbf098)" }}
                ></div>
                <div
                    className="content-wrapper"
                    style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "5%" }}
                >
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-md-12">
                                    <img
                                        onClick={() => navigate('/')}
                                        src="assets/content/right.png"
                                        alt="Home Image"
                                        style={{
                                            width: '100%',
                                            maxWidth: '154px', // Limit the image width
                                            height: '100%',
                                            maxHeight: '42px', // Limit the image height
                                            cursor: 'pointer',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div
                                    className="row justify-content-center align-items-center"
                                    style={{ height: "100vh", position: "relative" }}
                                >
                                    {/* Background Section */}
                                    <div className="col-12">
                                        <div
                                            className="d-flex justify-content-center align-items-center"
                                            style={{
                                                width: "100%",
                                                height: "100vh",
                                            }}
                                        >
                                            <div
                                                className="position-relative"
                                                style={{
                                                    width: "100%",
                                                    maxWidth: "807px",
                                                    height: "100%",
                                                    maxHeight: "707px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <img
                                                    src="assets/content/estimated_average.png"
                                                    alt="Background"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div data-aos="fade-up"
                                        className="col-lg-6 col-md-8 col-sm-10 position-absolute text-center"
                                        style={{
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            background: "rgba(255, 255, 255, 0.3)",
                                            width: "100%",
                                            maxWidth: "691px",
                                            height: '100%',
                                            maxHeight: '550px',
                                            borderRadius: "12px",
                                            border: "2px solid #77B900",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Subheading */}
                                        <p
                                            style={{
                                                color: "#77B900",
                                                fontWeight: "bold",
                                                marginBottom: "15px",
                                                fontSize: "18px",
                                                marginTop: '8%',
                                            }}
                                        >
                                            About Your Home
                                        </p>

                                        {/* Main Heading */}
                                        <h2
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "36px",
                                                marginBottom: "30px",
                                                color: '#fff',
                                            }}
                                        >
                                            <strong>Do You Own or Rent <br /> Your Home?</strong>
                                        </h2>

                                        {/* Rent/Own Options */}
                                        <div
                                            className="d-flex justify-content-between align-items-center"
                                            style={{
                                                gap: "10px", // Adding gap between cards
                                            }}
                                        >
                                            <div
                                                className={`card d-flex flex-column align-items-center p-3 ${selectedOption === 'Rent' ? 'selected' : ''}`}
                                                style={{
                                                    border: "2px solid #77B900",
                                                    borderRadius: "12px",
                                                    marginBottom: "20px",
                                                    marginLeft: '23%',
                                                    cursor: 'pointer',
                                                    transition: 'border-color 0.3s',
                                                }}
                                                onClick={() => handleSelection('Rent')} // Handle rent selection
                                            >
                                                <img
                                                    src="assets/content/rent.png"
                                                    alt="Rent"
                                                    style={{
                                                        width: "100%",
                                                        maxWidth: "130px",
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <hr />
                                                <span
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#333",
                                                    }}
                                                >
                                                    RENT
                                                </span>
                                            </div>

                                            <div
                                                className={`card d-flex flex-column align-items-center p-3 ${selectedOption === 'Own' ? 'selected' : ''}`}
                                                style={{
                                                    border: "2px solid #77B900",
                                                    borderRadius: "12px",
                                                    marginBottom: "20px",
                                                    marginRight: '23%',
                                                    cursor: 'pointer',
                                                    transition: 'border-color 0.3s',
                                                }}
                                                onClick={() => handleSelection('Own')} // Handle own selection
                                            >
                                                <img
                                                    src="assets/content/own.png"
                                                    alt="Own"
                                                    style={{
                                                        width: "100%",
                                                        maxWidth: "130px",
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <hr />
                                                <span
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#333",
                                                    }}
                                                >
                                                    OWN
                                                </span>
                                            </div>
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            onClick={handleNextClick} // Call the new function on click
                                            className="btn btn-success btn-lg"
                                            style={{
                                                backgroundColor: "#77B900",
                                                border: "none",
                                                padding: "10px 30px",
                                                fontWeight: "bold",
                                                width: '376px',
                                                height: '55px',
                                                fontSize: "18px",
                                                borderRadius: "8px",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}