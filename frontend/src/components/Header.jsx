import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="head">
      {/* Logo */}
      <img
        src="/src/assets/logo.png"
        alt="Logo"
        className="logo"
        onClick={() => setMenuOpen(false)}
      />

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={`list ${menuOpen ? "active" : ""}`}>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/donate", label: "Donate" },
          { to: "/volunteer", label: "Volunteer" },
          { to: "/contact", label: "Contact" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Search */}
      <div className="search">
        <FaSearch />
        <span>Search...</span>
      </div>
    </header>
  );
}

export default Header;
