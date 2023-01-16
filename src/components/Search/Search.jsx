import { useForm } from "react-hook-form";
import { getCars } from "../../services/carServices";

import "./Search.css";

const Search = ({ setCars }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    getCars(setCars, data);
  };

  return (
    <form className="container position-relative section-pb" onSubmit={handleSubmit(onSubmit)}>
      <div className="card col-11 mx-auto position-absolute start-50 translate-middle">
        <div className="card-body row">
          <div className="col">
            <div>
              <label htmlFor="name" className="form-label">
                Nama Mobil
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Ketik nama/tipe mobil"
                {...register("name")}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="carCategory" className="form-label">
              Kategori
            </label>
            <select id="carCategory" className="form-select text-muted" {...register("category")}>
              <option value="" hidden>
                Masukkan Kapasitas Mobil
              </option>
              <option value="">-</option>
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="carCategory" className="form-label">
              Harga
            </label>
            <select id="carCategory" className="form-select text-muted" {...register("price")}>
              <option value="" hidden>
                Masukkan Harga Sewa per Hari
              </option>
              <option value="0-399999">&lt; Rp400.000</option>
              <option value="400000-600000">Rp400.000 - Rp600.000</option>
              <option value="400001-2000000000">&gt; Rp600.000</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="carCategory" className="form-label">
              Status
            </label>
            <select id="carCategory" className="form-select text-muted fw-bold" {...register("isRented")}>
              <option value="false">Bisa dipakai</option>
              <option value="true">Disewa</option>
            </select>
          </div>
          <div className="d-flex align-items-end form-button">
            <button role="button" type="submit" className="btn btn-green text-white fw-bold">
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Search;
