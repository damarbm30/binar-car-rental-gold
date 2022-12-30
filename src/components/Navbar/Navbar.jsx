import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3">
      <div className="container-fluid justify-content-start">
        <a className="navbar-brand offset-1" href="#">
          Car Rental
        </a>
        <button
          className="navbar-toggler offset-sm-8 offset-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav offset-lg-8 offset-1">
            <li className="nav-item">
              <a className="nav-link text-black" href="#services">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
