import { Link } from "react-router-dom";

const Car = ({ id, name, price, image }) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);

  return (
    <div className="col-md-4 col-12">
      <Link className="card text-decoration-none text-reset" to={`/car/${id}`}>
        <div className="card-body d-flex flex-column gap-1">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={image} alt={name} height={160} className="rounded" />
          </div>
          <p className="mt-4">{name}</p>
          <p className="fw-bold">{formattedPrice} / hari</p>
          <p className="fw-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Car;
