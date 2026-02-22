import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="head">
      {/* Logo */}
      <img src="/src/assets/logo.png" height="250" width="250" alt="Logo" />

      {/* Navigation links */}
      <div className="list">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/donate"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          Donate
        </NavLink>

        <NavLink
          to="/programs"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          Programs
        </NavLink>

        <NavLink
          to="/volunteer"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          Volunteer
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "list-item active" : "list-item"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Search (UI only for now) */}
      <div className="search">
        <FaSearch /> Search...
      </div>
    </div>
  );
}

export default Header;
