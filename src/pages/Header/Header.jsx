import "./Header.css";
import { car } from "../../assets/index";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="header__items row align-items-center justify-content-end">
            <div className="header__item col-12 col-md offset-1">
              <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
              <p className="col-9 mt-3 text-dark fw-bold">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button className="btn btn-green text-white fw-bold mt-3">Mulai Sewa Mobil</button>
            </div>
            <img src={car} alt="car" className="col-xs-12 col header__img" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
