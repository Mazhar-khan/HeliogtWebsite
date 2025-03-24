import { useNavigate } from 'react-router-dom';
import { useState, useRef, useContext, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { GoogleMap, LoadScript, Circle, Marker, InfoWindow } from '@react-google-maps/api';
import { AppContext } from '../StateManagement/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define libraries outside of the component
const libraries = ['places'];

export default function Estimated() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const { data, setData } = useContext(AppContext); // Use context
    const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });
    const [isAddressSelected, setIsAddressSelected] = useState(false);
    const apiKey = "AIzaSyAz5z8de2mOowIGRREyHc3gT1GgmJ3whDg"; // Replace with your actual API key

    // State variables for results
    const [resultPanelCount, setResultPanelCount] = useState('');
    const [resultYearlyEnergy, setResultYearlyEnergy] = useState('');
    const [resultMaxPanel, setResultMaxPanel] = useState('');
    const [resultRoofArea, setResultRoofArea] = useState('');
    const [resultCO2, setResultCO2] = useState('');
    const [resultSunshine, setResultSunshine] = useState('');
    const [sqrFeet, setSqrFeet] = useState('');

    // State for marker and info window
    const [markerPosition, setMarkerPosition] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [circleCenter, setCircleCenter] = useState(null); // Center of the circle
    const [circleRadius, setCircleRadius] = useState(100); // Default radius

    const handlePlaceSelected = async (place) => {
        const addressComponents = place.address_components;
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        const locationData = {
            geo: [lat, lng],
            country: addressComponents.find(component => component.types.includes("country"))?.long_name || null,
            country_iso: addressComponents.find(component => component.types.includes("country"))?.short_name || null,
            state: addressComponents.find(component => component.types.includes("administrative_area_level_1"))?.long_name || null,
            city: addressComponents.find(component => component.types.includes("locality"))?.long_name || null,
            postalCode: addressComponents.find(component => component.types.includes("postal_code"))?.long_name || null,
            street: addressComponents.find(component => component.types.includes("route"))?.long_name || null,
            streetNumber: addressComponents.find(component => component.types.includes("street_number"))?.long_name || null,
        };

        setMapCenter({ lat, lng });
        setIsAddressSelected(true);
        setMarkerPosition({ lat, lng }); // Set marker position

        // Update context with location info
        setData(prevData => ({
            ...prevData,
            locationInfo: locationData,
        }));

        try {
            const insights = await findClosestBuilding(locationData, apiKey);
            setData(prevData => ({
                ...prevData,
                buildingInsights: insights,
            }));

            // Update the results in the state
            updateResults(insights);

            // Set circle center and radius
            const closestBuilding = insights.closestBuilding;
            setCircleCenter({
                lat: closestBuilding.geo[0],
                lng: closestBuilding.geo[1]
            });
            setCircleRadius(closestBuilding.radius || 100); // Set radius from insights
        } catch (error) {
            console.error("Error fetching building insights:", error);
        }
    };

    async function findClosestBuilding(location, apiKey) {
        const args = {
            'location.latitude': location.geo[0].toFixed(5),
            'location.longitude': location.geo[1].toFixed(5),
        };
        const params = new URLSearchParams({ ...args, key: apiKey });
        const response = await fetch(`https://solar.googleapis.com/v1/buildingInsights:findClosest?${params}`);
        const content = await response.json();
        if (response.status !== 200) {
            console.error('findClosestBuilding\n', content);
            throw content;
        }
        return content;
    }

    const updateResults = (buildingInsights) => {
        let panelCapacityWattsInput = 250;
        let dcToAcDerateInput = 0.85;
        let monthlyAverageEnergyBillInput = 300;
        let energyCostPerKwhInput = 0.31;
        let yearlyKwhEnergyConsumption = (monthlyAverageEnergyBillInput / energyCostPerKwhInput) * 12;
        const solarPotential = buildingInsights.solarPotential;
        const defaultPanelCapacity = buildingInsights.solarPotential.panelCapacityWatts;
        const panelCapacityRatio = panelCapacityWattsInput / defaultPanelCapacity;
        const haji = panelCapacityRatio * dcToAcDerateInput;
        const yearlymax = yearlyKwhEnergyConsumption / haji;
        let config;

        function findPanelsCount(buildingInsights, yearlymax) {
            const solarPanelConfigs = buildingInsights.solarPotential.solarPanelConfigs;
            for (let i = 0; i < solarPanelConfigs.length; i++) {
                config = solarPanelConfigs[i];
                if (config.yearlyEnergyDcKwh >= yearlymax) { return config.panelsCount; }
            }
        }

        const panelsCount = findPanelsCount(buildingInsights, yearlymax);

        // Calculate total yearly energy and other metrics
        const totalYearlyEnergy = solarPotential.solarPanelConfigs.reduce((acc, config) => acc + config.yearlyEnergyDcKwh, 0);
        const maxPanelCount = solarPotential.solarPanels.length;

        // Update state variables
        setResultPanelCount(panelsCount);
        setResultYearlyEnergy(config ? (config.yearlyEnergyDcKwh * panelCapacityRatio) + ' KWh' : 'N/A');
        setResultMaxPanel(maxPanelCount);
        setResultRoofArea(solarPotential.wholeRoofStats.areaMeters2 + ' m²');
        setResultCO2(solarPotential.carbonOffsetFactorKgPerMwh + ' Kg/MWh');
        setResultSunshine(solarPotential.maxSunshineHoursPerYear);
        setSqrFeet(solarPotential.wholeRoofStats.areaMeters2);

        // Additional data updates
        setData(prevData => ({
            ...prevData,
            postalCode: buildingInsights.postalCode,
            administrativeArea: buildingInsights.administrativeArea,
            regionCode: buildingInsights.regionCode,
            city: buildingInsights.administrativeArea,
            latitude: buildingInsights.center.latitude,
            longitude: buildingInsights.center.longitude,
        }));

        if (maxPanelCount > 0) {
            document.getElementById('gform_submit_button_1').disabled = false;
        } else {
            alert('No insight available for this address, please enter a valid address');
        }
    };

    const handleSubmit = () => {
        if (isAddressSelected) {
            console.log("Location Info:", data.locationInfo);
            console.log("Building Insights:", data.buildingInsights);
            navigate('/estimatedaddress', {
                state: {
                    address: `${data.locationInfo.street} ${data.locationInfo.streetNumber}, ${data.locationInfo.city}, ${data.locationInfo.state} ${data.locationInfo.postalCode}, ${data.locationInfo.country}`,
                    lat: data.locationInfo.geo[0],
                    lng: data.locationInfo.geo[1],
                }
            });
        }
    };

    return (
        <section className="page-section">
            <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
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
                            <div className="col-md-6" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100vh' }}>
                                <div className="sqs-html-content">
                                    <h3 style={{ whiteSpace: 'pre-wrap', fontSize: '36px', fontWeight: '600' }}>
                                        HOW Much Your<br />SOLAR will COST
                                    </h3>
                                    <p>What is Your Address?</p>

                                    <div ref={dropdownRef} style={{ position: 'relative', width: '100%', maxWidth: '370px' }}>
                                        <Autocomplete
                                            apiKey={apiKey}
                                            onPlaceSelected={handlePlaceSelected}
                                            style={{
                                                width: '100%',
                                                height: '56px',
                                                margin: '10px 0',
                                                padding: '10px',
                                                background: 'rgba(217, 217, 217, 1)',
                                                border: '1px solid rgba(147, 204, 15, 0.3)',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                fontSize: '12px',
                                            }}
                                            placeholder="Enter a valid address"
                                            options={{
                                                types: ['address'],
                                            }}
                                        />
                                    </div>

                                    <br />

                                    <div style={{ marginTop: '15px' }}>
                                        <a
                                            onClick={handleSubmit}
                                            className="button-elementeds"
                                            style={{
                                                display: 'inline-block',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                opacity: isAddressSelected ? 1 : 0.5,
                                                pointerEvents: isAddressSelected ? 'auto' : 'none',
                                            }}
                                        >
                                            Submit
                                        </a>
                                    </div>

                                    <ul style={{ marginTop: '25%', listStyleType: 'disc', textAlign: 'left' }}>
                                        <li>Up 100% Energy Cost Savings</li>
                                        <li>Reduce Your Carbon Footprint</li>
                                        <li>Increased Home Value</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 styled-box" data-aos="fade-down" style={{ height: '100vh' }}>
                                <GoogleMap
                                    mapContainerStyle={{ height: '100%', width: '100%' }}
                                    center={mapCenter}
                                    zoom={20}
                                    options={{
                                        mapTypeId: 'satellite',
                                        disableDefaultUI: true,
                                    }}
                                >
                                    {data.locationInfo && (
                                        <>
                                            {markerPosition && (
                                                <Marker
                                                    position={markerPosition}
                                                    onClick={() => setShowInfoWindow(true)} // Show info window on marker click
                                                />
                                            )}
                                            {showInfoWindow && markerPosition && (
                                                <InfoWindow
                                                    position={markerPosition}
                                                    onCloseClick={() => setShowInfoWindow(false)} // Close info window
                                                >
                                                    <div>
                                                        <h4>Solar Insights</h4>
                                                        <p>Panel Count: {resultPanelCount}</p>
                                                        <p>Yearly Energy: {resultYearlyEnergy}</p>
                                                        <p>Max Panel: {resultMaxPanel}</p>
                                                        <p>Roof Area: {resultRoofArea}</p>
                                                        <p>CO2 Offset: {resultCO2}</p>
                                                        <p>Sunshine Hours: {resultSunshine}</p>
                                                        <p>Square Feet: {sqrFeet}</p>
                                                    </div>
                                                </InfoWindow>
                                            )}
                                            {circleCenter && (
                                                <Circle
                                                    center={circleCenter}
                                                    radius={circleRadius}
                                                    options={{
                                                        fillColor: 'rgba(255, 0, 0, 0.2)',
                                                        strokeColor: 'rgba(255, 0, 0, 0.5)',
                                                        strokeWeight: 2,
                                                    }}
                                                />
                                            )}
                                        </>
                                    )}
                                </GoogleMap>
                            </div>
                        </div>
                    </div>
                </LoadScript>
            </div>
        </section>
    );
}