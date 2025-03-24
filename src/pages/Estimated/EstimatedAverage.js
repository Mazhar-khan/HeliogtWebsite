import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../StateManagement/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EstimatedAverage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    const navigate = useNavigate();
    const { data, setData } = useContext(AppContext); // Use context to get data
    const [averageBill, setAverageBill] = useState(data.averageBill); // Default value for the slider

    const handleSliderChange = (event) => {
        const newAverageBill = event.target.value;
        setAverageBill(newAverageBill); // Update the average bill based on slider value
        setData(prevData => ({
            ...prevData,
            averageBill: newAverageBill // Update the average bill in context
        }));
    };

    const handleNextClick = () => {
        // Check if the average bill is set
        if (averageBill <= 0) {
            alert("Please select a valid average electricity bill before proceeding."); // Alert the user
            return; // Prevent navigation
        }

        // Log the average bill and other relevant data to the console
        console.log("Average Electricity Bill:", averageBill);
        console.log("Location Info:", data.locationInfo);
        console.log("Building Insights:", data.buildingInsights);

        // Navigate to the next page
        navigate('/estimatedorent');
    };

    return (
        <>
            <section
                data-test="page-section"
                data-section-theme=""
                className="page-section has-section-divider"
                style={{ marginTop: '5%' }}
            >
                <div
                    className="section-border"
                    data-controller="SectionDivider"
                    style={{ clipPath: "url(#section-divider-65a71425e0ad583da5cbf098)" }}
                >
                </div>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%', marginBottom: '5%' }}>
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
                                    {/* Background Image */}
                                    <div className="col-12" data-aos="fade-up">
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
                                                    alt="Solar Background"
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
                                    <div
                                        className="col-lg-6 col-md-8 col-sm-10 position-absolute text-center"
                                        style={{
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            background: "rgba(255, 255, 255, 0.3)",
                                            width: '100%',
                                            maxWidth: '691px',
                                            height: '100%',
                                            maxHeight: '530px',
                                            padding: "30px",
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
                                                marginTop: '15%',
                                            }}
                                        >
                                            Your current Costs
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
                                            <strong> What is Your Average <br /> Electricity Bill?</strong>
                                        </h2>

                                        {/* Slider Section */}
                                        <div
                                            className="d-flex justify-content-between align-items-center"
                                            style={{ marginBottom: "30px" }}
                                        >
                                            <span
                                                style={{
                                                    background: "#000",
                                                    color: "#fff",
                                                    padding: "5px 10px",
                                                    borderRadius: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                ${averageBill}
                                            </span>
                                            {/* Slider Input */}
                                            <input
                                                type="range"
                                                min="0"
                                                max="500" // Set the maximum value according to your needs
                                                value={averageBill}
                                                onChange={handleSliderChange}
                                                className="accent" // Add a class for styling
                                                style={{ width: '100%' }}
                                            />
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

                                        {/* Footer Note */}
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "#555",
                                                marginTop: "10px",
                                            }}
                                        >
                                            We use this info to estimate your plan and savings!
                                        </p>
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