import { Header, Search } from "../../components";
import CarList from "./CarList";

const Cars = ({ cars, setCars, isFiltered, setIsFiltered }) => {
  return (
    <main>
      <Header isFiltered={isFiltered} />
      <Search setCars={setCars} setIsFiltered={setIsFiltered} />
      <CarList cars={cars} setCars={setCars} />
    </main>
  );
};
export default Cars;
