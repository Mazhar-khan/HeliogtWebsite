import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import axios from "axios";

export default function AboutGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState(null);
    const [metaData, setMetaData] = useState(null);

    const fetchMetaData = async () => {
        try {
            const response = await axios.get(`https://kcsundial.com/api/websitemeta/1`);
            console.log("data12", response.data.data)
            setMetaData(response.data.data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/ourworkweb`);
                setImages(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchMetaData();
        fetchData();
    }, []);



    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <Helmet>
                <title>Our Work | Helio Green Tech - Innovating Sustainable Solutions</title>
                <meta name="description" content="Explore our gallery showcasing innovative solar energy solutions and projects by Helio Green Tech. See how we are making a difference in sustainable energy." />
                <meta name="keywords" content="Helio Green Tech, gallery, solar energy, renewable energy, eco-friendly projects, sustainable solutions" />
            </Helmet>
            <section>
                <div className="section-border position-absolute" style={{ zIndex: -1 }}>
                    <div className="section-background position-absolute">
                        {
                            metaData && (
                                <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-100 object-fit-cover"
                                style={{ display: "block", height: "80vh", objectFit: "cover" }}
                            >
                                <source src={metaData.video} type="video/mp4" />
                            </video>
                            )
                        }
                       
                        <div
                            className="section-background-overlay position-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none" }}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="content-wrapper position-relative" style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div className="sqs-block html-block sqs-block-html">
                                        <div className="sqs-block-content">
                                            <div className="sqs-html-content">
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <h2 className="text-bottom-left">
                                                        <strong className="text-accentes"> Our</strong>
                                                        <strong className="text-accented"> Work </strong>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="containers" style={{ marginTop: '3%' }}>
                {images?.map((image, index) => (
                    <div className="box" key={index} onClick={() => openModal(index)} data-aos="fade-up">
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

            {isOpen && (
                <div className="modal" style={modalStyles}>
                    <span onClick={closeModal} style={closeButtonStyles}>&times;</span>
                    <img src={images[currentImageIndex].src} alt="" style={modalImageStyles} />
                    <h2 style={{ color: 'white', marginTop: '35%', textAlign: 'center' }}>
                        {images[currentImageIndex].name}
                    </h2>
                    <button onClick={prevImage} style={{ ...navButtonStyles, ...prevButtonStyles }}>&lt;</button>
                    <button onClick={nextImage} style={{ ...navButtonStyles, ...nextButtonStyles }}>&gt;</button>
                </div>
            )}

            {/* <AboutGalleryPart4 /> */}
            {/* <AboutGalleryPart5 /> */}
            {/* <AboutGalleryPart6 /> */}
        </>
    );
}

// Styles for the modal
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalImageStyles = {
    maxWidth: '90%',
    maxHeight: '90%',
};

const closeButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
};

const navButtonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '20px',
};

const prevButtonStyles = {
    left: '10px', // Position the previous button on the left
};

const nextButtonStyles = {
    right: '10px', // Position the next button on the right
};

// Add hover effect for the overlay
const employeeDetailsStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
};

const employeeImageStyle = {
    position: 'relative',
    cursor: 'pointer',
};

const employeeImageHoverStyle = {
    ...employeeImageStyle,
    '&:hover .employee-details': {
        opacity: 1,
    },
};