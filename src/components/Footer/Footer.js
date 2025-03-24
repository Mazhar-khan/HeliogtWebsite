
import React from 'react';
export default function Footer() {

    return (
        <div>
            <footer className='curve' style={{ marginTop: '5%' }}>



                <div className="content">
                   
                    <div className="top">
                        <div className="logo-details">
                            <img className='logo-name' src={'assets/content/right.png'} style={{ width: '30%', marginLeft: '3%', marginTop: '5%' }} />

                        </div>
                        <div className="media-icons">
                            <img
                                src={'assets/content/favicon-196x196.png'}
                                style={{ opacity: '0.49' }}
                            />
                        </div>

                    </div>

                    <div className="link-boxes">
                        <ul className="box">
                            <li style={{ color: 'white' }}>PHONE</li>
                            <li className="link_name">
                                <a href="#" >(816) 631-1099</a>
                            </li>
                            <li style={{ color: 'white', marginTop: '20%' }}>LOCATIONS</li>
                            <li>
                                <a href="#"> 1321 Burlington st Suite 300, North Kansas
                                    City MO 64116 210 SW Market St. Suite 158
                                    Lee’s Summit MO 64063</a>
                            </li>
                            <li style={{ color: 'white', marginTop: '20%' }}>HOURS</li>
                            <li>
                                <a href="#"> Mon - Thu: 9:00 AM - 8:00 PM | Fri-Sat:
                                    9:00 AM - 4:30 PM</a>
                            </li>
                        </ul>
                        <ul className="box">
                            <li style={{ color: 'white' }}>EXPLORE</li>
                            <li style={{ color: 'white', marginTop: '20%' }}>
                                <a href="#">App design</a>
                            </li>
                            <li>
                                <a href="#">Web design</a>
                            </li>
                            <li>
                                <a href="#">Logo design</a>
                            </li>
                            <li>
                                <a href="#">Banner design</a>
                            </li>
                            <li>
                                <a href="#">Logo design</a>
                            </li>
                            <li>
                                <a href="#">Banner design</a>
                            </li>
                        </ul>
                        <ul className="box">
                            <li style={{ color: 'white' }}>Services</li>
                            <li style={{ color: 'white', marginTop: '20%' }}>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">My account</a>
                            </li>
                            <li>
                                <a href="#">Prefrences</a>
                            </li>
                            <li>
                                <a href="#">Purchase</a>
                            </li>
                        </ul>
                        <ul className="box"></ul>
                    </div>
                </div>

            </footer>

        </div>
    );
}
