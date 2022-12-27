import { Navbar } from "../../components";
import "./Header.css";
import { car } from "../../assets/index";

const Header = () => {
  return (
    <header className="header container-fluid">
      <Navbar />
      <div className="header__items row align-items-center">
        <div className="header__item col">
          <h1 className="mb-0 fw-bold">Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
          <p className="col-9 mt-3 text-dark fw-bold">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
            siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </p>
          <button className="btn btn-green text-white">Mulai Sewa Mobil</button>
        </div>
        <img src={car} alt="car" className="col pe-0" />
      </div>
    </header>
  );
};
export default Header;
