import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-body-tertiary navbar-fixed fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          {/* <img
            src={logo}
            alt="Navbar Logo"
            className="mb-1"
            style={{ width: "60px", height: "30px" }}
          /> */}
          <span className="navbar-title h4">Suraj Pathak</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
