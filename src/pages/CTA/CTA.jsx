import "./CTA.css";

const CTA = () => {
  return (
    <section className="container section-pt">
      <div className="d-flex flex-column align-items-center bg-blue text-white cta">
        <h1 className="text-center fs-sm-3">Sewa Mobil di Yogyakarta Sekarang</h1>
        <p className="mt-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div>
          <button role="button" className="btn btn btn-green text-white fw-bold mt-md-5 mt-3">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTA;
