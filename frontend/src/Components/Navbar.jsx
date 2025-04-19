import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import { UserData } from "../UserContext";

const Navbar = () => {
  const { isAuth, logoutUser } = UserData();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  const categories = [
    "Government Internship",
    "Paid Legal Internship",
    "Online Internship",
    "NGO Internship",
    "Internship with Advocate",
    "Internship with Law Firm",
    "Corporate Internship",
    "Internship Guide",
  ];
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* Toggle Button for Small Screens */}
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>

          {/* Navigation Links */}
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={closeNavbar}>
              Home
            </Link>
            <Link to="/about" onClick={closeNavbar}>
              About
            </Link>
            <Link to="/articles" onClick={closeNavbar}>
              Articles
            </Link>

            {/* internship Dropdown */}
            <div className="dropdown">
              <Link
                to="/internships"
                onClick={closeNavbar}
                className="dropdown-toggle"
              >
                Internships <span className="arrow">&#9660;</span>
              </Link>
              <div className="dropdown-menu">
                {/* <Link onClick={closeNavbar}>GOVERNMENT INTERNSHIP</Link>
                <Link onClick={closeNavbar}>PAID LEGAL INTERNSHIP</Link>
                <Link onClick={closeNavbar}>ONLINE INTERNSHIP</Link>
                <Link onClick={closeNavbar}>NGO INTERNSHIP</Link>
                <Link onClick={closeNavbar}>INTERNSHIP WITH ADVOCATE</Link>
                <Link onClick={closeNavbar}>INTERNSHIP WITH LAW FIRM</Link>
                <Link onClick={closeNavbar}>CORPORATE INTERNSHIP</Link>
                <Link onClick={closeNavbar}>INTERNSHIP GUIDE</Link> */}
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/internships/category/${encodeURIComponent(category)}`}
                    onClick={closeNavbar}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            {/* jobs dropdown */}
            <div className="dropdown">
              <Link
                to="/internship"
                onClick={closeNavbar}
                className="dropdown-toggle"
              >
                Jobs <span className="arrow">&#9660;</span>
              </Link>
              <div className="dropdown-menu">
                <Link onClick={closeNavbar}>GOVERNMENT JOB</Link>
                <Link onClick={closeNavbar}>LAW FIRM JOB</Link>
                <Link onClick={closeNavbar}>COLLEGE JOB </Link>
                <Link onClick={closeNavbar}>LEGAL JOB</Link>
              </div>
            </div>
            {/* resources dropdown */}
            <div className="dropdown">
              <Link
                to="/internship"
                onClick={closeNavbar}
                className="dropdown-toggle"
              >
                Resources <span className="arrow">&#9660;</span>
              </Link>
              <div className="dropdown-menu">
                <Link onClick={closeNavbar}>LEGAL DRAFT</Link>
                <Link onClick={closeNavbar}>CAREER GUIDE</Link>
                <Link onClick={closeNavbar}>LEGAL NEWS </Link>
              </div>
            </div>
            {/* opportunities */}
            <div className="dropdown">
              <Link
                to="/internships"
                onClick={closeNavbar}
                className="dropdown-toggle"
              >
                Opportunities <span className="arrow">&#9660;</span>
              </Link>
              <div className="dropdown-menu">
                <Link onClick={closeNavbar}>CALL FOR BLOG AND ARTICLES</Link>
                <Link onClick={closeNavbar}>ESSAY COMPETETIONS</Link>
                <Link onClick={closeNavbar}>CALL FOR PAPER</Link>
                <Link onClick={closeNavbar}>MOOT COURT COMPETETIONS</Link>
                <Link onClick={closeNavbar}>WEBINAR</Link>
                <Link onClick={closeNavbar}>CONFERENCE</Link>
              </div>
            </div>
            <Link to="/contact" onClick={closeNavbar}>
              Contact
            </Link>
          </div>
          {/* login btn */}
          {isAuth ? (
            <Link to="/login">
              <button className=" btns_logout" onClick={handleLogout}>
                Logout{" "}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className=" btns">
                Login{" "}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
