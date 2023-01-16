import { useParams } from "react-router-dom";

import { Header, Search } from "../../components";

const CarDetail = ({ cars, setCars, isFiltered }) => {
  const { carId } = useParams();

  const car = cars.find((car) => car.id.toString() === carId);
  const { name, price, category, image } = car;

  return (
    <>
      <Header isFiltered={isFiltered} />
      <Search setCars={setCars} isDetail />
      <main>
        <div className="container d-flex justify-content-center">
          <div className="row justify-content-center gx-3" style={{ width: "93.33%" }}>
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2>Tentang Paket</h2>
                  <h2>Include</h2>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <h2>Exclude</h2>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h2>Refund, Reschedule, Overtime</h2>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img src={image} alt={name} />
                  <p>{name}</p>
                  <p>{category}</p>
                  <p>Total {price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default CarDetail;
