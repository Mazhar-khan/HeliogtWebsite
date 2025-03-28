import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [submenu, setSubmenu] = useState([]);

  const navItems = [
    { name: "About Us", path: "about-us" },
    { name: "Services", path: "services" },
    { name: "Partners", path: "partners" },
    { id: "our-work", name: "Our Work", path: "our-work" },
    // { name: "Go Solar", path: "gosolar" },
    { name: "Financing", path: "financing" },
    // { name: "FAQ", path: "faq" },
    { name: "Careers", path: "careers" },
    { name: "Solar News", path: "solar-news" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    async function fetchSubmenu() {
      try {
        const response = await axios.get('https://kcsundial.com/api/aboutusdata');
        const dynamicItems = response.data.data.map((item) => ({
          id: item.id,
          name: item.heading,
          path: item.heading.replace(/\s+/g, '-').toLowerCase(),
        }));

        setSubmenu([
          ...dynamicItems,
        ]);
      } catch (error) {
        console.error("Error fetching submenu:", error);
      }
    }
    fetchSubmenu();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutUsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="assets/content/right.png"
            alt="Helio GreenTech"
            className="navbar-logo-img"
          />
        </Link>
      </div>

      <button
        className={`navbar-burger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>

      <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => {
          const isActive = location.pathname === `/${item.path}`;
          if (item.name === "About Us") {
            return (
              <div
                key={index}
                className={`nav-item dropdown ${isActive ? "active" : ""}`}
                ref={dropdownRef}
              >
                <button
                  className={`nav-link dropdown-toggle ${isActive ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAboutUsOpen(!isAboutUsOpen);
                  }}
                  aria-haspopup="true"
                  aria-expanded={isAboutUsOpen}
                >
                  {item.name}
                </button>
                {isAboutUsOpen && (
                  <div className="dropdown-container">
                    <div className="dropdown-card show">
                      {submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/${subItem.id}`}
                          className="dropdown-item"
                          onClick={() => {
                            setIsAboutUsOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return (
            <div key={index}>
              <Link
                to={`/${item.path}`}
                className={`navbar-link ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          );
        })}

        {/* Phone Button */}
        <button
          className="navbar-link button-header"
          onClick={() => navigate('/estimated')}
        >
          Get An Estimate
        </button>
      </nav>
    </header>
  );
};

export default Header;