// Import Link for navigation
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

// Navigation component
function NavBar() {
  return (
    <nav className="navbar-custom">
      <div className="navbar-title">
        iTunes Media Explorer
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Search
        </Link>

        <Link to="/favourites" className="navbar-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;