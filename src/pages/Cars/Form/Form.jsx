import "./Form.css";

const Form = () => {
  return (
    <form className="container position-relative">
      <div className="card col-11 mx-auto position-absolute start-50 translate-middle">
        <div className="card-body row">
          <div className="col">
            <div>
              <label for="carName" className="form-label">
                Nama Mobil
              </label>
              <input type="text" className="form-control" id="carName" placeholder="Ketik nama/tipe mobil" />
            </div>
          </div>
          <div className="col">
            <label for="carCategory" className="form-label">
              Kategori
            </label>
            <select id="carCategory" className="form-select text-muted">
              <option hidden>Masukkan Kapasitas Mobil</option>
              <option>2 - 4 orang</option>
              <option>4 - 6 orang</option>
              <option>6 - 8 orang</option>
            </select>
          </div>
          <div className="col">
            <label for="carCategory" className="form-label">
              Harga
            </label>
            <select id="carCategory" className="form-select text-muted">
              <option hidden>Masukkan Harga Sewa per Hari</option>
              <option>&lt; Rp400.000</option>
              <option>Rp400.000 - Rp600.000</option>
              <option>&gt; Rp600.000</option>
            </select>
          </div>
          <div className="col">
            <label for="carCategory" className="form-label">
              Status
            </label>
            <select id="carCategory" className="form-select text-muted fw-bold">
              <option hidden>Disewa</option>
              <option>Disewa</option>
            </select>
          </div>
          <div className="d-flex align-items-end form-button">
            <button role="button" className="btn btn-green text-white fw-bold">
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
