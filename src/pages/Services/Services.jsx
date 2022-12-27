import { check, service } from "../../assets";

const Services = () => {
  return (
    <section id="services" className="container section-pt">
      <div className="row align-items-center justify-content-around">
        <img src={service} alt="service" className="col-5 img-fluid" />
        <div className="col-5">
          <h1 className="fs-4 fw-bold">Best Car Rental for any kind of trip in Yogyakarta!</h1>
          <p className="fw-bold">
            Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
            mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <ul className="ps-0">
            <li className="d-flex align-items-center gap-3 mb-3">
              <img src={check} alt="check" />
              <p className="mb-0 fw-bold">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </li>
            <li className="d-flex align-items-center gap-3 mb-3">
              <img src={check} alt="check" />
              <p className="mb-0 fw-bold">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </li>
            <li className="d-flex align-items-center gap-3 mb-3">
              <img src={check} alt="check" />
              <p className="mb-0 fw-bold">Sewa Mobil Jangka Panjang Bulanan</p>
            </li>
            <li className="d-flex align-items-center gap-3 mb-3">
              <img src={check} alt="check" />
              <p className="mb-0 fw-bold">Gratis Antar - Jemput Mobil di Bandara</p>
            </li>
            <li className="d-flex align-items-center gap-3 mb-3">
              <img src={check} alt="check" />
              <p className="mb-0 fw-bold">Layanan Airport Transfer / Drop In Out</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Services;
