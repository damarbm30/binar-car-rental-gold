import { logo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3 shadow-md-sm">
      <div className="container-fluid justify-content-start-md">
        <a className="navbar-brand d-none d-sm-block offset-md-1" href="#">
          <img src={logo} alt="logo" />
        </a>
        <a className="navbar-brand offset-md-1 fw-bold d-block d-sm-none" href="#">
          BCR
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
          <ul className="navbar-nav offset-lg-8">
            <li className="nav-item">
              <a className="nav-link text-black" href="#services">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#whyus">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#faq">
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
