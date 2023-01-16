import { Header, Search } from "../../components";
import CarList from "./CarList";

const Cars = ({ cars, setCars }) => {
  return (
    <main>
      <Header />
      <Search setCars={setCars} />
      <CarList cars={cars} setCars={setCars} />
    </main>
  );
};
export default Cars;
