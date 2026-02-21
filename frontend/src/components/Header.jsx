import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
function Header() {
  return (
    <div className="head">
      <img src="src/assets/logo.png" height="60" width="100" />

      <div className="list">
        <NavLink to="/" className="list-item">
          Home
        </NavLink>
        <NavLink to="/" className={"list-item"}>
          About Us
        </NavLink>
        <NavLink to="/" className={"list-item"}>
          Donate
        </NavLink>
        <NavLink to="/" className={"list-item"}>
          Our Work
        </NavLink>
        <NavLink to="/" className={"list-item"}>
          Volunteer
        </NavLink>
        <NavLink to="/" className={"list-item"}>
          Reports
        </NavLink>
        <NavLink to="/" className={"list-item"}>
          Contacts
        </NavLink>
      </div>
      <div className="search">
        <FaSearch /> Search...
      </div>
    </div>
  );
}
export default Header;
