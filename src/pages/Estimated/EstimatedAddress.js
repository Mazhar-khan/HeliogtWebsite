import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useContext, useEffect } from 'react';
import { AppContext } from '../StateManagement/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EstimatedAddress() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    const navigate = useNavigate();
    const { data } = useContext(AppContext); // Use context to get data

    // Extracting data from context
    const address = data.locationInfo ?
        `${data.locationInfo.street} ${data.locationInfo.streetNumber}, ${data.locationInfo.city}, ${data.locationInfo.state} ${data.locationInfo.postalCode}, USA` :
        "Address not provided"; // Default message if no address is passed

    const lat = data.locationInfo?.geo[0] || 37.7749; // Default latitude
    const lng = data.locationInfo?.geo[1] || -122.4194; // Default longitude

    return (
        <>
            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <LoadScript googleMapsApiKey="AIzaSyAz5z8de2mOowIGRREyHc3gT1GgmJ3whDg" libraries={['places']}>
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-md-12">
                                    <img
                                        onClick={() => navigate('/')}
                                        src="assets/content/right.png"
                                        alt="Home Image"
                                        style={{
                                            width: '100%',
                                            maxWidth: '154px',
                                            height: '100%',
                                            maxHeight: '42px',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                                <div className="col-md-6" data-aos="fade-down" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100vh' }}>
                                    <div className="sqs-html-content">
                                        <h3 style={{ whiteSpace: 'pre-wrap', fontSize: '36px', fontWeight: '600' }}>
                                            <strong>YOUR ADDRESS</strong>
                                        </h3>
                                        <p style={{ textAlign: 'center', marginTop: '15%' }}>
                                            {address.split(',').map((line, index) => (
                                                <span key={index}>
                                                    {line}<br />
                                                </span>
                                            ))}
                                        </p>

                                        <div style={{ marginTop: '20%' }}>
                                            <a
                                                onClick={() => navigate('/estimatedaverage')}
                                                className="buttoned-element"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                }}
                                            >
                                                That’s Right
                                                <i
                                                    className="fas fa-long-arrow-alt-right"
                                                    style={{
                                                        fontSize: '30px',
                                                        marginLeft: '40px',
                                                    }}
                                                ></i>
                                            </a>
                                        </div>

                                        <div style={{ marginTop: '15px' }}>
                                            <a
                                                onClick={() => navigate('/estimated')}
                                                className="buttons-elemented"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                }}
                                            >
                                                <i
                                                    className="fas fa-long-arrow-alt-left"
                                                    style={{
                                                        fontSize: '30px',
                                                        marginRight: '15px',
                                                    }}
                                                ></i>
                                                That’s Not Right
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 styled-box" data-aos="fade-up" style={{ height: '100vh' }}>
                                    <GoogleMap
                                        mapContainerStyle={{ height: '100%', width: '100%' }}
                                        center={{ lat, lng }} // Center the map on the passed coordinates
                                        zoom={20}
                                        options={{
                                            mapTypeId: 'satellite',
                                            disableDefaultUI: true,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </LoadScript>
                </div>
            </section>
        </>
    );
}