import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../StateManagement/Context';
import BoxesNext from './BoxesNext';
import SolarEstimated from './SolarEstimated';
import Graph from './Graph';
import Footer from './Footer';
import axios from 'axios';

export default function EstimatedFinalPage() {
    const { userId } = useParams();
    const { data } = useContext(AppContext);
    const { userInfo } = data;
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kcsundial.com/api/proposalshow/${userId}`);
                setApiData(response.data.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]);

    return (
        <>
            {loading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h2>Loading...</h2>
                </div>
            ) : (
                <section style={{ position: 'relative', height: '100vh',  }}>
                    <div className="section-border position-absolute" style={{ zIndex: -1, width: '100%', height: '100%' }}>
                        <div className="section-background position-absolute" style={{ width: '100%', height: '100%' }}>
                            <img
                                alt="Background"
                                src="../assets/content/home.png"
                                className="w-100 h-100"
                                style={{ display: "block", height: '100%', width: '100%', objectFit: 'cover' }}
                            />
                            <div
                                className="section-background-overlay position-absolute"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none", width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="content-wrapper" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <div data-fluid-engine="true" style={{ width: '100%', maxWidth: '800px', padding: '20px' }}>
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div className="sqs-html-content">
                                        <div className="parent-container" style={{ position: 'relative' }}>
                                            <div style={{ marginBottom: '20px' }}>
                                                <img src={'../assets/content/favicon-196x196.png'} alt="Favicon" style={{ maxWidth: '100%', height: 'auto' }} />
                                            </div>
                                            <p style={{ textAlign: 'center', color: 'rgba(238, 238, 238, 1)' }}>Hey!</p>
                                            <h2 style={{ textAlign: 'center', color: 'rgba(238, 238, 238, 1)', fontSize: '2rem', fontWeight: '600' }}>
                                                Check Out Your Free Solar Estimate!
                                            </h2>
                                            <p style={{ textAlign: 'center', color: 'rgba(238, 238, 238, 1)' }}>
                                                Tailor made for you using a flat-rate to save you money!
                                            </p>

                                            <div className="container-fluid d-flex justify-content-center align-items-center" id='card' style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                                                <div id="card" style={{
                                                    width: '100%',
                                                    maxWidth: '470px',
                                                    height: '250px',
                                                    background: "rgba(255, 255, 255, 0.5)",
                                                    border: "2px solid #77B900",
                                                    borderRadius: "12px",
                                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: '20px'
                                                }}>
                                                    <div style={{ marginBottom: 10 }}>
                                                        <img src="../assets/content/final_solar.png" alt="Solar Panel Icon" style={{ width: 60, height: 50 }} />
                                                    </div>
                                                    <h2 style={{ color: "#001B71", fontWeight: "bold", fontSize: "28px" }}>
                                                        ${apiData ? apiData.monthly : 'N/A'}*
                                                    </h2>
                                                    <p style={{ fontSize: '22px', color: "#001B71", fontWeight: "bold", marginBottom: 10 }}>
                                                        Monthly Payment
                                                    </p>
                                                    <p style={{ fontSize: '12px', color: "black", textAlign: "center", padding: "0 10px" }}>
                                                        *Estimated cost with financing a 100% energy bill offset. Keep reading to learn more about your system, savings, and additional bonuses.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </section>
            )}
            <BoxesNext />
            <SolarEstimated apiData={apiData} />
            <Graph />
            <Footer />
        </>
    );
}