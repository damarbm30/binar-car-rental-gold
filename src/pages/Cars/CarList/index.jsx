import { useEffect } from "react";

import { getCars } from "../../../services/carServices";
import Car from "./Car";

const CarList = ({ cars, setCars }) => {
  useEffect(() => {
    getCars(setCars);
  }, []);

  console.log(cars);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row justify-content-center gy-3" style={{ width: "95%" }}>
        {cars.map((item) => {
          const { id, name, price, image } = item;

          return <Car key={id} id={id} name={name} price={price} image={image} />;
        })}
      </div>
    </div>
  );
};
export default CarList;
