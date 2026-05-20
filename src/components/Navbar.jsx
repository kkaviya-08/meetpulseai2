import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

        <div className="logo">
          MeetPulse <span>AI</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/reports"
            className={location.pathname === "/reports" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Reports
          </Link>
        </div>

        <Link to="/dashboard" className="nav-btn">
        Start Analysis
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;