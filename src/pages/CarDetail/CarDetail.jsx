import { useParams } from "react-router-dom";

import { Header, Search } from "../../components";

const CarDetail = ({ cars, setCars }) => {
  const { carId } = useParams();

  const car = cars.find((car) => car.id.toString() === carId);
  const { name, price, category, image } = car;

  console.log(car);

  return (
    <main>
      <Header />
      <Search setCars={setCars} />
    </main>
  );
};
export default CarDetail;
