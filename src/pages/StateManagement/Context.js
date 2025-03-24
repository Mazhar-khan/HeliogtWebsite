import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({
        locationInfo: null,
        buildingInsights: null,
        averageBill: 275, // Default value for average bill
        housecat: null, // Property to store house category
        housetype: null, // Property to store house type
        userInfo: { // New property to store user information
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            housecat: null,
            housetype: null,
            id: null,
            inputaddress: '',
            lati: null,
            longi: null,
            monthly: 0,
            panelcount: 0,
            roofarea: 0,
            savings: 0,
            sqfeet: 0,
            state: '',
            sunshine: 0,
            system_cost: 0,
            system_size: 0,
            country_iso: null,
            tax_incentive: 0,
            without_solar: 0,
            yenergy: 0,
            zip: ''
        }
    });

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};