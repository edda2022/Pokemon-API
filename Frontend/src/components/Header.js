import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-warning header">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          ></img>
          Pokémon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokemon">
                Pokémons
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/berries">
                Berries
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
