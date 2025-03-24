import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function SolarEstimated({ apiData }) {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const geocodeAddress = async (address) => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                    setLocation({
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    });
                    setLoading(false);
                } else {
                    setError('Geocode was not successful for the following reason: ' + status);
                    setLoading(false);
                }
            });
        };

        if (apiData && apiData.inputaddress) {
            geocodeAddress(apiData.inputaddress);
        } else {
            setLoading(false);
            setError('Address not available');
        }
    }, [apiData]);

    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="container">
                            <p style={{ color: 'rgba(147, 204, 15, 1)', fontWeight: '600' }}>My Solar Estimate</p>
                            <h3 style={{ fontWeight: '700', fontSize: '36px' }}>Estimated System Size,<br />
                                Savings & Incentives.</h3>
                            <p style={{ color: 'rgba(0, 0, 0, 1)', fontSize: '16px' }}>
                                The benefits of solar power stretch far beyond its already amazing environmental impact.<br />
                                Solar can help you save money, increase your home value, and opens you up to existing<br />
                                government tax credits.
                            </p>
                            <p style={{ color: 'rgba (0, 0, 0, 1)', fontSize: '16px' }}>
                                <strong>{apiData ? apiData.inputaddress : 'Address not available'}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="container-fluid" style={{
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderRadius: '10px',
                        border: '2px solid rgba(147, 204, 15, 1)',
                        boxShadow: '2px 5px 22.6px 0px rgba(0, 0, 0, 0.25)',
                    }}>
                        <div className="row" style={{ padding: '20px' }}>
                            <div className="col-12">
                                <LoadScript googleMapsApiKey="AIzaSyAz5z8de2mOowIGRREyHc3gT1GgmJ3whDg" libraries={['places']}>
                                    {loading ? (
                                        <div>Loading map...</div>
                                    ) : error ? (
                                        <div>{error}</div>
                                    ) : (
                                        <GoogleMap
                                            mapContainerStyle={{ height: '400px', width: '100%' }}
                                            center={location}
                                            zoom={20}
                                            options={{
                                                mapTypeId: 'satellite',
                                                disableDefaultUI: true,
                                            }}

                                        >
                                            <Marker position={location} />
                                        </GoogleMap>
                                    )}
                                </LoadScript>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/size_system.png"
                                            alt="System Size"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>{apiData ? apiData.system_size : 'N/A'} kW*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>System Size</strong></h5>
                                            <p style={{ color: '#7d7d7d', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                                                A solar system's size refers to the top <br />
                                                output of electricity the system is capable of generating.
                                            </p>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/dollar_icon.png"
                                            alt="Savings"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>${apiData ? apiData.savings : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>25 Year Savings</strong></h5>
                                            <p style={{ color: '#7d7d7d', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                                                This is the estimated savings over 25 years.
                                            </p>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient (90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/final_soicon.png"
                                            alt="Solar Panels"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>{apiData ? apiData.panelcount : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>Solar Panels</strong></h5>
                                            <p style={{ color: '#7d7d7d', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                                                The estimated number of panels your home will require to meet your energy needs.
                                            </p>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/tax_icon.png"
                                            alt="Tax Incentives"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>${apiData ? apiData.tax_incentive : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>Tax Incentives</strong></h5>
                                            <p style={{ color: '#7d7d7d', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                                                This is the available incentives in your area for a solar array of this size.
                                            </p>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/us_icon.png"
                                            alt="CO2 Offset"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>{apiData ? apiData.co2 : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>US Tonnes of CO2 Offset Per Year</strong></h5>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12 px)',
                                    }} />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/home_icon.png"
                                            alt="Added Home Value"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>${apiData ? apiData.home_value : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>Added Home Value</strong></h5>
                                            <p style={{ color: '#7d7d7d', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                                                Homes with solar power have increased market values.
                                            </p>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/hours_icon.png"
                                            alt="Sun Hours"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>{apiData ? apiData.sunHours : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>Sun Hours</strong></h5>
                                            <p style={{ color: '#7d7d7d', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                                                The total number of sun hours your roof gets.
                                            </p>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="info-box d-flex align-items-center" style={{ marginLeft: '5%' }}>
                                        <img
                                            src="../assets/content/electricity_icon.png"
                                            alt="Total Electricity Cost"
                                            style={{ width: '130px', height: 'auto', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h2 style={{ color: '#7ed321', fontSize: '34px', fontWeight: '800', marginBottom: '5px', textAlign: 'left' }}>
                                                <strong>${apiData ? apiData.without_solar : 'N/A'}*</strong>
                                            </h2>
                                            <h5 style={{ color: '#2b2e4a', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}><strong>Total Electricity Cost Without Solar</strong></h5>
                                        </div>
                                    </div>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        width: '400px',
                                        marginLeft: '6%',
                                        background: 'repeating-linear-gradient(90deg, #000, #000 6px, transparent 6px, transparent 12px)',
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}